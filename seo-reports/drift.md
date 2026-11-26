# SEO evidence diff

- **Old:** `http://127.0.0.1:4321/` 2026-11-26T17:45:44+00:00 (`seo-reports/run.json`)
- **New:** `http://127.0.0.1:4321/` 2026-11-26T18:07:13+00:00 (`seo-reports/after.json`)

| Change | Count |
|--------|------:|
| New failures | 2 |
| Got worse | 0 |
| Fixed | 20 |
| Improved | 0 |
| Evidence changed (same status) | 87 |
| New checks (not failing) | 54 |
| No longer reported | 56 |

## Changes

| Change | ID | Check | Old | New | Severity | URL | Evidence (old -> new) |
|--------|----|-------|-----|-----|----------|-----|----------------------|
| New failures | INDEX-008 | canonical-well-formed | - | fail | high | `http://127.0.0.1:4321/services/seo-services/` |  -> `https://bitfocux.com/services/seo-services/: other host bit…` |
| New failures | SEC-001 | https | - | fail | blocker | `http://127.0.0.1:4321/services/seo-services/` |  -> `http` |
| Fixed | ONPAGE-007 | meta-description-length | warn | pass | low | `http://127.0.0.1:4321/` | `178 chars` -> `131 chars` |
| Fixed | ONPAGE-003 | title-length | warn | pass | low | `http://127.0.0.1:4321/services/` | `64 chars` -> `54 chars` |
| Fixed | ONPAGE-007 | meta-description-length | warn | pass | low | `http://127.0.0.1:4321/services/` | `177 chars` -> `139 chars` |
| Fixed | ONPAGE-010 | heading-hierarchy | warn | pass | low | `http://127.0.0.1:4321/services/` | `h1->h3 (Web Development)` -> `31 headings` |
| Fixed | IMG-007 | first-img-not-lazy | warn | pass | high | `http://127.0.0.1:4321/services/` | `first <img> lazy: /_astro/code-screen.DFfjwsQC_6FJlw.webp (…` -> `4/8 lazy, first eager` |
| Fixed | ONPAGE-007 | meta-description-length | warn | pass | low | `http://127.0.0.1:4321/services/hire-dedicated-developers/` | `186 chars` -> `135 chars` |
| Fixed | ONPAGE-010 | heading-hierarchy | warn | pass | low | `http://127.0.0.1:4321/projects/` | `h1->h3 (Hysabat ERP)` -> `17 headings` |
| Fixed | IMG-007 | first-img-not-lazy | warn | pass | high | `http://127.0.0.1:4321/projects/` | `first <img> lazy: /_astro/erp-b.TaCJ-0CG_20JRxV.webp (6/6 l…` -> `3/6 lazy, first eager` |
| Fixed | ONPAGE-007 | meta-description-length | warn | pass | low | `http://127.0.0.1:4321/about/` | `172 chars` -> `137 chars` |
| Fixed | IMG-007 | first-img-not-lazy | warn | pass | high | `http://127.0.0.1:4321/process/` | `first <img> lazy: /_astro/whiteboard.yJEzJ4cH_1dGQgV.webp (…` -> `0/1 lazy, first eager` |
| Fixed | ONPAGE-007 | meta-description-length | warn | pass | low | `http://127.0.0.1:4321/services/web-development/` | `172 chars` -> `136 chars` |
| Fixed | ONPAGE-007 | meta-description-length | warn | pass | low | `http://127.0.0.1:4321/services/mobile-app-development/` | `165 chars` -> `131 chars` |
| Fixed | ONPAGE-007 | meta-description-length | warn | pass | low | `http://127.0.0.1:4321/services/custom-software-development/` | `174 chars` -> `127 chars` |
| Fixed | ONPAGE-007 | meta-description-length | warn | pass | low | `http://127.0.0.1:4321/services/it-consulting/` | `162 chars` -> `125 chars` |
| Fixed | ONPAGE-007 | meta-description-length | warn | pass | low | `http://127.0.0.1:4321/services/cloud-devops/` | `170 chars` -> `133 chars` |
| Fixed | ONPAGE-007 | meta-description-length | warn | pass | low | `http://127.0.0.1:4321/services/software-quality-assurance/` | `179 chars` -> `134 chars` |
| Fixed | ONPAGE-007 | meta-description-length | warn | pass | low | `http://127.0.0.1:4321/services/tech-recruitment/` | `193 chars` -> `130 chars` |
| Fixed | ONPAGE-003 | title-length | warn | pass | low | `http://127.0.0.1:4321/privacy-policy/` | `25 chars` -> `34 chars` |
| Fixed | ONPAGE-003 | title-length | warn | pass | low | `http://127.0.0.1:4321/terms/` | `27 chars` -> `41 chars` |
| Fixed | ONPAGE-007 | meta-description-length | warn | pass | low | `http://127.0.0.1:4321/terms/` | `48 chars` -> `146 chars` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/` | `BitFocux is a software development and IT consulting compan…` -> `BitFocux builds custom software, web and mobile apps, runs …` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/` | `1313 words (raw HTML)` -> `1314 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/` | `1313 words in raw HTML` -> `1314 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/` | `6 ms to headers, 6 ms total (one sample)` -> `5 ms to headers, 5 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/` | `102982 bytes decoded, 30218 on the wire` -> `102895 bytes decoded, 30225 on the wire` |
| Evidence changed (same status) | ONPAGE-001 | title-present | pass | pass | high | `http://127.0.0.1:4321/services/` | `IT Services: Software, QA, SEO & Dedicated Developers \| Bit…` -> `IT Services: Software, QA, SEO & Developers \| BitFocux` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/services/` | `Explore BitFocux services: web and mobile development, cust…` -> `BitFocux services: web and mobile development, custom softw…` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/services/` | `731 words (raw HTML)` -> `734 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/services/` | `731 words in raw HTML` -> `734 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/services/` | `17 ms to headers, 17 ms total (one sample)` -> `6 ms to headers, 6 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/services/` | `68807 bytes decoded, 16693 on the wire` -> `68318 bytes decoded, 16566 on the wire` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/services/hire-dedicated-developers/` | `Hire dedicated developers, software engineers, QA automatio…` -> `Hire dedicated developers, QA engineers, DevOps engineers a…` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/services/hire-dedicated-developers/` | `835 words (raw HTML)` -> `836 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/services/hire-dedicated-developers/` | `835 words in raw HTML` -> `836 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/services/hire-dedicated-developers/` | `18 ms to headers, 18 ms total (one sample)` -> `5 ms to headers, 5 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/services/hire-dedicated-developers/` | `58509 bytes decoded, 14888 on the wire` -> `58364 bytes decoded, 14889 on the wire` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/projects/` | `470 words (raw HTML)` -> `473 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/projects/` | `470 words in raw HTML` -> `473 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/projects/` | `22 ms to headers, 22 ms total (one sample)` -> `8 ms to headers, 9 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/projects/` | `52344 bytes decoded, 14033 on the wire` -> `52494 bytes decoded, 14103 on the wire` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/about/` | `Learn about BitFocux: a software development and IT consult…` -> `About BitFocux: a software development and IT consulting co…` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/about/` | `605 words (raw HTML)` -> `606 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/about/` | `605 words in raw HTML` -> `606 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/about/` | `33 ms to headers, 33 ms total (one sample)` -> `6 ms to headers, 6 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/about/` | `76263 bytes decoded, 25206 on the wire` -> `76233 bytes decoded, 25262 on the wire` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/process/` | `589 words (raw HTML)` -> `590 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/process/` | `589 words in raw HTML` -> `590 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/process/` | `26 ms to headers, 26 ms total (one sample)` -> `12 ms to headers, 12 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/process/` | `57586 bytes decoded, 14703 on the wire` -> `57697 bytes decoded, 14754 on the wire` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/contact/` | `450 words (raw HTML)` -> `451 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/contact/` | `450 words in raw HTML` -> `451 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/contact/` | `27 ms to headers, 27 ms total (one sample)` -> `16 ms to headers, 16 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/contact/` | `48911 bytes decoded, 13223 on the wire` -> `49021 bytes decoded, 13274 on the wire` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/services/web-development/` | `Custom web development by BitFocux: high-performance websit…` -> `Custom web development: fast, secure, SEO-ready websites, w…` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/services/web-development/` | `805 words (raw HTML)` -> `806 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/services/web-development/` | `805 words in raw HTML` -> `806 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/services/web-development/` | `7 ms to headers, 7 ms total (one sample)` -> `28 ms to headers, 29 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/services/web-development/` | `59557 bytes decoded, 15321 on the wire` -> `59487 bytes decoded, 15338 on the wire` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/services/mobile-app-development/` | `BitFocux designs and develops iOS and Android mobile apps w…` -> `iOS and Android app development with Flutter and React Nati…` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/services/mobile-app-development/` | `735 words (raw HTML)` -> `736 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/services/mobile-app-development/` | `735 words in raw HTML` -> `736 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/services/mobile-app-development/` | `7 ms to headers, 8 ms total (one sample)` -> `27 ms to headers, 28 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/services/mobile-app-development/` | `57216 bytes decoded, 14811 on the wire` -> `57156 bytes decoded, 14835 on the wire` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/services/custom-software-development/` | `Custom software development from BitFocux: ERP, CRM, workfl…` -> `Custom ERP, CRM and workflow automation software designed a…` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/services/custom-software-development/` | `769 words (raw HTML)` -> `770 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/services/custom-software-development/` | `769 words in raw HTML` -> `770 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/services/custom-software-development/` | `15 ms to headers, 15 ms total (one sample)` -> `7 ms to headers, 8 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/services/custom-software-development/` | `59573 bytes decoded, 15135 on the wire` -> `59448 bytes decoded, 15162 on the wire` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/services/it-consulting/` | `Strategic IT consulting from BitFocux: technology roadmaps,…` -> `IT consulting from BitFocux: technology roadmaps, architect…` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/services/it-consulting/` | `663 words (raw HTML)` -> `664 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/services/it-consulting/` | `663 words in raw HTML` -> `664 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/services/it-consulting/` | `26 ms to headers, 27 ms total (one sample)` -> `3 ms to headers, 4 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/services/it-consulting/` | `55271 bytes decoded, 14234 on the wire` -> `55196 bytes decoded, 14263 on the wire` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/services/cloud-devops/` | `BitFocux Cloud & DevOps services: cloud migration, CI/CD pi…` -> `Cloud & DevOps services: cloud migration, CI/CD pipelines, …` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/services/cloud-devops/` | `633 words (raw HTML)` -> `634 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/services/cloud-devops/` | `633 words in raw HTML` -> `634 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/services/cloud-devops/` | `25 ms to headers, 25 ms total (one sample)` -> `3 ms to headers, 4 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/services/cloud-devops/` | `55113 bytes decoded, 14252 on the wire` -> `55038 bytes decoded, 14281 on the wire` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/services/software-quality-assurance/` | `Software QA by BitFocux: manual and exploratory testing plu…` -> `Manual and automated software testing with Playwright and S…` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/services/software-quality-assurance/` | `969 words (raw HTML)` -> `970 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/services/software-quality-assurance/` | `969 words in raw HTML` -> `970 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/services/software-quality-assurance/` | `36 ms to headers, 38 ms total (one sample)` -> `14 ms to headers, 15 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/services/software-quality-assurance/` | `84742 bytes decoded, 26024 on the wire` -> `84627 bytes decoded, 26029 on the wire` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/services/ui-ux-design/` | `UI/UX design services from BitFocux: user research, wirefra…` -> `UI/UX design services: user research, wireframes, interacti…` |
| Evidence changed (same status) | ONPAGE-007 | meta-description-length | pass | pass | low | `http://127.0.0.1:4321/services/ui-ux-design/` | `157 chars` -> `134 chars` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/services/ui-ux-design/` | `693 words (raw HTML)` -> `694 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/services/ui-ux-design/` | `693 words in raw HTML` -> `694 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/services/ui-ux-design/` | `25 ms to headers, 26 ms total (one sample)` -> `24 ms to headers, 24 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/services/ui-ux-design/` | `57571 bytes decoded, 14686 on the wire` -> `57566 bytes decoded, 14725 on the wire` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/services/tech-recruitment/` | `Tech hiring and recruitment by BitFocux: we source, screen …` -> `Tech recruitment: we source, screen and technically assess …` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/services/tech-recruitment/` | `826 words (raw HTML)` -> `827 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/services/tech-recruitment/` | `826 words in raw HTML` -> `827 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/services/tech-recruitment/` | `4 ms to headers, 4 ms total (one sample)` -> `5 ms to headers, 5 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/services/tech-recruitment/` | `58533 bytes decoded, 14755 on the wire` -> `58328 bytes decoded, 14792 on the wire` |
| Evidence changed (same status) | ONPAGE-001 | title-present | pass | pass | high | `http://127.0.0.1:4321/privacy-policy/` | `Privacy Policy \| BitFocux` -> `Privacy & Cookie Policy \| BitFocux` |
| Evidence changed (same status) | ONPAGE-008 | one-h1 | pass | pass | medium | `http://127.0.0.1:4321/privacy-policy/` | `Privacy Policy` -> `Privacy & Cookie Policy` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/privacy-policy/` | `658 words (raw HTML)` -> `668 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/privacy-policy/` | `658 words in raw HTML` -> `668 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/privacy-policy/` | `7 ms to headers, 7 ms total (one sample)` -> `3 ms to headers, 3 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/privacy-policy/` | `45465 bytes decoded, 12795 on the wire` -> `45675 bytes decoded, 12849 on the wire` |
| Evidence changed (same status) | ONPAGE-001 | title-present | pass | pass | high | `http://127.0.0.1:4321/terms/` | `Terms of Service \| BitFocux` -> `Terms of Service for the BitFocux Website` |
| Evidence changed (same status) | ONPAGE-005 | meta-description-present | pass | pass | medium | `http://127.0.0.1:4321/terms/` | `Terms governing the use of the BitFocux website.` -> `The terms that govern use of the BitFocux website, includin…` |
| Evidence changed (same status) | ONPAGE-011 | thin-content | pass | pass | medium | `http://127.0.0.1:4321/terms/` | `427 words (raw HTML)` -> `428 words (raw HTML)` |
| Evidence changed (same status) | RENDER-002 | content-in-raw-html | pass | pass | medium | `http://127.0.0.1:4321/terms/` | `427 words in raw HTML` -> `428 words in raw HTML` |
| Evidence changed (same status) | CRAWL-026 | server-response-time | pass | pass | medium | `http://127.0.0.1:4321/terms/` | `19 ms to headers, 19 ms total (one sample)` -> `6 ms to headers, 7 ms total (one sample)` |
| Evidence changed (same status) | PERF-005 | html-weight | pass | pass | medium | `http://127.0.0.1:4321/terms/` | `43582 bytes decoded, 12136 on the wire` -> `44140 bytes decoded, 12233 on the wire` |
| Evidence changed (same status) | GEO-007 | llms-txt | pass | pass | low | `http://127.0.0.1:4321/llms.txt` | `200, 2561 bytes` -> `200, 2568 bytes` |
| No longer reported | CRAWL-015 | page-returns-200 | pass | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `200` ->  |
| No longer reported | CRAWL-027 | content-type-html | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `text/html` ->  |
| No longer reported | INDEX-001 | meta-robots-indexable | pass | - | blocker | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `index, follow, max-image-preview:large, max-snippet:-1, max…` ->  |
| No longer reported | INDEX-002 | x-robots-tag-indexable | pass | - | blocker | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `(no X-Robots-Tag)` ->  |
| No longer reported | INDEX-006 | canonical-single | pass | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `1` ->  |
| No longer reported | INDEX-008 | canonical-well-formed | fail | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `https://bitfocux.com/services/digital-marketing-seo/: other…` ->  |
| No longer reported | INDEX-007 | canonical-in-head | pass | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `in <head>` ->  |
| No longer reported | INDEX-013 | canonical-self-referencing | warn | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `https://bitfocux.com/services/digital-marketing-seo/` ->  |
| No longer reported | ONPAGE-001 | title-present | pass | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `SEO Services: Technical, On-Page & Local SEO \| BitFocux` ->  |
| No longer reported | HTML-004 | one-title-element | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `1` ->  |
| No longer reported | ONPAGE-003 | title-length | pass | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `55 chars` ->  |
| No longer reported | ONPAGE-005 | meta-description-present | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `SEO services by BitFocux: technical SEO audits, keyword res…` ->  |
| No longer reported | ONPAGE-007 | meta-description-length | warn | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `183 chars` ->  |
| No longer reported | ONPAGE-008 | one-h1 | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `SEO Services` ->  |
| No longer reported | ONPAGE-010 | heading-hierarchy | pass | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `33 headings` ->  |
| No longer reported | ONPAGE-011 | thin-content | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `842 words (raw HTML)` ->  |
| No longer reported | ONPAGE-014 | placeholder-text | pass | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `none` ->  |
| No longer reported | RENDER-002 | content-in-raw-html | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `842 words in raw HTML` ->  |
| No longer reported | HTML-007 | html-lang | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `en` ->  |
| No longer reported | HTML-002 | charset-declared | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `utf-8` ->  |
| No longer reported | HTML-001 | doctype | pass | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `present` ->  |
| No longer reported | MOBILE-001 | viewport-meta | pass | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `width=device-width, initial-scale=1` ->  |
| No longer reported | MOBILE-002 | viewport-not-fixed-width | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `width=device-width, initial-scale=1` ->  |
| No longer reported | MOBILE-003 | zoom-not-disabled | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `width=device-width, initial-scale=1` ->  |
| No longer reported | SOCIAL-001 | og-core-tags | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `og:title/description/image/url/type` ->  |
| No longer reported | SOCIAL-003 | og-image-absolute | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `https://bitfocux.com/og/default.png` ->  |
| No longer reported | SOCIAL-006 | twitter-card | pass | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `summary_large_image` ->  |
| No longer reported | SCHEMA-901 | jsonld-present-raw-html | pass | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `1 block(s): Answer, BreadcrumbList, FAQPage, ImageObject, L…` ->  |
| No longer reported | SCHEMA-001 | jsonld-parses | pass | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `all parse` ->  |
| No longer reported | SCHEMA-011 | no-retired-schema-types | warn | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `FAQPage (FAQ rich results retired for all sites 2026-05-07)` ->  |
| No longer reported | SCHEMA-002 | jsonld-context-schema-org | pass | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `schema.org` ->  |
| No longer reported | IMG-003 | img-alt-attribute | pass | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `2 images` ->  |
| No longer reported | IMG-009 | img-dimensions | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `2 images` ->  |
| No longer reported | IMG-007 | first-img-not-lazy | pass | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `1/2 lazy, first eager` ->  |
| No longer reported | LINK-901 | internal-links-present | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `48 internal, 0 external` ->  |
| No longer reported | LINK-009 | internal-links-followed | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `0 nofollow` ->  |
| No longer reported | LINK-001 | anchors-have-href | pass | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `50 anchors, all with href` ->  |
| No longer reported | LINK-003 | no-javascript-hrefs | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `0` ->  |
| No longer reported | LINK-004 | no-dev-local-urls | pass | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `none` ->  |
| No longer reported | LINK-012 | anchor-text-present | pass | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `all have text` ->  |
| No longer reported | CRAWL-026 | server-response-time | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `30 ms to headers, 30 ms total (one sample)` ->  |
| No longer reported | PERF-007 | text-compression | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `gzip` ->  |
| No longer reported | PERF-005 | html-weight | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `64349 bytes decoded, 17640 on the wire` ->  |
| No longer reported | PERF-901 | html-cache-control | pass | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `no-cache` ->  |
| No longer reported | PERF-004 | render-blocking-head-scripts | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `0 sync <script src> in <head>` ->  |
| No longer reported | SEC-001 | https | fail | - | blocker | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `http` ->  |
| No longer reported | URL-001 | lowercase | pass | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `/services/digital-marketing-seo/` ->  |
| No longer reported | URL-002 | hyphens-not-underscores | pass | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `/services/digital-marketing-seo/` ->  |
| No longer reported | URL-003 | no-double-slashes | pass | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `/services/digital-marketing-seo/` ->  |
| No longer reported | URL-004 | no-session-ids | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `/services/digital-marketing-seo/` ->  |
| No longer reported | URL-005 | length-and-depth | pass | - | low | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `53 chars, 2 levels` ->  |
| No longer reported | INDEX-010 | canonical-target-200 | not-measured | - | high | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `https://bitfocux.com/services/digital-marketing-seo/` ->  |
| No longer reported | LINK-011 | no-orphan-pages | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `17 inbound from crawled pages` ->  |
| No longer reported | LINK-010 | click-depth | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `depth 1` ->  |
| No longer reported | LINK-005 | internal-links-not-4xx | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `0 among crawled links` ->  |
| No longer reported | LINK-006 | internal-links-not-5xx | pass | - | medium | `http://127.0.0.1:4321/services/digital-marketing-seo/` | `0 among crawled links` ->  |
