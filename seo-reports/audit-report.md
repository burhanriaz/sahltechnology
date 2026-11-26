# SEO Audit Report — BitFocux (pre-launch)

- **Target:** repo `D:\Repo\bitfocux` (Astro 7, branch `redesign-astro`, uncommitted on top of `8891049`), production build `dist/` served locally at `http://127.0.0.1:4321/`; intended production domain `https://bitfocux.com`
- **Rendering mode:** static HTML (Astro SSG, no client-side rendering of content)
- **Pages audited:** all 18 indexable pages + 404 — templates: home, services listing, service detail (×10), projects, about, process, contact, legal (×2)
- **Date:** 2026-11-26
- **Auditor:** Claude Code (Claude Opus 5.5) with the `br-web-seo` skill
- **Data sources:** live fetch of local production build · `seo_check.py` JSON (`seo-reports/run.json`) · built HTML/JSON-LD/sitemap parsed from `dist/` · rendered DOM spot-checks in Chrome (home, services, 4 service pages) · repo source. **Not available:** Search Console, GA4, PageSpeed/CrUX, backlink data, the live production host.
- **Check catalog:** `references/audit-checks.md`

> This report is the **diagnosis**. The matching **fix report** is `seo-reports/fix-report.md`.

---

## 1. Executive summary

The site's SEO foundations are strong: every page is static HTML with one H1, a unique title and description, a production canonical, Open Graph/Twitter tags, valid JSON-LD (Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage), a clean sitemap of 18 canonical URLs, a real 404, no broken internal links, and an AI-crawler-friendly `robots.txt` plus `llms.txt`.

**The site is not ready to go live yet, but the reasons are almost all outside the code.** The production domain `bitfocux.com` does not resolve in DNS today, so HTTPS, canonical targets and the sitemap can't be verified on the real host. There is no Search Console or analytics. The contact page and Organization schema have no email, phone or address, which is planned but weakens trust and local signals until added.

On the code side there are only medium and low fixes: over-long meta descriptions, first images lazy-loaded on 3 pages, a skipped heading level on 2 pages, no security headers, and summaries that don't yet mention the new QA, hiring and dedicated-developer services. The `/services/digital-marketing-seo/` slug no longer matches the "SEO Services" page, and pre-launch is the cheapest moment to rename it.

- **Health score:** **82/100 (good) — provisional**
- **Score cap:** none applied. The blocker checks that would cap (HTTPS, canonical target 200) are **not measured** because the production host isn't live, not failed.
- **Coverage:** ~85 of ~110 applicable checks measured; Performance (CWV), HTTPS/HSTS, WAF behaviour and analytics data are not measured (section 6).

## 2. Scorecard

| Category | Weight | Score | Measured / applicable | Notes |
|----------|:------:|:-----:|:---------------------:|-------|
| Crawlability & indexability | 20% | **9.0** /10 | provisional | robots, 200s, real 404, sitemap, canonicals all correct in the build; HTTPS and live canonical targets not measurable until the domain is live |
| On-page content & HTML | 15% | **7.5** /10 | high | 12 long meta descriptions; first image lazy on 3 pages; h1→h3 skip on 2 pages; contact details missing (TRUST) |
| Structured data & social | 10% | **8.5** /10 | high | valid JSON-LD on all pages; Organization lacks `sameAs`/`contactPoint`/`address` (pending details) |
| Performance / Core Web Vitals | 20% | **not measured** | 0 | no PSI/CrUX/Lighthouse; weight spread over the other categories. Static HTML, WebP/AVIF responsive images and self-hosted fonts are good signs |
| Internal linking | 10% | **9.5** /10 | full | 0 broken links; every page within 1 click of home; each page has ≥17 internal inbound links |
| GEO / AI-search readiness | 10% | **8.5** /10 | high | AI search/training bots deliberately allowed; llms.txt present; content in raw HTML; llms.txt and Organization descriptions are out of date |
| Mobile & accessibility | 10% | **8.5** /10 | provisional | viewport, `lang`, alt on all images, skip link, reduced-motion support; mobile layout not visually verified |
| Analytics & monitoring | 5% | **2** /10 | partial | no Search Console verification, no GA4/analytics (the cookie consent is ready for it) |
| **Overall** | **100%** | **82 /100** | provisional | weighted average of measured categories (Perf excluded); no cap applied |

