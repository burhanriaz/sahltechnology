# SEO Audit Report: Sahl Technology (codebase + content, pre-launch)

- **Target:** Astro 7 static site, repo `D:\Repo\bitfocux` (`src/`). Built output `dist/` has 18 indexable pages plus a 404 page, served locally at `http://127.0.0.1:4321/`.
- **Production URL:** not live yet. `SITE.url` is still the placeholder `https://sahl.your-domain.com` (`src/config/site.ts`).
- **Rendering:** static HTML (SSG). All main content is in the raw HTML. One React island exists: the quote form on `/contact/` (`client:visible`), with a static `<noscript>` fallback.
- **Date:** 2026-11-27
- **Prepared by:** Claude (Opus 5.5), using the br-web-seo skill.
- **Evidence used:**
  - `seo_check.py` crawl of the local build: `seo-reports/run-2.json` and `seo-reports/run-2.md` (18 pages, 1,022 checks).
  - A source read of the templates and data files, cited as `file:line`.
  - A content scan of `dist/` (words in `<main>`, headings, schema types, internal links).
  - The SEO snapshot diff made before and after adding React (0 differences).
- **Data not available:**
  - Google Search Console (GSC), GA4, PageSpeed/CrUX, SERP data, keyword volumes and backlink exports.
  - Anything that depends on these data sources is marked **not measured**.

> This run adds a **content and E-E-A-T** layer to the earlier technical audit (`audit-report.md`), so its score is stricter. The content findings are written up in detail in `content-report-2026-11-27.md`, and every fix is in `fix-report-2026-11-27.md`.

---

## 1. Executive summary

The technical side of the site is in very good shape. Every page is static HTML and has:
- exactly one H1;
- a unique title and description;
- a self-referencing canonical;
- complete Open Graph and Twitter tags;
- breadcrumb and service structured data;
- alt text on every image;
- an `llms.txt` file and a robots file that allows AI crawlers.

The sitemap parses and lists all 18 URLs. The React island did not change any SEO output.

What holds the site back now is **content and trust**, not code:
1. **Launch prerequisites are still open.** The production subdomain, HTTPS, Search Console, analytics and the company's contact details are all missing. These are the only blockers and high-severity items, and all of them are waiting on information from you.
2. **Internal linking has a bug.** The related-services block always shows the same 4 services (`src/pages/services/[slug].astro:23`). As a result, the QA, SEO, UI/UX and both talent pages, which are key revenue pages, get only 2 links each from page bodies. The web development page gets 11.
3. **The pages lack depth and proof.**
   - Service pages are 384 to 712 words long, with templated headings and no pricing information.
   - The projects have no case-study pages or results.
   - No people are named anywhere on the site.
   - There is no blog or other informational content.
   - The site-wide E-E-A-T score is **55/100 (Weak)**.
4. **Five titles are over 60 characters**, and three hub pages have an H1 with no keyword in it.

**Health score: 76/100 (good), provisional.**
- **Cap:** 89, because High findings are open (F2, F3). The score is below the cap, so it does not change the result.
- **Provisional:** performance and mobile rendering were not measured. The launch blocker F1 is pending rather than failed, because the domain does not exist yet. Once the domain is live, an unfixed F1 would cap the score at 20.

## 2. Scorecard

| Category | Weight | Score /10 | Status | Notes |
|---|:--:|:--:|---|---|
| Crawlability & indexability | 20% | 9 | measured (local) | robots, sitemap, canonicals, 200s and `_redirects` all pass. The domain is pending (F1). |
| On-page content & HTML | 15% | 7 | measured | 5 titles over 60 characters, 3 H1s with no keyword, templated H2s, thin pages |
| Structured data & social | 10% | 8 | measured | Complete. FAQ/HowTo rich results are retired, and `sameAs` and contact details are missing. |
| Performance / Core Web Vitals | 20% | — | **not measured** | Excluded from the score. The static evidence looks good (see §6). |
| Internal linking | 10% | 6 | measured | The related-services bug, project cards that link nowhere, no contextual body links |
| GEO / AI-search readiness | 10% | 6 | measured | llms.txt and AI bots are allowed, but there is no answer-first content, no data, no named entities and no content hub. |
| Mobile & accessibility | 10% | 8 | partly measured | Viewport, alt text, labels and ARIA on the form pass. The mobile layout was not checked visually. |
| Analytics & monitoring | 5% | 3 | measured | GA4 and GSC are both empty (`src/config/site.ts`). |
| **Weighted (measured categories only)** | 80% | **7.6** | | Gives **76/100** after renormalising the weights. |

