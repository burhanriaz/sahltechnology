import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { services } from '../data/services';
import { projects } from '../data/projects';

export const GET: APIRoute = () => {
  const body = `# ${SITE.legalName}

> ${SITE.description}

## Services
${services.map((s) => `- [${s.title}](${SITE.url}/services/${s.slug}/): ${s.short}`).join('\n')}

## Company
- [About](${SITE.url}/about/): Who we are, mission, values and expertise.
- [Process](${SITE.url}/process/): How we deliver projects, from discovery to support.
- [Projects](${SITE.url}/projects/): ${projects.map((p) => p.title).join(', ')}.
- [Contact](${SITE.url}/contact/): Request a free discovery call or estimate.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