## 3. Findings summary

Issues that only exist because the audit ran on `http://127.0.0.1` were reclassified. These are SEC-001 "plain HTTP", INDEX-008/013 "canonical on another host" and CRAWL-006 "sitemap unreachable". They are tracked as **not measured** or as the go-live finding F1, not as code defects. The canonicals correctly point to `https://bitfocux.com/...`.

| # | Check ID | Status | Severity | Category | Finding | Affected pages |
|---|----------|--------|----------|----------|---------|----------------|
| F1 | INDEX-010, CRAWL-006, SEC-001 | fail (go-live) | 🔴 Blocker | Crawlability | Production domain `bitfocux.com` does not resolve in DNS; canonicals, sitemap, OG URLs and `robots.txt` all point there | all |
| F2 | (→ Analytics) | fail | 🟠 High | Analytics | No Search Console verification and no analytics | all |
| F3 | TRUST-002, TRUST-007, SCHEMA | warn | 🟠 High | On-page / Schema | No email, phone or address on the contact page or footer, and none in Organization schema | contact, all (schema) |
| F4 | IMG-007 | warn | 🟠 High | On-page (→ Perf) | First image on the page is `loading="lazy"` | /services/, /projects/, /process/ |
| F5 | SEC (headers) | fail | 🟡 Medium | Crawlability | No security headers (HSTS, nosniff, frame-ancestors/CSP); no `_headers` file | all |
| F6 | URL / ONPAGE | warn | 🟡 Medium | On-page | Slug `/services/digital-marketing-seo/` doesn't match page "SEO Services" / primary keyword | 1 page + all links to it |
| F7 | ONPAGE-007 | warn | 🟡 Medium | On-page | Meta descriptions over 160 characters (162–193) | 12 pages |
| F8 | GEO-007, GEO-009 | warn | 🟡 Medium | GEO | Home meta description, Organization `description`/`knowsAbout` and `llms.txt` summary omit QA automation, dedicated developers and tech hiring | home, schema, llms.txt |
| F9 | ONPAGE-010 | warn | 🟢 Low | On-page | Heading levels skip H1 → H3 (card titles directly under the hero) | /services/, /projects/ |
| F10 | ONPAGE-003 | warn | 🟢 Low | On-page | Title too long (64) on /services/; very short on /privacy-policy/ (25) and /terms/ (27) | 3 pages |
| F11 | ONPAGE-007 | warn | 🟢 Low | On-page | /terms/ description is 48 characters | 1 page |
| F12 | SCHEMA-011 | warn | 🟢 Low | Schema | FAQPage (rich results retired 2026-05-07) and HowTo (retired 2023) | 13 pages |
| F13 | TRUST / E-E-A-T | warn | 🟡 Medium | On-page | No named people, testimonials or measurable project results; projects have no case-study pages | about, projects |
| F14 | Content strategy | warn | 🟡 Medium | On-page | No blog or resources section, so topical authority and long-tail reach are limited to 10 service pages | site |

_Counts: 🔴 1 · 🟠 3 · 🟡 6 · 🟢 4 · not measured 6 groups_

## 4. Detailed findings

### [F1] Production domain not live — 🔴 Blocker · Crawlability · `INDEX-010` `CRAWL-006` `SEC-001`
- **Status:** fail (go-live dependency, not a code bug)
- **What we found:** `bitfocux.com` fails DNS lookup. All canonicals, `og:url`, sitemap `<loc>`s and the `robots.txt` `Sitemap:` line use `https://bitfocux.com`, which is correct *if* that is the real domain.
- **Evidence:** `seo_check.py`: `https://bitfocux.com/ -> URLError: DNS lookup failed for bitfocux.com`; `src/config/site.ts:13` `url: 'https://bitfocux.com'` (flagged "to be confirmed").
- **Why it matters:** Until the domain serves this build over HTTPS, Google can't index it, and canonicals point at a host that returns nothing. If the real domain differs, every canonical and sitemap URL is wrong, which caps the score at 20.
- **Fix ref:** FIX-1

