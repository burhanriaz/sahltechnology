/**
 * Cloudflare Worker entry (see wrangler.jsonc).
 * - POST /api/quote → quote form handler (shared with the Pages Function in functions/api/quote.ts)
 * - everything else → static Astro build in dist/ (incl. _headers and _redirects)
 */
import { onRequestPost } from '../functions/api/quote';

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  [key: string]: unknown;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/quote' || pathname === '/api/quote/') {
      if (request.method === 'POST') return onRequestPost({ request, env: env as never });
      return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
    }
    if (pathname.startsWith('/api/')) return new Response('Not Found', { status: 404 });

    return env.ASSETS.fetch(request);
  },
};
