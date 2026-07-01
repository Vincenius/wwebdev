// Ported from legacy-next/utils/generateStaticFiles.js (sitemap.xml).
// Sourced from posts + templates only (no library, no static pages) — same as
// the Next build.
import type { APIRoute } from 'astro'
import { sortedData, formatDate } from '../lib/feedData'

export const GET: APIRoute = () => {
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sortedData.reduce(
          (acc, curr) => `${acc}
        <url>
            <loc>https://wweb.dev${curr.link}</loc>
            <lastmod>${formatDate(new Date(curr.updatedAt || curr.date))}</lastmod>
        </url>`,
          '',
      )}
  </urlset>`

    return new Response(sitemapXml, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    })
}
