# Content Optimization Report: Sahl Technology (site-wide, plus a deep dive on the QA service page)

- **URL / draft:** all 18 indexable pages in `dist/`. Source copy lives in `src/data/services.ts`, `src/data/projects.ts`, `src/data/content.ts` and `src/pages/*.astro`.
- **Primary target (deep dive):** `/services/software-quality-assurance/`, keyword "software testing services" / "QA automation services".
- **Date:** 2026-11-27
- **Data sources:** the built HTML and the source data files. No SERP check, GSC data or keyword volumes were available. Search intent below is **assumed** from query wording, and anything that needs search volumes is marked **INSUFFICIENT DATA**.

> These are analysis and recommendations only. No copy has been changed. The implementable items are in `fix-report-2026-11-27.md`.

## 0. Verdict

- **Site-wide verdict:** **KEEP all 18 URLs.** There is no cannibalisation: each service page targets a different keyword cluster. Seven pages need a **REFRESH** for depth (see the table in §0.1).
- **Site-wide E-E-A-T score:** **55/100 (Weak).** Rework the two weakest dimensions, Experience and Authoritativeness, before you push hard on content marketing.
- **Vetoes to clear:**
  - ⚠️ **Fabricated experience:** this is a *risk*, not a confirmed veto. Confirm that the 6 portfolio projects are real Sahl/BitFocux work, and that you have permission to name "Aramco". If not, anonymise the name.
  - ⚠️ **Repeated boilerplate:** this is a *risk*. The same H2s appear on all 8 service pages, as described in §3.

### 0.1 Per-URL verdict table

| URL | Words | Primary keyword (assumed intent) | Verdict | Main gap |
|---|:--:|---|---|---|
| `/` | 971 | web development & automation company (commercial) | KEEP | No proof points or numbers; the hero claims have nothing behind them |
| `/services/` | 481 | software development services (commercial) | KEEP | H1 has no keyword |
| `/services/web-development/` | 550 | web development services (commercial) | REFRESH | No cost or timeline section; templated H2s |
| `/services/mobile-app-development/` | 485 | mobile app development company (commercial) | REFRESH | Same as above; nothing on iOS vs Android or Flutter vs React Native |
| `/services/custom-software-development/` | 513 | custom software development (commercial) | REFRESH | Needs an ERP/CRM case study and an "off-the-shelf vs custom" section |
| `/services/it-consulting/` | 411 | IT consulting services (commercial) | REFRESH | Thinnest commercial page; no deliverables example |
| `/services/cloud-devops/` | 384 | DevOps services / cloud migration (commercial) | REFRESH | Thinnest page; no migration process or cost drivers |
| `/services/software-quality-assurance/` | 712 | software testing services (commercial) | KEEP + improve | See the deep dive below |
| `/services/ui-ux-design/` | 443 | UI/UX design services (commercial) | REFRESH | No portfolio visuals; no deliverables per phase |
| `/services/seo-services/` | 584 | SEO services (commercial) | KEEP + improve | No reporting example or "what results to expect" timeline |
| `/services/hire-dedicated-developers/` | 577 | hire dedicated developers (transactional) | KEEP + improve | No rates or pricing models, no trial terms, no vetting stats |
| `/services/tech-recruitment/` | 581 | tech recruitment services (commercial) | KEEP | Needs fee model (contingency/retainer) and time-to-hire |
| `/projects/` | 226 | software development portfolio (navigational/commercial) | REFRESH | Cards don't link to case studies; H1 has no keyword |
| `/about/` | 355 | about Sahl Technology (navigational) | REFRESH | No people, founding year or location (waiting on you) |
| `/process/` | 341 | software development process (informational) | KEEP | Fine; could add durations per phase |
| `/contact/` | 171 | request a quote (transactional) | KEEP | Fine for its purpose; contact details pending |
| `/privacy-policy/`, `/terms/` | 427 / 187 | (legal) | KEEP | Have them legally reviewed before launch |

## 1. SEO analysis (deep dive: QA page)

- **Primary keyword:** software testing services
- **Search intent:** commercial investigation. People comparing vendors want scope, process, proof and cost (assumed; no SERP check).
- **Secondary keywords** (from `services.ts:185`): manual testing services, Playwright automation testing, Selenium automation testing, QA automation Python, JavaScript test automation.
- **Related terms the page should cover:** regression testing, test strategy, test coverage, CI/CD, flaky tests, shift-left, UAT, accessibility testing, security testing basics, QA outsourcing, dedicated QA engineer.
- **Keyword placement:**