## 3. Findings summary

| ID | Severity | Category | Check ID(s) | Finding |
|---|---|---|---|---|
| F1 | 🔴 Blocker (pending) | Crawl | `INDEX-008` `INDEX-013` `SEC-001` `CRAWL-006` | Production subdomain not set. Canonicals, sitemap, OG and llms.txt all point at the placeholder `sahl.your-domain.com`. |
| F2 | 🟠 High | Analytics | `MON-*` | No Search Console verification and no GA4 ID |
| F3 | 🟠 High | Trust / Schema | `TRUST-002` `TRUST-007` | No email, phone, address or social profiles, so the Organization schema has no `sameAs` or `contactPoint` |
| F4 | 🟡 Medium | Linking | `LINK-*` | Related services are hard-coded to the first 4 services, so 5 key service pages get only 2 links each from page bodies. |
| F5 | 🟡 Medium | Content / E-E-A-T | — | No case studies. Project cards link nowhere and show no results. One project names a major enterprise brand ("Aramco"), which needs written permission. |
| F6 | 🟡 Medium | Content | — | Service pages are thin for commercial search intent (384–712 words): no pricing or engagement section, and no answer-first summary |
| F7 | 🟡 Medium | On-page | — | Templated H2s repeat on 8 pages ("Why it matters", "X: what's included", "X — common questions"). |
| F8 | 🟡 Medium | On-page | `ONPAGE-003` | 5 titles are 61–63 characters long and may be cut off in results. |
| F9 | 🟡 Medium | On-page | `ONPAGE-010` | The H1s on `/services/`, `/about/` and `/projects/` contain no keyword. |
| F10 | 🟡 Medium | GEO / Authority | — | No blog or insights hub, so the site has no informational pages that feed its service pages |
| F11 | 🟡 Medium | E-E-A-T | — | No named people (founders, leads) anywhere, and no author entities |
| F12 | 🟢 Low | Schema | `SCHEMA-011` | `HowTo` on `/process/` is deprecated. `FAQPage` rich results were retired on 2026-05-07, but the markup is harmless. |
| F13 | 🟢 Low | Content accuracy | — | The QA page shows a Cypress logo, but Cypress is not in the stated stack. |
| F14 | 🟢 Low | Linking | `LINK-012` | The collector flagged an empty anchor on `/contact/`. This is a **false positive**: both privacy links have text (the second is inside `<noscript>`). No fix needed. |

## 4. Detailed findings

### [F1] Production subdomain not set: 🔴 Blocker (pending input) · `INDEX-008` `INDEX-013` `SEC-001` `CRAWL-006`
- **Where:**
  - `src/config/site.ts` (`url: 'https://sahl.your-domain.com'`), which feeds `astro.config.mjs` `site`, `public/robots.txt`, `public/llms.txt` and the OG/canonical tags.
  - `public/robots.txt` and `public/llms.txt` hard-code the placeholder host.
- **Evidence:**
  - Every canonical is `https://sahl.your-domain.com/…`.
  - `robots.txt` has `Sitemap: https://sahl.your-domain.com/sitemap-index.xml`.
  - The collector tried to fetch the placeholder host and got a non-sitemap response (`CRAWL-006`).
  - SEC-001 (http) fails only because the local preview is served over http.
- **Why it matters:** if the site launches on a different host, every canonical points off-site. Google will then ignore the pages or index the wrong host, which caps the score at 20.
- **Status:** waiting for the real subdomain from you.

