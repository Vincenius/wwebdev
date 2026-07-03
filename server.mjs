// Production server: serves the fully static build from dist/ and applies the
// security headers to every response.
//
//   node server.mjs   (PORT / HOST from env; defaults 4321 / 0.0.0.0)
//
import express from 'express'
import compression from 'compression'
import { existsSync, statSync } from 'node:fs'
import { join, resolve, sep, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { securityHeaders } from './securityHeaders.mjs'

const ROOT = dirname(fileURLToPath(import.meta.url))
const CLIENT = join(ROOT, 'dist')
const app = express()
const PORT = process.env.PORT || 4321
const HOST = process.env.HOST || '0.0.0.0'

app.use(compression())

// 1. Security headers on every response.
app.use((_req, res, next) => {
    for (const [key, value] of Object.entries(securityHeaders)) {
        res.setHeader(key, value)
    }
    next()
})

// Hashed assets are immutable; other static files may be replaced in-place on
// deploy, so they revalidate daily; HTML always revalidates (deploys go live
// immediately).
const cacheControl = (path) => {
    if (path.startsWith(`${CLIENT}${sep}_astro${sep}`)) return 'public, max-age=31536000, immutable'
    if (path.endsWith('.html')) return 'no-cache'
    return 'public, max-age=86400'
}

const sendFile = (res, path, status = 200) =>
    res.status(status).set('Cache-Control', cacheControl(path)).sendFile(path)

// 2. Static resolution matching Astro's `directory` format + `trailingSlash:
//    'never'`: /blog -> dist/blog/index.html (200, NOT a 301 to /blog/);
//    exact files (/sitemap.xml, /_astro/*, /blog/img.png) served directly.
const isFile = (p) => existsSync(p) && statSync(p).isFile()
app.use((req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') return next()
    let rel
    try {
        rel = decodeURIComponent(req.path)
    } catch {
        return res.status(400).type('text/plain').send('400 — Bad request')
    }
    // Traversal guard: the resolved path must stay inside dist/.
    const asFile = resolve(CLIENT, `.${rel}`)
    if (asFile !== CLIENT && !asFile.startsWith(CLIENT + sep)) return next()
    if (rel !== '/' && isFile(asFile)) return sendFile(res, asFile)
    const asIndex = join(asFile, 'index.html')
    if (isFile(asIndex)) return sendFile(res, asIndex)
    return next()
})

// 3. Branded 404 for anything unmatched.
app.use((_req, res) => {
    const notFound = join(CLIENT, '404.html')
    if (isFile(notFound)) return sendFile(res, notFound, 404)
    res.status(404).type('text/plain').send('404 — Page not found')
})

app.listen(PORT, HOST, () => {
    console.log(`wweb.dev listening on http://${HOST}:${PORT}`)
})
