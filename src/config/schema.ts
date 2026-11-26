import { SITE } from './site';

export const breadcrumbSchema = (items: { label: string; href: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ label: 'Home', href: '/' }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.label,
    item: new URL(it.href, SITE.url).href,
  })),
});

export const faqSchema = (items: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceSchema = (s: { title: string; metaDescription: string; slug: string }) => ({
  '@type': 'Service',
  '@id': `${SITE.url}/services/${s.slug}/#service`,
  name: s.title,
  serviceType: s.title,
  description: s.metaDescription,
  url: `${SITE.url}/services/${s.slug}/`,
  provider: { '@id': `${SITE.url}/#organization` },
  areaServed: { '@type': 'Place', name: 'Worldwide' },
});
