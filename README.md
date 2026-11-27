# Sahl Technology — company website

Static, SEO-first marketing site built with [Astro](https://astro.build).

## Run locally
```bash
npm install
npm run dev       # http://localhost:4321 (live reload)
npm run build     # production build → dist/
npm run preview   # serve the production build
```

## Before going live — fill in
All business details live in **`src/config/site.ts`**:
- `url` — the live address, `https://studio.sahlcalc.com` (used for canonical URLs, sitemap, OG tags, robots.txt, llms.txt)
- `turnstileSiteKey` — Cloudflare Turnstile **site** key (public) for the quote form's spam check
- `contact.email`, `contact.phone`, `contact.phoneHref`, `contact.address`
- `social.*` — LinkedIn, GitHub, X, Facebook, Instagram, YouTube URLs
- `googleSiteVerification` — Search Console HTML-tag code (or verify by DNS)
- `ga4Id` — Google Analytics 4 ID; it loads only after a visitor accepts analytics cookies

Empty values are hidden automatically everywhere (header, footer, contact page,
structured data). Also review:
- `src/data/projects.ts` — project summaries
- `src/pages/privacy-policy.astro`, `src/pages/terms.astro` — legal review

Security and cache headers are in `public/_headers`, and old URLs are redirected (301) in
`public/_redirects`. Both work on Netlify and Cloudflare Pages. The SEO audit and fix reports are in `seo-reports/`.

## Where content lives
| What | File |
|---|---|
| Services (10 pages, FAQs, keywords) | `src/data/services.ts` |
| Projects | `src/data/projects.ts` |
| Process, values, home FAQs | `src/data/content.ts` |
| Photos | `src/assets/` + `src/data/photos.ts` |
| Styles (glassmorphism design system) | `src/styles/global.css` |

## SEO included
Unique title/description per page, canonical URLs, Open Graph + Twitter cards,
JSON-LD (Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage,
HowTo), XML sitemap, robots.txt, llms.txt, web manifest, 301 redirects from
old `.html` URLs (`public/_redirects`), self-hosted fonts, responsive WebP
images, semantic HTML and accessibility basics.

## Deploy (Cloudflare Workers)
The site runs as a Cloudflare **Worker** with static assets (`wrangler.jsonc`, entry `worker/index.ts`).
The Worker serves `dist/` (including `_headers` and `_redirects`) and handles `POST /api/quote`
with the shared handler in `functions/api/quote.ts` (the same file also works as a Pages Function).

1. **Worker project** (already created as `sahltechnology`, connected to this repo):
   build command `npm run build`, deploy command `npx wrangler deploy`, production branch `main`.
   Pushes to `main` deploy to production; other branches get preview URLs.
2. **Custom domain:** Worker → Settings → Domains & Routes → Add → Custom domain → `studio.sahlcalc.com`.
3. **Resend (email):** resend.com → Domains → add `studio.sahlcalc.com`, add the DNS records it
   shows in Cloudflare DNS, wait for "Verified". Then API Keys → create a key (Sending access).
4. **Turnstile (spam check):** Cloudflare → Turnstile → Add widget for `studio.sahlcalc.com`.
   Put the **site key** in `src/config/site.ts` → `turnstileSiteKey`.
5. **Variables and secrets** (Worker → Settings → Variables and Secrets). `keep_vars` in `wrangler.jsonc` keeps them across deploys:

   | Name | Value | Type |
   |---|---|---|
   | `RESEND_API_KEY` | your Resend API key | Secret |
   | `TURNSTILE_SECRET` | Turnstile **secret** key | Secret |
   | `QUOTE_TO_EMAIL` | inbox that receives enquiries | Text |
   | `QUOTE_FROM_EMAIL` | `quotes@studio.sahlcalc.com` (any name on the verified domain) | Text |
   | `QUOTE_FROM_NAME` | `Sahl Technology Quotes` | Text |
   | `QUOTE_REPLY_TO` | optional: where client replies to the confirmation go (default: `QUOTE_TO_EMAIL`) | Text |
   | `QUOTE_AUTOREPLY` | optional: `off` disables the confirmation email to the client | Text |

   Redeploy (or push to `main`) after changing variables.

### Sending email with Google Apps Script (no Resend needed)
`apps-script/Code.gs` is a Google Apps Script web app that sends the emails from your Gmail
account and logs every enquiry to a Google Sheet. When `APPS_SCRIPT_URL` and
`APPS_SCRIPT_SECRET` are set, the form uses it instead of Resend.

1. script.google.com → New project → paste `apps-script/Code.gs` → Save.
2. Choose `setup` → **Run** → approve Google's permission screen. The execution log shows the
   lead-sheet link and the `APPS_SCRIPT_SECRET` value.
3. **Deploy → New deployment → Web app**: Execute as **Me**, Who has access **Anyone** → Deploy,
   and copy the web-app URL (ends in `/exec`).
4. In Cloudflare Pages → Settings → Variables and secrets (Production) add:
   `APPS_SCRIPT_URL` (Secret), `APPS_SCRIPT_SECRET` (Secret), `QUOTE_TO_EMAIL`, `QUOTE_FROM_NAME`
   (`QUOTE_FROM_EMAIL` and `RESEND_API_KEY` are not needed). Then redeploy.

Free Gmail accounts can send to about 100 recipients a day (each enquiry uses 2).

**How the form works:** the enquiry email goes to `QUOTE_TO_EMAIL` with the client as Reply-To,
so pressing Reply answers the client directly. The client gets a confirmation email whose
Reply-To is your inbox. Bots are stopped by a hidden honeypot field, Turnstile and a same-origin check.

**Test locally:** `cp .dev.vars.example .dev.vars` (git-ignored), then `npm run build && npx wrangler dev`
and open http://127.0.0.1:8787/. With `QUOTE_DRY_RUN=1` the form validates but sends nothing.
