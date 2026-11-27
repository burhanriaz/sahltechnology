/**
 * POST /api/quote — Cloudflare Pages Function for the "Request a quote" form.
 *
 * 1. Accepts JSON (from the React quote form) or form-encoded data.
 * 2. Rejects cross-site posts, bots (honeypot + Cloudflare Turnstile) and invalid input.
 * 3. Sends two emails, through a Google Apps Script web app (apps-script/Code.gs, sends from
 *    your Gmail and logs to a Google Sheet) or, if that isn't configured, through Resend:
 *      - the enquiry to the Sahl Technology inbox (Reply goes straight to the client)
 *      - a confirmation to the client (Reply goes to the Sahl Technology inbox)
 *
 * Configure in Cloudflare Pages → Settings → Variables and secrets (see README):
 *   APPS_SCRIPT_URL    (secret)  Apps Script web-app URL (…/exec)  ─┐ Gmail sending
 *   APPS_SCRIPT_SECRET (secret)  value logged by setup() in Code.gs ─┘ (preferred)
 *   RESEND_API_KEY     (secret)  Resend API key (alternative to Apps Script)
 *   TURNSTILE_SECRET   (secret)  Turnstile secret key; when set, a valid token is required
 *   QUOTE_TO_EMAIL             inbox that receives enquiries
 *   QUOTE_FROM_EMAIL           Resend only: sender on a verified domain, e.g. quotes@studio.sahlcalc.com
 *   QUOTE_FROM_NAME            sender display name (default "Sahl Technology Quotes")
 *   QUOTE_REPLY_TO             optional: where client replies to the confirmation go (default QUOTE_TO_EMAIL)
 *   QUOTE_AUTOREPLY            optional: "off" disables the client confirmation email
 *   QUOTE_DRY_RUN              local testing only: "1" validates but sends nothing
 */

interface Env {
  APPS_SCRIPT_URL?: string;
  APPS_SCRIPT_SECRET?: string;
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET?: string;
  QUOTE_TO_EMAIL?: string;
  QUOTE_FROM_EMAIL?: string;
  QUOTE_FROM_NAME?: string;
  QUOTE_REPLY_TO?: string;
  QUOTE_AUTOREPLY?: string;
  QUOTE_DRY_RUN?: string;
}

interface Ctx {
  request: Request;
  env: Env;
}

type Fields = Record<'name' | 'email' | 'company' | 'service' | 'timeline' | 'budget' | 'message', string>;

const LIMITS: Record<keyof Fields, number> = {
  name: 100, email: 254, company: 120, service: 100, timeline: 60, budget: 60, message: 5000,
};
const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/** Strip CR/LF so user input can never inject email headers via the subject. */
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();

async function readBody(request: Request): Promise<Record<string, string>> {
  const type = request.headers.get('Content-Type') ?? '';
  if (type.includes('application/json')) {
    const data = (await request.json()) as Record<string, unknown>;
    return Object.fromEntries(Object.entries(data).map(([k, v]) => [k, typeof v === 'string' ? v : '']));
  }
  const form = await request.formData();
  const out: Record<string, string> = {};
  form.forEach((v, k) => { if (typeof v === 'string') out[k] = v; });
  return out;
}

async function verifyTurnstile(secret: string, token: string, ip: string | null): Promise<boolean> {
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const out = (await res.json()) as { success?: boolean };
  return out.success === true;
}

async function sendEmail(env: Env, email: Record<string, unknown>) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(email),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

/* ── Email templates (inline styles for email clients) ── */
const wrap = (title: string, inner: string) => `<!doctype html><html><body style="margin:0;background:#f5f7fa;font-family:Arial,Helvetica,sans-serif;color:#1f2a44">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa;padding:24px 0"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e3e8ef;border-radius:12px;overflow:hidden">
<tr><td style="background:#06183b;padding:20px 28px;color:#ffffff;font-size:18px;font-weight:bold">Sahl <span style="color:#5fd0cb">Technology</span></td></tr>
<tr><td style="padding:28px"><h1 style="margin:0 0 16px;font-size:20px;color:#06183b">${title}</h1>${inner}</td></tr>
<tr><td style="padding:16px 28px;background:#f5f7fa;color:#6b7a90;font-size:12px">Sahl Technology · Web development &amp; automation</td></tr>
</table></td></tr></table></body></html>`;

