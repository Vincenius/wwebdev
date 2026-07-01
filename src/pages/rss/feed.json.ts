import type { APIRoute } from 'astro'
import { buildFeed } from '../../lib/buildFeed'

export const GET: APIRoute = () =>
    new Response(buildFeed().json1(), {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