### [F2] No Search Console or analytics: 🟠 High
- **Where:** `src/config/site.ts`, where `googleSiteVerification: ''` and `ga4Id: ''`.
- **Why it matters:** without them, nobody can see indexing, coverage, queries or Core Web Vitals field data after launch. The consent-gated GA4 loader is already built and only needs the ID.

### [F3] No business contact or entity details: 🟠 High · `TRUST-002` `TRUST-007`
- **Where:** `src/config/site.ts` (the contact and social fields are empty).
- **What breaks:**
  - The email, phone and address cards on `/contact/` don't render.
  - `contactPoint` and `sameAs` are missing from the Organization schema.
- **Why it matters:** this is a B2B services firm with no visible way to reach a person. That hurts trust with users, with quality raters and with AI answer engines, which use entity consistency (`sameAs`) to decide which brand a site belongs to.

### [F4] Related-services block always shows the same 4 services: 🟡 Medium
- **Where:** `src/pages/services/[slug].astro:23`
  ```ts
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 4);
  ```
- **Evidence:** counting links from page bodies in `dist/`:
  - **11 links each:** web development, mobile app development, custom software development and IT consulting.
  - **2 links each:** software QA, SEO services, UI/UX design, hire dedicated developers and tech recruitment.
- **Why it matters:** QA and SEO are the services you most want to grow, yet they get the least internal link weight and no topical links from related pages. Header and footer links don't make up for missing contextual links.

### [F5] No case studies: 🟡 Medium (E-E-A-T: Experience)
- **Where:** `src/data/projects.ts` and `src/components/ProjectCard.astro`, which has no `href`.
- **Evidence:**
  - The 6 projects each have only a one-sentence summary and stock photos.
  - There are no project detail URLs and no metrics.
  - `projects.ts:35` names "Aramco Citizen App ERP".
- **Why it matters:**
  - Case studies are the strongest proof of Experience a services site can show, and they rank for searches like "ERP development case study".
  - Naming a large enterprise client without written permission is a legal and trust risk. Confirm that you have permission, or anonymise the name (for example "Energy-sector enterprise ERP").

### [F6] Service pages are thin for commercial intent: 🟡 Medium
- **Evidence:**
  - Words in `<main>`: QA 712, SEO 584, tech recruitment 581, hire developers 577, web development 550, custom software 513, mobile 485, UI/UX 443, IT consulting 411, cloud 384.
  - No page covers pricing or engagement models (except the talent pages), typical timelines, or "who it's for", and none opens with an answer-first summary.
- **Why it matters:** pages that rank for "software testing services" or "hire dedicated developers" typically answer the questions on cost, process, timeline and proof. Searches for "X cost" make up a large share of commercial demand. INSUFFICIENT DATA on exact search volumes; no SERP export was available.

### [F7] Templated H2s: 🟡 Medium
- **Where:** `src/pages/services/[slug].astro:39`, `:52` and `:93`.
- **Why it matters:** the same headings repeat on 8 pages. To raters and to Google's helpful-content signals this looks like boilerplate. Question-style H2s that are specific to each service also win featured snippets and AI-answer passages.

### [F8] Titles over 60 characters: 🟡 Medium · `ONPAGE-003`
| Page | Length | Current title |
|---|:--:|---|
| `/services/software-quality-assurance/` | 63 | QA Testing & Automation: Playwright, Selenium \| Sahl Technology |
| `/services/it-consulting/` | 62 | IT Consulting & Technology Strategy Services \| Sahl Technology |
| `/services/seo-services/` | 62 | SEO Services: Technical, On-Page & Local SEO \| Sahl Technology |
| `/services/tech-recruitment/` | 62 | Tech Recruitment & Developer Hiring Services \| Sahl Technology |
| `/services/hire-dedicated-developers/` | 61 | Hire Dedicated Developers, QA & SEO Experts \| Sahl Technology |

