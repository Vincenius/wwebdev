// Production server: serves the fully static build from dist/ and applies the
// security headers to every response.
//
//   node server.mjs   (PORT / HOST from env; defaults 4321 / 0.0.0.0)
//
import express from 'express'
import { existsSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { securityHeaders } from './securityHeaders.mjs'

const ROOT = dirname(fileURLToPath(import.meta.url))
const CLIENT = join(ROOT, 'dist')
const app = express()
const PORT = process.env.PORT || 4321
const HOST = process.env.HOST || '0.0.0.0'

// 1. Security headers on every response.
app.use((_req, res, next) => {
    for (const [key, value] of Object.entries(securityHeaders)) {
        res.setHeader(key, value)
    }
    next()
})

// 2. Static resolution matching Astro's `directory` format + `trailingSlash:
//    'never'`: /blog -> dist/blog/index.html (200, NOT a 301 to /blog/);
//    exact files (/sitemap.xml, /_astro/*, /blog/img.png) served directly.
const isFile = (p) => existsSync(p) && statSync(p).isFile()
app.use((req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') return next()
    const rel = decodeURIComponent(req.path).replace(/\.\.+/g, '') // basic traversal guard
    const asFile = join(CLIENT, rel)
    if (rel !== '/' && isFile(asFile)) return res.sendFile(asFile)
    const asIndex = join(CLIENT, rel, 'index.html')
    if (isFile(asIndex)) return res.sendFile(asIndex)
    return next()
})

// 3. Branded 404 for anything unmatched.
app.use((_req, res) => {
    res.status(404)
    const notFound = join(CLIENT, '404.html')
    if (isFile(notFound)) return res.sendFile(notFound)
    res.type('text/plain').send('404 — Page not found')
})

app.listen(PORT, HOST, () => {
    console.log(`wweb.dev listening on http://${HOST}:${PORT}`)
})
