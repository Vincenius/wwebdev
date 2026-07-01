// Ported from legacy-next/utils/generateStaticFiles.js (robots.txt).
import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
    const robotsTxt = `User-agent: *
  Sitemap: https://wweb.dev/sitemap.xml
  Disallow:`
    return new Response(robotsTxt, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
}
