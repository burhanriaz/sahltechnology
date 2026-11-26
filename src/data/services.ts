export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  outcomes: string[];
  deliverables: { title: string; text: string }[];
  stack: string[];
  faqs: { q: string; a: string }[];
  /** 'talent' = team & hiring services, shown in their own group */
  group?: 'delivery' | 'talent';
  /** Simple Icons export names shown as logos on the service page */
  logos?: string[];
  /** Custom process steps (defaults to the standard delivery process) */
  steps?: { title: string; text: string }[];
}

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    short:
      'Fast, secure, SEO-ready websites and web applications built on modern frameworks and engineered to convert.',
    icon: 'code',
    metaTitle: 'Web Development Services & Web Apps',
    metaDescription:
      'Custom web development: fast, secure, SEO-ready websites, web apps and portals built with React, Next.js, Astro and Node.js by Sahl Technology.',
    keywords: ['web development company', 'custom web application', 'Next.js development', 'website development'],
    intro:
      'Your website is often the first conversation a customer has with your business. We design and engineer websites and web applications that load instantly, rank well, stay secure and are easy for your team to update — from marketing sites and customer portals to complex SaaS dashboards.',
    outcomes: [
      'Sub-second page loads and green Core Web Vitals',
      'Search-friendly architecture with technical SEO built in',
      'Accessible, responsive interfaces on every device',
      'Clean, documented code your team can own',
    ],
    deliverables: [
      { title: 'Corporate & marketing websites', text: 'Static-first, CMS-powered sites that are fast, secure and simple to edit.' },
      { title: 'Web applications & SaaS', text: 'Dashboards, portals and multi-tenant platforms with role-based access.' },
      { title: 'E-commerce', text: 'Storefronts and checkout flows integrated with payments, inventory and shipping.' },
      { title: 'APIs & integrations', text: 'REST and GraphQL APIs connecting your CRM, ERP, payment and analytics tools.' },
    ],
    stack: ['React', 'Next.js', 'Astro', 'TypeScript', 'Node.js', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    faqs: [
      { q: 'How long does it take to build a website?', a: 'A marketing website typically takes 3–6 weeks. A custom web application usually takes 8–16 weeks depending on scope. We agree on milestones before we start.' },
      { q: 'Will my website be SEO friendly?', a: 'Yes. Every build includes semantic HTML, metadata, structured data, sitemaps, fast load times and mobile optimisation as standard.' },
      { q: 'Can I edit the content myself?', a: 'Yes. We connect a headless CMS or an admin panel so your team can update pages, posts and media without a developer.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    short:
      'Native-quality iOS and Android apps built with Flutter and React Native — from MVP to App Store launch.',
    icon: 'phone',
    metaTitle: 'Mobile App Development: iOS & Android',
    metaDescription:
      'iOS and Android app development with Flutter and React Native: MVPs, enterprise and consumer apps, from design to App Store launch.',
    keywords: ['mobile app development company', 'Flutter app development', 'React Native development', 'iOS Android app'],
    intro:
      'We build mobile apps people keep on their home screen. Using cross-platform frameworks, we ship one codebase to both iOS and Android without compromising on performance or feel — and we handle store submission, analytics and updates after launch.',
    outcomes: [
      'One codebase for iOS and Android, lower cost to maintain',
      'Smooth 60fps interfaces and offline support',
      'Secure authentication, payments and push notifications',
      'Store-ready builds and a clear release process',
    ],
    deliverables: [
      { title: 'MVPs for startups', text: 'Validate your idea quickly with a focused, production-quality first release.' },
      { title: 'Enterprise & field apps', text: 'Apps for staff, drivers and field teams with offline sync and device features.' },
      { title: 'Consumer apps', text: 'Engaging, on-brand experiences with onboarding, payments and analytics.' },
      { title: 'App modernisation', text: 'Rebuild or refactor ageing apps for performance, security and new OS versions.' },
    ],
    stack: ['Flutter', 'Dart', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Supabase', 'GraphQL'],
    faqs: [
      { q: 'Flutter or React Native — which should I choose?', a: 'Both are excellent. We recommend based on your team, existing code and feature needs. Flutter often wins on UI consistency; React Native on sharing code with a React web app.' },
      { q: 'Do you publish the app to the stores?', a: 'Yes. We prepare listings, screenshots and builds, and manage submission and review for the Apple App Store and Google Play.' },
      { q: 'Do you provide maintenance after launch?', a: 'Yes. We offer monthly support plans covering OS updates, bug fixes, monitoring and new features.' },
    ],
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    short:
      'ERP, CRM and business systems tailored to how your company actually works — scalable, integrated and secure.',
    icon: 'layers',
    metaTitle: 'Custom Software Development: ERP & CRM',
    metaDescription:
      'Custom ERP, CRM and workflow automation software designed around your processes, integrated with your tools and built to scale.',
    keywords: ['custom software development', 'ERP development', 'CRM development', 'business automation software'],
    intro:
      'Off-the-shelf software forces your business to fit the tool. We build systems that fit your business — automating manual work, connecting disconnected data and giving leadership a real-time view of operations.',
    outcomes: [
      'Hours of manual work automated every week',
      'One source of truth across departments',
      'Architecture that scales with users and data',
      'Security, audit trails and role-based access',
    ],
    deliverables: [
      { title: 'ERP systems', text: 'Finance, inventory, procurement, HR and reporting modules in one platform.' },
      { title: 'CRM & sales tools', text: 'Pipelines, customer records and automations tailored to your sales process.' },
      { title: 'Workflow automation', text: 'Approvals, notifications and document flows that replace spreadsheets and email.' },
      { title: 'Legacy modernisation', text: 'Migrate ageing systems to modern, maintainable, cloud-ready architecture.' },
    ],
    stack: ['.NET', 'Node.js', 'Python', 'Laravel', 'PostgreSQL', 'SQL Server', 'Redis', 'Docker'],
    faqs: [
      { q: 'Why custom software instead of an off-the-shelf product?', a: 'When your processes are a competitive advantage, or when licence costs and workarounds pile up, custom software usually costs less over time and fits exactly.' },
      { q: 'Who owns the source code?', a: 'You do. On final payment, full intellectual property and source code are transferred to you.' },
      { q: 'Can you integrate with our existing systems?', a: 'Yes. We regularly integrate with accounting, payment, HR, logistics and government APIs.' },
    ],
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting & Strategy',
    short:
      'Technology roadmaps, architecture reviews and digital transformation guidance from senior engineers.',
    icon: 'compass',
    metaTitle: 'IT Consulting & Technology Strategy Services',
    metaDescription:
      'IT consulting from Sahl Technology: technology roadmaps, architecture reviews, digital transformation planning and CTO-as-a-service.',
    keywords: ['IT consulting services', 'technology consulting', 'digital transformation consulting', 'CTO as a service'],
    intro:
      'Make technology decisions with confidence. Our consultants assess where you are, define where you need to be, and map the most cost-effective route — whether that is a new platform, a cloud migration or fixing the system you already have.',
    outcomes: [
      'A clear, prioritised technology roadmap',
      'Reduced risk on major technology investments',
      'Lower infrastructure and licensing costs',
      'Senior technical leadership without a full-time hire',
    ],
    deliverables: [
      { title: 'Technology audits', text: 'Independent review of your code, infrastructure, security and team processes.' },
      { title: 'Digital transformation roadmaps', text: 'A phased plan linking technology investments to business goals.' },
      { title: 'Architecture & scalability reviews', text: 'Identify bottlenecks and design systems that grow with you.' },
      { title: 'CTO-as-a-service', text: 'Fractional technical leadership for startups and growing companies.' },
    ],
    stack: ['Architecture reviews', 'Cloud cost analysis', 'Security assessment', 'Agile coaching', 'Vendor selection'],
    faqs: [
      { q: 'What does an IT consulting engagement look like?', a: 'Most start with a 1–3 week discovery and audit, followed by a written report and roadmap. You can then implement in-house or with us.' },
      { q: 'Do you work with non-technical founders?', a: 'Yes. We translate technical choices into business terms and help you hire, plan and budget.' },
    ],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    short:
      'Cloud migration, CI/CD pipelines and infrastructure as code on AWS, Azure and Google Cloud.',
    icon: 'cloud',
    metaTitle: 'Cloud & DevOps Services: AWS, Azure, CI/CD',
    metaDescription:
      'Cloud & DevOps services: cloud migration, CI/CD pipelines, Docker, Kubernetes, Terraform and cost optimisation on AWS, Azure and GCP.',
    keywords: ['DevOps services', 'cloud migration', 'CI/CD pipeline setup', 'AWS consulting'],
    intro:
      'Ship faster and sleep better. We set up the infrastructure, automation and monitoring that let your team release multiple times a day with confidence — while keeping your cloud bill under control.',
    outcomes: [
      'Automated, repeatable deployments',
      'High availability and disaster recovery',
      'Proactive monitoring and alerting',
      'Measurably lower cloud spend',
    ],
    deliverables: [
      { title: 'Cloud migration', text: 'Move from on-premise or shared hosting to AWS, Azure or GCP with minimal downtime.' },
      { title: 'CI/CD pipelines', text: 'Automated build, test and deploy workflows with GitHub Actions or GitLab CI.' },
      { title: 'Containers & Kubernetes', text: 'Dockerised services orchestrated for scale and resilience.' },
      { title: 'Infrastructure as code', text: 'Terraform-managed environments that are versioned and reproducible.' },
    ],
    stack: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana'],
    faqs: [
      { q: 'Which cloud provider do you recommend?', a: 'It depends on your existing tools, compliance needs and budget. We are provider-neutral and will recommend what fits.' },
      { q: 'Can you reduce our cloud costs?', a: 'Usually, yes. Right-sizing, reserved capacity and removing idle resources commonly produce significant savings.' },
    ],
  },
  {
    slug: 'software-quality-assurance',
    title: 'Software QA & Test Automation',
    short:
      'Manual and automated testing with Playwright and Selenium in Python and JavaScript — so every release ships reliable.',
    icon: 'bug',
    metaTitle: 'QA Testing & Automation: Playwright, Selenium',
    metaDescription:
      'Manual and automated software testing with Playwright and Selenium in Python and JavaScript, plus API, mobile and performance testing.',
    keywords: [
      'software testing services',
      'manual testing services',
      'Playwright automation testing',
      'Selenium automation testing',
      'QA automation Python',
      'JavaScript test automation',
    ],
    intro:
      'Bugs found by customers cost far more than bugs found in testing. Our SQA engineers combine careful manual testing with robust automation frameworks — Playwright and Selenium, written in Python or JavaScript/TypeScript — built around your riskiest features and wired into your release pipeline, so every release is predictable.',
    outcomes: [
      'Fewer production incidents and hot-fixes',
      'Regression suites that run on every commit',
      'Faster, safer release cycles',
      'Clear, reproducible defect reports',
    ],
    deliverables: [
      { title: 'Manual & exploratory testing', text: 'Test plans, test cases and exploratory sessions by testers who think like your users — across browsers, devices and edge cases.' },
      { title: 'Playwright automation', text: 'Fast, reliable end-to-end suites in TypeScript/JavaScript or Python, with cross-browser runs, traces and screenshots on failure.' },
      { title: 'Selenium automation', text: 'Selenium WebDriver frameworks in Python (pytest) or JavaScript using the Page Object Model — or we maintain and extend your existing suite.' },
      { title: 'API testing', text: 'Functional and contract tests for REST and GraphQL APIs with Postman, pytest and Playwright API testing.' },
      { title: 'Mobile & cross-browser testing', text: 'Real-device and emulator testing for iOS and Android apps with Appium, plus cross-browser coverage for web apps.' },
      { title: 'Performance testing & CI/CD', text: 'Load testing with k6 and JMeter, and automated test runs in GitHub Actions, GitLab CI or Jenkins with clear reports.' },
    ],
    stack: ['Playwright', 'Selenium WebDriver', 'Python', 'pytest', 'JavaScript', 'TypeScript', 'Appium', 'Postman', 'k6', 'JMeter', 'Jenkins', 'GitHub Actions'],
    logos: ['siSelenium', 'siPython', 'siPytest', 'siJavascript', 'siTypescript', 'siAppium', 'siPostman', 'siK6', 'siApachejmeter', 'siJenkins', 'siGithubactions', 'siCypress'],
    faqs: [
      { q: 'Do you offer manual testing, automation, or both?', a: 'Both. Automation covers repetitive regression checks on every release; manual and exploratory testing finds the usability and edge-case issues that scripts miss. Most projects use a mix.' },
      { q: 'Playwright or Selenium — which should we use?', a: 'For new projects we usually recommend Playwright: it is fast, stable and tests Chromium, Firefox and WebKit out of the box. Selenium is a great fit when you already have a Selenium suite, need a specific language binding or a Selenium Grid setup. We work with both.' },
      { q: 'Which languages do you write automated tests in?', a: 'Python and JavaScript/TypeScript. We match the language your developers already use so the team can read and maintain the tests.' },
      { q: 'Can you test software built by another team?', a: 'Yes. We regularly provide independent QA for in-house and third-party development teams, and can take over or fix an existing test suite.' },
      { q: 'Can we hire a dedicated QA engineer?', a: 'Yes. You can hire a dedicated manual or automation QA engineer who works as part of your team. See our dedicated developers service.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    short:
      'Research-led product design, wireframes, prototypes and design systems that users understand instantly.',
    icon: 'pen',
    metaTitle: 'UI/UX Design Services for Web & Mobile',
    metaDescription:
      'UI/UX design services: user research, wireframes, interactive prototypes, design systems and accessible interfaces for web and mobile.',
    keywords: ['UI UX design agency', 'product design services', 'design system', 'web app design'],
    intro:
      'Good design is good business. We combine user research with clear visual craft to create interfaces that reduce friction, build trust and turn visitors into customers.',
    outcomes: [
      'Higher conversion and activation rates',
      'Fewer support requests',
      'A consistent, scalable design system',
      'Accessible experiences (WCAG 2.2)',
    ],
    deliverables: [
      { title: 'User research', text: 'Interviews, analytics review and usability testing to uncover real needs.' },
      { title: 'Wireframes & prototypes', text: 'Clickable Figma prototypes to validate flows before code is written.' },
      { title: 'Visual & brand design', text: 'Polished, on-brand interfaces for web and mobile.' },
      { title: 'Design systems', text: 'Reusable components and tokens that keep products consistent as they grow.' },
    ],
    stack: ['Figma', 'FigJam', 'Design tokens', 'Prototyping', 'Usability testing', 'WCAG 2.2'],
    faqs: [
      { q: 'Do you design and develop, or only design?', a: 'Both. Having design and engineering under one roof means what we design is exactly what gets built.' },
      { q: 'Can you redesign our existing product?', a: 'Yes. We start with a UX audit to identify the highest-impact improvements before redesigning.' },
    ],
  },
  {
    slug: 'seo-services',
    title: 'SEO Services',
    short:
      'Technical, on-page, off-page and local SEO that grows rankings, qualified traffic and leads — on Google and in AI search.',
    icon: 'search',
    metaTitle: 'SEO Services: Technical, On-Page & Local SEO',
    metaDescription:
      'SEO services: technical SEO audits, keyword research, on-page optimisation, content, link building, local SEO and AI-search visibility.',
    keywords: ['SEO services', 'SEO company', 'technical SEO audit', 'on-page SEO', 'link building services', 'local SEO', 'hire SEO expert'],
    intro:
      'Being found is the first step to being chosen. Our SEO specialists combine engineering-grade technical SEO with content and authority building that match search intent — across Google and the new generation of AI search assistants — and report progress in plain language every month.',
    outcomes: [
      'Higher rankings for keywords that bring customers',
      'More qualified organic traffic and leads',
      'Visibility in AI-generated answers',
      'Transparent, monthly reporting',
    ],
    deliverables: [
      { title: 'Technical SEO audits', text: 'Crawlability, indexation, Core Web Vitals, structured data, site architecture and a prioritised fix list.' },
      { title: 'Keyword research & on-page SEO', text: 'Keyword mapping, titles, meta descriptions, headings, internal linking and optimisation of existing pages.' },
      { title: 'Content & off-page SEO', text: 'Content briefs and articles that answer real search intent, plus white-hat link building and digital PR.' },
      { title: 'Local SEO', text: 'Google Business Profile optimisation, local citations, reviews strategy and location pages.' },
      { title: 'AI search visibility (AEO/GEO)', text: 'Structured, citable content and entity signals so AI assistants mention and link to your brand.' },
      { title: 'Analytics & paid campaigns', text: 'GA4 and Search Console setup, conversion tracking, Looker Studio dashboards and Google Ads when you need faster results.' },
    ],
    stack: ['Google Search Console', 'GA4', 'Google Tag Manager', 'Semrush', 'Ahrefs', 'Screaming Frog', 'Looker Studio', 'Google Ads'],
    logos: ['siGooglesearchconsole', 'siGoogleanalytics', 'siGoogletagmanager', 'siSemrush', 'siLooker', 'siGoogleads'],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'Technical fixes can show impact within weeks; competitive rankings typically take 3–6 months of consistent work.' },
      { q: 'Do you guarantee first-page rankings?', a: 'No honest agency can guarantee rankings. We commit to best-practice work, clear targets and transparent reporting.' },
      { q: 'Do you offer one-off SEO audits or only monthly SEO?', a: 'Both. You can start with a one-off technical SEO audit and fix list, or choose a monthly SEO plan that covers on-page, content, links and reporting.' },
      { q: 'Can I hire a dedicated SEO expert?', a: 'Yes. You can hire a dedicated SEO specialist who works on your website and reports to your team. See our dedicated developers & experts service.' },
    ],
  },
  {
    slug: 'hire-dedicated-developers',
    group: 'talent',
    title: 'Hire Dedicated Developers',
    short:
      'Dedicated developers, QA engineers, DevOps engineers and SEO experts who work as part of your team — full-time, part-time or hourly.',
    icon: 'users',
    metaTitle: 'Hire Dedicated Developers, QA & SEO Experts',
    metaDescription:
      'Hire dedicated developers, QA engineers, DevOps engineers and SEO experts from Sahl Technology. Vetted talent, full-time, part-time or hourly.',
    keywords: [
      'hire dedicated developers',
      'dedicated development team',
      'staff augmentation',
      'hire QA engineer',
      'hire SEO expert',
      'remote software engineers',
    ],
    intro:
      'Need more hands without the time and cost of recruiting? Hire dedicated professionals from Sahl Technology who join your team, follow your processes and tools, and work only on your product. We handle vetting, HR, payroll and replacements — you keep full control of the day-to-day work.',
    outcomes: [
      'Vetted professionals matched to your stack',
      'Scale your team up or down as needs change',
      'No recruitment, HR or payroll overhead',
      'Full control over tasks, priorities and code',
    ],
    deliverables: [
      { title: 'Dedicated developers', text: 'Front-end, back-end, full-stack and mobile developers — React, Next.js, Node.js, Python, .NET, Laravel, Flutter and more.' },
      { title: 'Dedicated QA engineers', text: 'Manual testers and automation engineers skilled in Playwright and Selenium with Python or JavaScript.' },
      { title: 'DevOps & cloud engineers', text: 'Engineers who build and run your CI/CD pipelines, containers and cloud infrastructure on AWS, Azure or GCP.' },
      { title: 'Dedicated SEO experts', text: 'SEO specialists for technical audits, on-page optimisation, content and link building — working inside your marketing team.' },
      { title: 'UI/UX designers', text: 'Product designers who create wireframes, prototypes and design systems alongside your developers.' },
      { title: 'Full dedicated teams', text: 'A complete cross-functional squad — developers, QA, designer and project manager — working only on your product.' },
    ],
    steps: [
      { title: 'Share your needs', text: 'Tell us the role, skills, seniority, working hours and how long you need the resource.' },
      { title: 'Review & interview', text: 'We shortlist matching profiles. You review CVs, interview the candidates and choose.' },
      { title: 'Onboard', text: 'Your new team member joins your tools, stand-ups and workflow — under NDA from day one.' },
      { title: 'Manage & scale', text: 'You direct the work; we handle HR, payroll and support. Scale up or down as needed.' },
    ],
    stack: ['Full-time (monthly)', 'Part-time', 'Hourly', 'Your tools: Jira, Slack, GitHub', 'Daily stand-ups', 'Weekly reports', 'NDA & IP protection'],
    faqs: [
      { q: 'What roles can I hire?', a: 'Web, mobile, back-end and full-stack developers, software engineers, manual and automation QA engineers, DevOps engineers, UI/UX designers, project managers and SEO experts.' },
      { q: 'What engagement models do you offer?', a: 'Full-time monthly, part-time and hourly. Full-time dedicated resources work only on your project during your agreed working hours.' },
      { q: 'Can I interview the developer before they start?', a: 'Yes. We share profiles that match your requirements, and you interview and approve every person before they join your team.' },
      { q: 'Who owns the code and work produced?', a: 'You do. Every engagement is covered by an NDA, and all code, content and intellectual property belong to you.' },
      { q: 'What if a resource is not the right fit?', a: 'Tell us and we will work with you to resolve it, including arranging a suitable replacement.' },
    ],
  },
  {
    slug: 'tech-recruitment',
    group: 'talent',
    title: 'Tech Hiring & Recruitment',
    short:
      'We run your technical hiring end to end — sourcing, screening, coding assessments and interviews — so you hire the right people, faster.',
    icon: 'briefcase',
    metaTitle: 'Tech Recruitment & Developer Hiring Services',
    metaDescription:
      'Tech recruitment: we source, screen and technically assess developers, QA, DevOps and SEO specialists and run your hiring process.',
    keywords: [
      'tech recruitment services',
      'IT recruitment agency',
      'hire software developers',
      'technical hiring process',
      'developer screening',
      'technical interview service',
    ],
    intro:
      'Hiring engineers is hard when you are not an engineer — and slow even when you are. We manage the hiring process for you: we define the role, find candidates, test their real skills with practical assessments and interviews run by our senior engineers, and help you close the offer. The people you hire become your own employees.',
    outcomes: [
      'Candidates assessed by experienced engineers',
      'A shortlist of qualified people, not a pile of CVs',
      'Less time spent by your team on interviews',
      'A structured, fair and repeatable hiring process',
    ],
    deliverables: [
      { title: 'Role definition', text: 'We help define the role, required skills, seniority and salary range, and write a clear, attractive job description.' },
      { title: 'Sourcing & screening', text: 'We search job boards, professional networks and our own talent network, then screen CVs and run first-round calls.' },
      { title: 'Technical assessment', text: 'Practical coding tasks, test-automation exercises or SEO audits — reviewed by our senior engineers and specialists.' },
      { title: 'Technical interviews', text: 'Structured interviews on problem-solving, architecture and communication, with written scorecards for each candidate.' },
      { title: 'Shortlist & final interviews', text: 'You meet only the strongest candidates, with our notes on each, and we coordinate interview schedules.' },
      { title: 'Offer & onboarding support', text: 'Reference checks, offer guidance and an onboarding plan so new hires are productive from week one.' },
    ],
    steps: [
      { title: 'Define the role', text: 'We agree the job description, must-have skills, seniority, salary range and hiring timeline.' },
      { title: 'Source & screen', text: 'We find candidates, screen CVs and run first-round calls to check fit and availability.' },
      { title: 'Assess & interview', text: 'Practical tests and structured technical interviews by our senior engineers, with scorecards.' },
      { title: 'Hire & onboard', text: 'You interview the shortlist and choose. We support references, the offer and onboarding.' },
    ],
    stack: ['Developers', 'Software engineers', 'QA (manual & automation)', 'DevOps engineers', 'UI/UX designers', 'SEO specialists', 'Project managers'],
    faqs: [
      { q: 'Which roles do you recruit for?', a: 'Technical and digital roles: developers, software engineers, QA engineers (manual and automation), DevOps engineers, UI/UX designers, project managers and SEO specialists.' },
      { q: 'How is this different from hiring dedicated developers?', a: 'With recruitment, the people we find become your own employees. With dedicated developers, the professionals stay employed by Sahl Technology and work for you on a monthly or hourly basis.' },
      { q: 'How do you check technical skills?', a: 'Every shortlisted candidate completes a practical assessment and a structured technical interview with one of our senior engineers or specialists. You receive a scorecard for each.' },
      { q: 'Can you run only part of the process?', a: 'Yes. For example, we can run technical assessments and interviews only, while your HR team handles sourcing and offers.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