### [F2] No Search Console or analytics — 🟠 High · Analytics
- **What we found:** no `google-site-verification` meta, no GA4/GTM/other analytics in any page.
- **Why it matters:** without Search Console you can't submit the sitemap, see indexing errors or measure queries. Without analytics, SEO work can't be measured. The cookie banner already records consent, so analytics can load only after a visitor accepts.
- **Fix ref:** FIX-2

### [F3] No business contact details — 🟠 High · On-page/Schema · `TRUST-002` `TRUST-007`
- **What we found:** the contact page offers only a form. `SITE.contact.email`, `phone` and `address` are empty, so the footer, contact page and Organization JSON-LD have no contact info. `sameAs` is also empty because no social links are set.
- **Evidence:** `src/config/site.ts` contact/social blocks empty (intentional, "provide later"); Organization JSON-LD on `/` has no `contactPoint`/`address`/`sameAs`.
- **Why it matters:** trust (E-E-A-T), conversion, local SEO and entity recognition by Google and AI assistants. `sameAs` links your brand to its LinkedIn/GitHub profiles.
- **Fix ref:** FIX-3 (code already supports it; fill in the config)

### [F4] First image lazy-loaded — 🟠 High · On-page (→ Perf) · `IMG-007`
- **Evidence:** `/services/` first `<img>` `code-screen…webp` (8/8 lazy); `/projects/` `erp-b…webp` (6/6 lazy); `/process/` `whiteboard…webp` (1/1 lazy). Sources: `src/components/ServiceCard.astro:13`, `src/components/ProjectCard.astro:12`, `src/pages/process.astro:59`.
- **Why it matters:** if one of these is the LCP element on a desktop viewport, lazy-loading delays LCP. The first row of cards is visible above or near the fold at 1536×784.
- **Fix ref:** FIX-4

### [F5] No security headers — 🟡 Medium · `SEC`
- **What we found:** no `public/_headers` (Netlify/Cloudflare Pages) or equivalent host config.
- **Why it matters:** HSTS protects the HTTPS signal. `nosniff` and `frame-ancestors` protect users. These are not ranking factors.
- **Fix ref:** FIX-5

### [F6] SEO page slug mismatch — 🟡 Medium · URL
- **What we found:** the page is titled "SEO Services" with keyword "SEO services", but the URL is `/services/digital-marketing-seo/`.
- **Why it matters:** a short URL that matches the keyword is a small relevance and CTR signal. Pre-launch, nothing is indexed yet, so the rename costs only a 301.
- **Fix ref:** FIX-6

### [F7] Meta descriptions too long — 🟡 Medium · `ONPAGE-007`
- **Evidence:** home 178, about 172, services 177, cloud-devops 170, custom-software 174, seo 183, hire-dedicated-developers 186, it-consulting 162, mobile 165, QA 179, tech-recruitment 193, web-development 172 characters.
- **Why it matters:** Google truncates around 155–160 characters, so the call to action at the end is cut.
- **Fix ref:** FIX-7

### [F8] Site summaries out of date — 🟡 Medium · GEO
- **Evidence:** home description (`src/pages/index.astro:20`), `SITE.description` (Organization `description` and the `llms.txt` intro) and `knowsAbout` don't mention test automation (Playwright/Selenium), dedicated developers/staff augmentation or tech recruitment.
- **Why it matters:** these summaries are what AI assistants and Google reuse to describe the company. Missing services are less likely to be associated with the brand.
- **Fix ref:** FIX-8

### [F9]–[F12] Low-severity hygiene
- **F9:** `/services/` and `/projects/` go H1 → H3 (card titles). Add a section H2. Ref FIX-9.
- **F10/F11:** `/services/` title is 64 characters; legal titles and the `/terms/` description are short. Ref FIX-10.
- **F12:** FAQPage/HowTo no longer earn rich results. **Keep them.** The visible FAQs help answer engines, and the markup is harmless. No action.