const row = (label: string, value: string) =>
  `<tr><td style="padding:8px 12px 8px 0;color:#6b7a90;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:8px 0;font-size:14px;color:#1f2a44">${value ? esc(value) : '<span style="color:#9aa6b8">—</span>'}</td></tr>`;

function enquiryEmail(f: Fields) {
  const html = wrap(
    'New quote request',
    `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
${row('Name', f.name)}${row('Email', f.email)}${row('Company', f.company)}${row('Service', f.service)}${row('Timeline', f.timeline)}${row('Budget', f.budget)}
</table>
<h2 style="margin:20px 0 8px;font-size:15px;color:#06183b">Project details</h2>
<div style="white-space:pre-wrap;font-size:14px;line-height:1.6;background:#f5f7fa;border:1px solid #e3e8ef;border-radius:8px;padding:14px">${esc(f.message)}</div>
<p style="margin:20px 0 0;font-size:13px;color:#6b7a90">Press Reply to answer ${esc(f.name)} directly.</p>`,
  );
  const text = `New quote request\n\nName: ${f.name}\nEmail: ${f.email}\nCompany: ${f.company || '-'}\nService: ${f.service}\nTimeline: ${f.timeline || '-'}\nBudget: ${f.budget || '-'}\n\nProject details:\n${f.message}\n`;
  return { html, text };
}

function confirmationEmail(f: Fields) {
  const first = f.name.split(/\s+/)[0] || f.name;
  const html = wrap(
    `Thanks, ${esc(first)}. We've received your request`,
    `<p style="font-size:15px;line-height:1.6;margin:0 0 14px">Thank you for contacting Sahl Technology about <strong>${esc(f.service)}</strong>. We'll review your project details and reply within one business day with next steps.</p>
<p style="font-size:15px;line-height:1.6;margin:0 0 14px">If you'd like to add anything, such as links, documents or a preferred time for a call, just reply to this email.</p>
<h2 style="margin:20px 0 8px;font-size:15px;color:#06183b">Your request</h2>
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">${row('Service', f.service)}${row('Timeline', f.timeline)}${row('Budget', f.budget)}</table>
<div style="white-space:pre-wrap;font-size:14px;line-height:1.6;background:#f5f7fa;border:1px solid #e3e8ef;border-radius:8px;padding:14px;margin-top:10px">${esc(f.message)}</div>
<p style="font-size:15px;line-height:1.6;margin:20px 0 0">Best regards,<br>Sahl Technology</p>`,
  );
  const text = `Hi ${first},\n\nThank you for contacting Sahl Technology about ${f.service}. We'll review your project details and reply within one business day with next steps.\n\nIf you'd like to add anything, just reply to this email.\n\nYour request:\n${f.message}\n\nBest regards,\nSahl Technology\n`;
  return { html, text };
}

