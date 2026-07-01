import type { APIRoute } from 'astro'
import { buildFeed } from '../../lib/buildFeed'

export const GET: APIRoute = () =>
    new Response(buildFeed().atom1(), {
        headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' },
    })
