/**
 * ─────────────────────────────────────────────────────────────
 *  Sahl Technology — central site configuration
 *  Fill in the contact + social details below when ready.
 *  Anything left as an empty string is hidden automatically
 *  (header, footer, contact page and structured data).
 * ─────────────────────────────────────────────────────────────
 */
export const SITE = {
  name: 'Sahl Technology',
  legalName: 'Sahl Technology',
  /** Other names people search for (used in structured data) */
  alternateName: ['Sahl', 'سهل للتقنية'],
  /** Production domain, no trailing slash. CONFIRM before deploying. */
  url: 'https://studio.sahlcalc.com',
  tagline: 'Web Development & Automation',
  description:
    'Sahl Technology builds websites, apps and custom software, automates business processes and testing, delivers SEO and provides dedicated developers.',
  locale: 'en_US',
  lang: 'en',
  themeColor: '#06183b',
  defaultOgImage: '/og/default.png',
  /** Google Search Console HTML-tag verification code (leave empty if verified by DNS) */
  googleSiteVerification: '',
  /** GA4 measurement ID, e.g. 'G-XXXXXXX'. Loads only after the visitor accepts analytics cookies. */
  ga4Id: '',
  foundingYear: '', // e.g. '2021'

  contact: {
    email: '', // TODO: e.g. 'hello@your-domain.com'
    phone: '', // TODO: display format, e.g. '+92 300 0000000'
    phoneHref: '', // TODO: E.164, e.g. '+923000000000'
    whatsapp: '', // TODO: E.164 digits only, e.g. '923000000000'
    address: {
      street: '',
      city: '',
      region: '',
      postalCode: '',
      country: '', // e.g. 'PK'
    },
    hours: 'Mon–Fri, 9:00–18:00',
  },

  social: {
    linkedin: '', // TODO full URLs
    github: '',
    x: '',
    facebook: '',
    instagram: '',
    youtube: '',
  },

  /** Quote form: posts to the Cloudflare Pages Function in functions/api/quote.ts (sends via Resend). */
  quoteEndpoint: '/api/quote',
  /** Cloudflare Turnstile SITE key (public). Empty = no spam widget; set it before launch. */
  turnstileSiteKey: '0x4AAAAAAGWMb6bkjEdGzc_r',
} as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Hire Talent', href: '/services/hire-dedicated-developers/' },
  { label: 'Our Work', href: '/projects/' },
  { label: 'About', href: '/about/' },
  { label: 'Process', href: '/process/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const socialLinks = () =>
  Object.entries(SITE.social)
    .filter(([, url]) => Boolean(url))
    .map(([key, url]) => ({ key, url: url as string }));