export const onRequestPost = async ({ request, env }: Ctx): Promise<Response> => {
  // Same-origin only (browsers always send Origin on cross-site POSTs).
  const origin = request.headers.get('Origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json(403, { ok: false, error: 'Forbidden.' });
  }

  let raw: Record<string, string>;
  try {
    raw = await readBody(request);
  } catch {
    return json(400, { ok: false, error: 'Invalid request.' });
  }

  // Honeypot: bots fill hidden fields. Pretend success, send nothing.
  if ((raw._gotcha ?? '').trim()) return json(200, { ok: true });

  const f = Object.fromEntries(
    (Object.keys(LIMITS) as (keyof Fields)[]).map((k) => [k, (raw[k] ?? '').trim()]),
  ) as Fields;
  f.name = oneLine(f.name); f.company = oneLine(f.company); f.service = oneLine(f.service);
  f.timeline = oneLine(f.timeline); f.budget = oneLine(f.budget); f.email = oneLine(f.email);

  const errors: string[] = [];
  if (!f.name) errors.push('name');
  if (!EMAIL_RE.test(f.email)) errors.push('email');
  if (!f.service) errors.push('service');
  if (f.message.length < 20) errors.push('message');
  for (const k of Object.keys(LIMITS) as (keyof Fields)[]) {
    if (f[k].length > LIMITS[k]) errors.push(k);
  }
  if (errors.length) return json(422, { ok: false, error: 'Please check the highlighted fields.', fields: [...new Set(errors)] });

  if (env.TURNSTILE_SECRET) {
    const token = raw['cf-turnstile-response'] ?? raw.turnstileToken ?? '';
    const ok = token && (await verifyTurnstile(env.TURNSTILE_SECRET, token, request.headers.get('CF-Connecting-IP')));
    if (!ok) return json(403, { ok: false, error: 'Spam check failed. Please refresh the page and try again.' });
  }

  if (env.QUOTE_DRY_RUN === '1') return json(200, { ok: true, dryRun: true });

  const subject = oneLine(`Quote request: ${f.service} from ${f.name}${f.company ? ` (${f.company})` : ''}`).slice(0, 180);
  const autoreply = env.QUOTE_AUTOREPLY !== 'off';

  // ── Preferred: Google Apps Script web app (sends from your Gmail, logs to a Sheet) ──
  if (env.APPS_SCRIPT_URL && env.APPS_SCRIPT_SECRET) {
    if (!env.QUOTE_TO_EMAIL) {
      console.error('quote: missing QUOTE_TO_EMAIL');
      return json(500, { ok: false, error: 'The form is not configured yet. Please try again later.' });
    }
    const enquiry = enquiryEmail(f);
    const conf = confirmationEmail(f);
    try {
      const res = await fetch(env.APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        body: JSON.stringify({
          secret: env.APPS_SCRIPT_SECRET,
          fields: f,
          config: {
            to: env.QUOTE_TO_EMAIL,
            fromName: env.QUOTE_FROM_NAME || 'Sahl Technology Quotes',
            replyTo: env.QUOTE_REPLY_TO || env.QUOTE_TO_EMAIL,
          },
          enquiry: { subject, html: enquiry.html, text: enquiry.text },
          confirmation: autoreply
            ? { subject: 'We received your quote request | Sahl Technology', html: conf.html, text: conf.text }
            : null,
        }),
      });
      const out = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !out.ok) throw new Error(`Apps Script ${res.status}: ${out.error ?? 'no JSON response'}`);
    } catch (err) {
      console.error('quote: Apps Script send failed', err);
      return json(502, { ok: false, error: 'We could not send your request. Please try again in a moment.' });
    }
    return json(200, { ok: true });
  }

  // ── Alternative: Resend ──
  if (!env.RESEND_API_KEY || !env.QUOTE_TO_EMAIL || !env.QUOTE_FROM_EMAIL) {
    console.error('quote: no sender configured (APPS_SCRIPT_URL + APPS_SCRIPT_SECRET, or RESEND_API_KEY + QUOTE_FROM_EMAIL) or QUOTE_TO_EMAIL missing');
    return json(500, { ok: false, error: 'The form is not configured yet. Please try again later.' });
  }

  const from = `${env.QUOTE_FROM_NAME || 'Sahl Technology Quotes'} <${env.QUOTE_FROM_EMAIL}>`;
  try {
    const enquiry = enquiryEmail(f);
    await sendEmail(env, {
      from,
      to: [env.QUOTE_TO_EMAIL],
      reply_to: f.email,
      subject,
      html: enquiry.html,
      text: enquiry.text,
    });
  } catch (err) {
    console.error('quote: enquiry email failed', err);
    return json(502, { ok: false, error: 'We could not send your request. Please try again in a moment.' });
  }

  if (autoreply) {
    try {
      const conf = confirmationEmail(f);
      await sendEmail(env, {
        from,
        to: [f.email],
        reply_to: env.QUOTE_REPLY_TO || env.QUOTE_TO_EMAIL,
        subject: 'We received your quote request | Sahl Technology',
        html: conf.html,
        text: conf.text,
      });
    } catch (err) {
      // The enquiry already reached us; don't fail the request over the confirmation.
      console.error('quote: confirmation email failed', err);
    }
  }

  return json(200, { ok: true });
};