| Place | Present? |
|---|---|
| Title ("QA Testing & Automation: Playwright, Selenium") | ✅ yes, but 63 characters long |
| H1 ("Software QA & Test Automation") | ✅ partial: "software testing" isn't in it |
| Intro | ✅ "manual testing", "Playwright", "Selenium" |
| Meta description | ✅ yes |

## 2. SXO: page-type match

- **Dominant SERP page type:** likely vendor service pages and "top QA companies" listicles (assumed; INSUFFICIENT DATA, so check the live SERP).
- **This page's type:** vendor service page. **Match: yes.**
- **SXO persona check:**
  - **Skimmer ✅:** clear H2s, a deliverables grid and logos.
  - **Researcher 🟡:** the Playwright vs Selenium FAQ is good, but there is no explanation of the method.
  - **Buyer 🔴:** no pricing model, no engagement options and no timeline.
  - **Validator 🔴:** no case study, no numbers, no named QA lead and no certifications such as ISTQB.
- **SXO score:** about 60/100. The weakest persona is the Validator.

## 3. Content issues (site-wide)

| # | Issue | Where | Severity |
|---|---|---|---|
| 1 | Identical H2 pattern on 8 service pages ("Why it matters", "X: what's included", "X — common questions") | `src/pages/services/[slug].astro:39,52,93` | 🟡 |
| 2 | No answer-first summary (a 40–60 word "what it is / who it's for / what you get" paragraph) under the H1 | Service template | 🟡 |
| 3 | No pricing, engagement model or timeline section on build services | All non-talent service pages | 🟡 |
| 4 | Projects have one-line summaries, no outcomes and no detail pages | `src/data/projects.ts` | 🟡 |
| 5 | No named people on any page | `/about/`, service pages | 🟡 |
| 6 | Stock photography only, with no screenshots of your own work | Site-wide | 🟢 |
| 7 | Cypress logo shown but not offered | `services.ts:210` | 🟢 |
| 8 | Hub H1s have no keywords | `/services/`, `/about/`, `/projects/` | 🟡 |

## 4. Missing subtopics (content gap)

**QA page:**
- How we build a test strategy (risk-based coverage) and what's in a test plan.
- Engagement models: one-off audit, ongoing QA, dedicated QA engineer, and taking over an existing test suite.
- Typical timeline, for example "a first automated regression suite in 2–4 weeks". Only use a figure you can stand behind.
- What reports you receive: a defect report example and a CI dashboard screenshot.
- Accessibility (WCAG) and basic security testing, if you offer them.
- "Manual vs automated testing: when to use each" as a short comparison table. Good for AI citation.

**All build services:**
- Cost drivers and engagement models (fixed price, time and materials, dedicated team), even without exact prices.
- Who it's for and who it isn't.
- Timeline ranges.
- A relevant case study with results.

**Hire developers page:**
- Hiring timeline ("profiles within X days").
- Trial period, replacement guarantee, time zones and overlap.
- IP and NDA terms.

**SEO page:**
- What results to expect and when (a 3/6/12-month view).
- An example monthly report.
- GEO/AI-search optimisation as an explicit sub-service, since the page already mentions AI search.

## 5. Recommended improvements (in priority order)

1. **Make the related-services and contextual links relevance-based** (fix report FIX-4). For example: QA ↔ web development, custom software, hire developers; SEO ↔ web development, UI/UX.
2. **Add an answer-first summary block** to the service template: one quotable 40–60 word paragraph per service, stored as a new `summary` field in `services.ts`.
3. **Replace the templated H2s** with service-specific question H2s from a new `headings` field. For example, on the QA page:
   - "Why invest in software testing?"
   - "What our QA and test automation service includes"
   - "Playwright, Selenium and the tools we use"
   - "How we deliver QA: from test plan to CI"
4. **Add an "Engagement models & pricing" section** to build services. Talent pages already have one.
5. **Create `/projects/<slug>/` case studies**, each covering challenge, solution, stack, outcome and a screenshot. Link them from the cards and from the related service pages. Use only real, permitted facts.
6. **Add real people to `/about/`**, with a name, role, photo, LinkedIn link and short bio, and a "Reviewed by" line on service pages. **Only with real data from you.**
7. **Start the blog / insights hub.** For the first 6 article ideas mapped to services, see §8.

