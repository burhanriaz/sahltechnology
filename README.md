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

## Deploy (Cloudflare Pages)
The quote form sends email through a Cloudflare Pages Function (`functions/api/quote.ts`),
so the site is hosted on **Cloudflare Pages**.

1. **Pages project:** Workers & Pages → Create → Pages → connect this Git repo.
   Build command `npm run build`, output directory `dist`, env var `NODE_VERSION=22`.
2. **Custom domain:** Pages project → Custom domains → add `studio.sahlcalc.com`.
3. **Resend (email):** resend.com → Domains → add `studio.sahlcalc.com`, add the DNS records it
   shows in Cloudflare DNS, wait for "Verified". Then API Keys → create a key (Sending access).
4. **Turnstile (spam check):** Cloudflare → Turnstile → Add widget for `studio.sahlcalc.com`.
   Put the **site key** in `src/config/site.ts` → `turnstileSiteKey`.
5. **Environment variables** (Pages project → Settings → Variables and secrets, Production):

   | Name | Value | Type |
   |---|---|---|
   | `RESEND_API_KEY` | your Resend API key | Secret |
   | `TURNSTILE_SECRET` | Turnstile **secret** key | Secret |
   | `QUOTE_TO_EMAIL` | inbox that receives enquiries | Text |
   | `QUOTE_FROM_EMAIL` | `quotes@studio.sahlcalc.com` (any name on the verified domain) | Text |
   | `QUOTE_FROM_NAME` | `Sahl Technology Quotes` | Text |
   | `QUOTE_REPLY_TO` | optional: where client replies to the confirmation go (default: `QUOTE_TO_EMAIL`) | Text |
   | `QUOTE_AUTOREPLY` | optional: `off` disables the confirmation email to the client | Text |

   Redeploy after changing variables.

**How the form works:** the enquiry email goes to `QUOTE_TO_EMAIL` with the client as Reply-To,
so pressing Reply answers the client directly. The client gets a confirmation email whose
Reply-To is your inbox. Bots are stopped by a hidden honeypot field, Turnstile and a same-origin check.

**Test locally:** `cp .dev.vars.example .dev.vars` (git-ignored), then `npm run preview:cf` and open
http://127.0.0.1:8788/. With `QUOTE_DRY_RUN=1` the form validates but sends nothing.
