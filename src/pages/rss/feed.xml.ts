import type { APIRoute } from 'astro'
import { buildFeed } from '../../lib/buildFeed'

export const GET: APIRoute = () =>
    new Response(buildFeed().rss2(), {
        headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
    })