### [F9] Hub H1s contain no keyword: 🟡 Medium
- `/services/`: "Everything you need to build, launch & grow"
- `/about/`: "Technology partners who care about your outcomes"
- `/projects/`: "Work we are proud of"

The titles already carry the keywords. Adding them to the H1 as well strengthens relevance and the heading outline that AI systems extract.

### [F10] No content hub: 🟡 Medium
There are no informational pages: no guides, comparisons or "how much does X cost" pages. That limits:
- topical authority;
- AI citations, since AI answer engines mostly cite informational pages;
- links from informational content into service pages.

A blog was planned earlier in this project.

### [F11] No named people: 🟡 Medium
- `/about/` has mission and values sections but no founders, leadership or team leads.
- Nothing on the site is attributed to a person.
- Add real names and bios only when you provide them. Never make them up.

### [F12] Deprecated schema types: 🟢 Low · `SCHEMA-011`
- `src/pages/process.astro:33` emits `HowTo`, whose rich results were retired in 2023.
- `FAQPage` on 13 pages no longer produces rich results (retired 2026-05-07). The visible FAQs are still valuable for answer engines. Keeping the markup is harmless; removing it is optional.

### [F13] Cypress logo without a Cypress offering: 🟢 Low
- `src/data/services.ts:210`: `logos` includes `siCypress`, but the `stack` list (`:209`) and the page text don't mention Cypress.
- Either add Cypress to the stack and the copy, or remove the logo.

## 5. What's working well (don't regress)
- **Static HTML everywhere:** content is in the raw HTML, and the React island is limited to `/contact/` with a no-JS fallback. The SEO snapshot showed 0 differences after React was added.
- **Head tags on every page:** exactly one H1, a unique `<title>`, a description of 100–156 characters, a self canonical, full robots directives, `og:*` with a 1200×630 image, and `twitter:card`.
- **Structured data:** Organization + WebSite + WebPage on every page, Service on service pages, BreadcrumbList on inner pages, ItemList on `/services/`, and CollectionPage, AboutPage and ContactPage.
- **Crawl files:** robots.txt allows the AI search bots, `llms.txt` lists every service with a summary, and the sitemap lists 18 URLs and parses without errors. `/404` is excluded from the sitemap.
- **Images:** all 30+ images have descriptive alt text. Responsive WebP is generated by `astro:assets`, and the hero image is loaded eagerly with `fetchpriority="high"`.
- **Hosting files:** `_headers` sets security headers, `_redirects` keeps the old slug working with a 301, and the favicon pack is on every page.

## 6. Not measured / unverified
| Item | Why | How to measure |
|---|---|---|
| Core Web Vitals (LCP, INP, CLS) | No Lighthouse or CrUX run, and field data needs a live domain | Run PageSpeed Insights on the live URL, or `npx lighthouse http://127.0.0.1:4321/ --preset=desktop` locally |
| Static performance evidence (not scored) | Measured from the build only | Home HTML is 70 KB, total CSS is 28 KB, and the contact page loads about 230 KB of React. The LCP image is eager. |
| Mobile rendering | Not checked visually in this run | Use DevTools device mode at 375 px, or Google's mobile test after launch |
| HTTPS, HSTS and live headers | No production host yet | Run `seo_check.py https://<subdomain>/` after deploying |
| Indexing, queries, manual actions | No GSC data | Verify the site in GSC and submit `sitemap-index.xml` |
| Keyword volumes and SERP page types | No SEO-tool export or SERP check | Ahrefs, Semrush or GSC queries after launch |
| Backlinks | No export | Ahrefs or Semrush |

## 7. Recommended priority order
1. F1, F2 and F3, once you provide the subdomain, Search Console code, GA4 ID and contact details. These are configuration-only changes.
2. F4, a one-line logic change with high internal-linking value.
3. F8 and F9: title and H1 tweaks, a few minutes each.
4. F5 and F6: case studies and deeper service pages. This is the biggest gain in ranking and conversion.
5. F7, F12 and F13: template and schema hygiene.
6. F10 and F11: content hub and people. These are ongoing.