### [F13] Thin E-E-A-T / proof — 🟡 Medium
No named leadership or team, testimonials, client logos or measurable results; the 6 projects are summary cards without case-study pages. Do **not** invent any of this. Add real items when available (see FIX-11).

### [F14] No content hub — 🟡 Medium
Ten service pages cover the money keywords. Informational queries such as "Playwright vs Selenium", "how to hire a dedicated developer" or "technical SEO checklist" have no landing page. A small blog or resources section built from the existing FAQ topics would grow reach and AI citations (FIX-12).

## 5. What's working well (don't regress)

- Static HTML; all content and meta are in the raw HTML with no JavaScript dependency (RENDER, GEO-006).
- One H1 per page; unique titles and descriptions on all 18 pages; no placeholder text, `localhost` or TODO in the build.
- Canonicals are absolute and self-referencing on the production host, with a consistent trailing-slash policy (`trailingSlash: 'always'`).
- Sitemap lists exactly the 18 canonical 200 pages; 404 is excluded and returns a real 404 (CRAWL-019).
- `robots.txt` allows all crawlers, declares the sitemap, and deliberately allows GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot and Google-Extended (GEO-001/002/003). `llms.txt` is present (GEO-007).
- `max-image-preview:large` and `max-snippet:-1` are set (GEO-005).
- JSON-LD is valid on every page (0 parse errors): Organization, WebSite, WebPage, Service ×10, BreadcrumbList ×17, AboutPage, ContactPage, CollectionPage, ItemList.
- OG/Twitter tags are complete with a 1200×630 image.
- 0 broken internal links; every page is 1 click from home; descriptive anchor text; old `.html` URLs are 301-redirected via `public/_redirects`.
- All images have `alt`, use responsive `srcset` and WebP, and are lazy below the fold. Fonts are self-hosted.
- Cookie consent with Accept / Reject / Customise is in place, with a cookie section in the Privacy Policy.

## 6. Not measured / unverified

| Check ID | Check | Why not measured | What's needed |
|----------|-------|------------------|---------------|
| PERF-001/002/003 | LCP / INP / CLS | no production URL; no PSI/CrUX | run PageSpeed Insights on the live home and a service page (mobile) |
| SEC-001, SEC HSTS | HTTPS, redirect HTTP→HTTPS, certificate | site served locally over HTTP | check on the live domain after deploy |
| INDEX-010 | canonical targets return 200 | domain not resolving | re-run `seo_check.py https://bitfocux.com/` after launch |
| GEO-004 | WAF/CDN doesn't block AI bots | host not chosen/live | `curl -A "GPTBot"` etc. against live site |
| MOBILE-* | mobile layout, tap targets | mobile viewport resize didn't apply in the test browser | Chrome DevTools device mode / PSI mobile screenshot |
| Analytics | GSC coverage, queries | no GSC property | verify the domain in Search Console |

## 7. Recommended priority order

1. 🔴 F1: confirm the domain, deploy with HTTPS, then re-run the audit on the live URL.
2. 🟠 F3 (contact details and social links), F2 (Search Console plus consent-gated analytics), F4 (eager first images).
3. 🟡 F6 (SEO slug, before launch), F7, F8, F5, then F13 and F14 as content becomes available.
4. 🟢 F9, F10, F11.
5. Close the not-measured gaps: PSI/CWV, HTTPS/HSTS, WAF, mobile.

## 8. Appendix

- Baseline: `seo-reports/run.json` / `run.md` (seo_check.py 1.0.0, 18 pages, 2026-11-26). Compare after fixes with
  `python <skill>/scripts/seo_check.py --compare seo-reports/run.json seo-reports/after.json --md seo-reports/drift.md`
- Assumptions: `https://bitfocux.com` is the intended production origin; contact and social details are intentionally pending; no analytics is in use yet.
