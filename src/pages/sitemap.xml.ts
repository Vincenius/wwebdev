// Sitemap over all content pages (posts + templates) plus the static pages
// (the Next build only listed posts/templates).
import type { APIRoute } from 'astro'
import { sortedData, siteURL } from '../lib/feedData'

const staticPages = [
    '/',
    '/about',
    '/blog',
    '/privacy',
    '/resources',
    '/search',
    '/sponsorship',
    '/templates',
    '/weekly',
]

export const GET: APIRoute = () => {
    const urls = [
        ...staticPages.map(
            (path) =>
                `\n        <url>\n            <loc>${siteURL}${path === '/' ? '' : path}</loc>\n        </url>`,
        ),
        ...sortedData.map(
            (post) =>
                `\n        <url>\n            <loc>${siteURL}${post.link}</loc>\n            <lastmod>${post.updatedAt || post.date}</lastmod>\n        </url>`,
        ),
    ]

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}
  </urlset>`

    return new Response(sitemapXml, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    })
}
