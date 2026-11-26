import { useEffect, useId, useRef, useState, type FormEvent } from 'react';

/**
 * Multi-step "Request a quote" form (React island, used on /contact/).
 * Posts JSON to the Cloudflare Pages Function at /api/quote
 * (functions/api/quote.ts), which verifies Turnstile and emails via Resend.
 */

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
let turnstileLoading: Promise<void> | null = null;
function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  turnstileLoading ??= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = TURNSTILE_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => { turnstileLoading = null; reject(new Error('turnstile')); };
    document.head.appendChild(s);
  });
  return turnstileLoading;
}

interface Props {
  endpoint: string;
  services: string[];
  /** Cloudflare Turnstile site key; empty disables the widget */
  turnstileSiteKey?: string;
}

type Data = {
  service: string;
  message: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  company: string;
};

const STEPS = ['Service', 'Project', 'Contact'] as const;
const BUDGETS = ['Under $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+'];
const TIMELINES = ['As soon as possible', 'Within 1–3 months', 'Within 3–6 months', 'Flexible / not sure yet'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function QuoteForm({ endpoint, services, turnstileSiteKey = '' }: Props) {
  const uid = useId();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>({ service: '', message: '', timeline: '', budget: '', name: '', email: '', company: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof Data, string>>>({});
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const honeypot = useRef<HTMLInputElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const turnstileEl = useRef<HTMLDivElement>(null);
  const turnstileId = useRef<string | undefined>(undefined);
  const [token, setToken] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Render the Turnstile spam check on the last step (only when a site key is configured).
  useEffect(() => {
    if (!turnstileSiteKey || step !== STEPS.length - 1 || !turnstileEl.current) return;
    let cancelled = false;
    loadTurnstile()
      .then(() => {
        if (cancelled || !turnstileEl.current || !window.turnstile) return;
        turnstileId.current = window.turnstile.render(turnstileEl.current, {
          sitekey: turnstileSiteKey,
          theme: 'light',
          callback: (t: string) => setToken(t),
          'expired-callback': () => setToken(''),
          'error-callback': () => setToken(''),
        });
      })
      .catch(() => setErrorMsg('The spam check could not load. Please disable blockers for this page and reload.'));
    return () => {
      cancelled = true;
      if (turnstileId.current && window.turnstile) window.turnstile.remove(turnstileId.current);
      turnstileId.current = undefined;
      setToken('');
    };
  }, [step, turnstileSiteKey]);

  const set = (k: keyof Data) => (v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (s: number) => {
    const e: Partial<Record<keyof Data, string>> = {};
    if (s === 0 && !data.service) e.service = 'Please choose a service.';
    if (s === 1 && data.message.trim().length < 20) e.message = 'Please describe your project in a few sentences (at least 20 characters).';
    if (s === 2) {
      if (!data.name.trim()) e.name = 'Please enter your name.';
      if (!EMAIL_RE.test(data.email.trim())) e.email = 'Please enter a valid email address.';
    }
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => document.getElementById(`${uid}-${Object.keys(e)[0]}`)?.focus());
      return false;
    }
    return true;
  };

  const go = (to: number) => {
    setStep(to);
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  const next = () => { if (validate(step)) go(step + 1); };

  const submit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (step < STEPS.length - 1) return next();
    if (!validate(step)) return;
    if (turnstileSiteKey && !token) {
      setErrorMsg('Please complete the quick spam check above.');
      setState('error');
      return;
    }
    setState('sending');
    setErrorMsg('');
    const payload: Record<string, string> = {};
    (Object.keys(data) as (keyof Data)[]).forEach((k) => { payload[k] = data[k].trim(); });
    payload._gotcha = honeypot.current?.value ?? '';
    if (token) payload['cf-turnstile-response'] = token;
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      });
      const out = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !out.ok) throw new Error(out.error || 'Something went wrong. Please try again in a moment.');
      setState('sent');
      requestAnimationFrame(() => headingRef.current?.focus());
    } catch (e) {
      setErrorMsg(e instanceof Error && e.message ? e.message : 'Something went wrong. Please try again in a moment.');
      setState('error');
      if (turnstileId.current && window.turnstile) { window.turnstile.reset(turnstileId.current); setToken(''); }
    }
  };

  const field = (k: keyof Data) => ({
    id: `${uid}-${k}`,
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `${uid}-${k}-err` : undefined,
  });
  const err = (k: keyof Data) =>
    errors[k] ? <p className="field-error" id={`${uid}-${k}-err`}>{errors[k]}</p> : null;

  if (state === 'sent') {
    return (
      <div className="quote-wizard quote-done" role="status">
        <h3 ref={headingRef} tabIndex={-1}>Thank you, {data.name.split(' ')[0] || 'we got it'}!</h3>
        <p>Your quote request has been sent. We will reply to <strong>{data.email}</strong> within one business day with next steps.</p>
      </div>
    );
  }

  return (
    <form className="quote-wizard form" onSubmit={submit} noValidate aria-labelledby={`${uid}-title`}>
      <ol className="wizard-steps" aria-label="Progress">
        {STEPS.map((label, i) => (
          <li key={label} className={i === step ? 'is-current' : i < step ? 'is-done' : ''} aria-current={i === step ? 'step' : undefined}>
            <span className="wizard-dot">{i < step ? '✓' : i + 1}</span>
            <span className="wizard-label">{label}</span>
          </li>
        ))}
      </ol>

      <div key={step} className="wizard-pane">
      <h3 id={`${uid}-title`} ref={headingRef} tabIndex={-1} className="wizard-title">
        {step === 0 && 'What can we help you with?'}
        {step === 1 && 'Tell us about your project'}
        {step === 2 && 'How can we reach you?'}
      </h3>

      {step === 0 && (
        <fieldset className="wizard-fieldset" aria-describedby={errors.service ? `${uid}-service-err` : undefined}>
          <legend className="sr-only">Service</legend>
          <div className="option-grid" id={`${uid}-service`} tabIndex={-1}>
            {[...services, 'Something else'].map((s) => (
              <label key={s} className={`option-card${data.service === s ? ' is-selected' : ''}`}>
                <input type="radio" name="service" value={s} checked={data.service === s} onChange={() => set('service')(s)} />
                <span>{s}</span>
              </label>
            ))}
          </div>
          {err('service')}
        </fieldset>
      )}

      {step === 1 && (
        <>
          <div className="field">
            <label htmlFor={`${uid}-message`}>Project details *</label>
            <textarea {...field('message')} value={data.message} onChange={(e) => set('message')(e.target.value)} placeholder="What are you building or improving? Goals, current challenges, links…" />
            {err('message')}
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor={`${uid}-timeline`}>Timeline</label>
              <select {...field('timeline')} value={data.timeline} onChange={(e) => set('timeline')(e.target.value)}>
                <option value="">Select a timeline</option>
                {TIMELINES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor={`${uid}-budget`}>Estimated budget</label>
              <select {...field('budget')} value={data.budget} onChange={(e) => set('budget')(e.target.value)}>
                <option value="">Prefer not to say</option>
                {BUDGETS.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="form-row">
            <div className="field">
              <label htmlFor={`${uid}-name`}>Full name *</label>
              <input {...field('name')} type="text" autoComplete="name" value={data.name} onChange={(e) => set('name')(e.target.value)} placeholder="Jane Doe" />
              {err('name')}
            </div>
            <div className="field">
              <label htmlFor={`${uid}-email`}>Work email *</label>
              <input {...field('email')} type="email" autoComplete="email" value={data.email} onChange={(e) => set('email')(e.target.value)} placeholder="jane@company.com" />
              {err('email')}
            </div>
          </div>
          <div className="field">
            <label htmlFor={`${uid}-company`}>Company</label>
            <input {...field('company')} type="text" autoComplete="organization" value={data.company} onChange={(e) => set('company')(e.target.value)} placeholder="Company name" />
          </div>
          <dl className="wizard-summary">
            <div><dt>Service</dt><dd>{data.service}</dd></div>
            <div><dt>Timeline</dt><dd>{data.timeline || 'Not specified'}</dd></div>
            <div><dt>Budget</dt><dd>{data.budget || 'Prefer not to say'}</dd></div>
          </dl>
          {turnstileSiteKey && <div className="turnstile-box" ref={turnstileEl} />}
        </>
      )}
      </div>

      <input ref={honeypot} className="hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="wizard-actions">
        {step > 0 && (
          <button type="button" className="btn btn-ghost" onClick={() => go(step - 1)} disabled={state === 'sending'}>Back</button>
        )}
        <button type="submit" className="btn btn-primary" disabled={state === 'sending'}>
          {step < STEPS.length - 1 ? 'Continue' : state === 'sending' ? 'Sending…' : 'Send quote request'}
        </button>
      </div>
      <p className="form-status err" role="alert">{state === 'error' ? errorMsg || 'Something went wrong. Please try again in a moment.' : ''}</p>
      {step === STEPS.length - 1 && (
        <p className="form-note">By submitting, you agree to our <a href="/privacy-policy/" style={{ color: 'var(--teal)' }}>Privacy Policy</a>. We never share your details.</p>
      )}
    </form>
  );
}