## 6. E-E-A-T & AI citability (site-wide)

| Dimension | Points | Evidence / recommendation |
|---|:--:|---|
| Experience | 8/20 | 6 projects, but one-line summaries, stock photos and no results. → Case studies with screenshots and outcomes. |
| Expertise | 11/20 | Correct, specific terminology (pytest, Page Object Model, k6, Appium), and the Playwright vs Selenium answer is good. No named experts. → Team bios, "reviewed by". |
| Authoritativeness | 4/15 | New brand, no `sameAs`, no citations, no external mentions. → Social profiles, Clutch/GoodFirms listings, LinkedIn company page. |
| Trust | 12/20 | Privacy, cookie and terms pages, consent-gated analytics, HTTPS planned. No contact details or address. → Fill in the contact details (F3). |
| Helpfulness & intent fit | 11/15 | Correct page types and FAQs answer real objections. Missing pricing and timeline for buyers. |
| Clarity & structure | 9/10 | Clean heading hierarchy, scannable cards and lists. Deduct 1 for templated H2s. |
| **Total** | **55/100 (Weak)** | Fix Experience and Authoritativeness first. |

- **Quotable lead answer present:** partly. The FAQ answers are quotable, but no page opens with a definition or summary paragraph. → Add a `summary` field (improvement 2).
- **Schema:**
  - Service, Organization and BreadcrumbList are present.
  - For future blog posts, add `Article` + `Person` author + `dateModified`.
  - For case studies, use `CreativeWork` or `Article` with `about` → the Service.

## 7. SEO metadata (proposed; length includes the " | Sahl Technology" suffix)

| Page | Proposed SEO title | Length |
|---|---|:--:|
| QA | QA & Test Automation: Playwright, Selenium \| Sahl Technology | 60 |
| IT consulting | IT Consulting & Technology Strategy \| Sahl Technology | 53 |
| SEO | SEO Services: Technical, On-Page & Local \| Sahl Technology | 58 |
| Tech recruitment | Tech Recruitment & Developer Hiring \| Sahl Technology | 53 |
| Hire developers | Hire Dedicated Developers & QA Engineers \| Sahl Technology | 58 |

**Hub H1 proposals.** Keep the brand voice and add the keyword:
- `/services/`: "Web development, automation and QA services"
- `/projects/`: "Our work: software, web and mobile projects"
- `/about/`: "About Sahl Technology: technology made easy"

Descriptions are all within 100–156 characters and unique, so no change is needed.

## 8. Internal linking opportunities

| Anchor text | From | Link to |
|---|---|---|
| automated testing built into every release | Home, "Why Sahl" checklist | `/services/software-quality-assurance/` |
| SEO-ready websites | `/services/web-development/` intro | `/services/seo-services/` |
| hire a dedicated QA engineer | QA FAQ (already mentions it, unlinked) | `/services/hire-dedicated-developers/` |
| user research and prototypes | Web and mobile pages | `/services/ui-ux-design/` |
| CI/CD pipelines | QA "Performance testing & CI/CD" card | `/services/cloud-devops/` |
| the Hysabat ERP case study | Custom software page | `/projects/hysabat-erp/` (once built) |

**First blog articles** (each one links to its service page). INSUFFICIENT DATA on volumes, so validate in a keyword tool:
1. "Playwright vs Selenium in 2026: which should you choose?" → QA
2. "Manual vs automated testing: when to use each" → QA
3. "How much does a custom web app cost?" → web development / custom software
4. "Dedicated developer vs freelancer vs agency" → hire developers
5. "Technical SEO checklist for new websites" → SEO
6. "How to get your business cited in AI search (GEO)" → SEO

## 9. Final SEO checklist (site-wide status)

- [x] Page type matches the assumed SERP type
- [~] Primary keyword in title, H1, intro and body. Service pages pass; 3 hubs are missing it in the H1.
- [ ] Intent satisfied: pricing, timeline and proof are missing
- [x] Logical heading hierarchy, with one H1 per page
- [~] Unique titles and descriptions: all unique, but 5 titles are too long
- [ ] Descriptive internal links to relevant pages (related-services bug)
- [~] Quotable answer near the top plus relevant schema: FAQs yes, summary no
- [x] Readable, original, no keyword stuffing
- [ ] E-E-A-T score ≥ 70 with no vetoes (currently 55, with 2 veto risks to clear)
