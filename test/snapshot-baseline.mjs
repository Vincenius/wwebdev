// Phase 0/B — capture the production (Next.js) baseline for surviving routes.
// Snapshots https://wweb.dev so the parity harness has something to diff Astro
// against, without needing local Mongo/SMTP secrets. Library routes are excluded.
//
//   node test/snapshot-baseline.mjs
//
import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import routes from './routes.json' with { type: 'json' }
import { extractHead } from './lib/extract.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const BASE = process.env.BASELINE_URL ?? 'https://wweb.dev'
const OUT = join(HERE, 'baseline')

const slug = path => (path === '/' ? 'index' : path.replace(/^\//, '').replaceAll('/', '__'))

async function run() {
    await mkdir(OUT, { recursive: true })
    const index = {}
    let ok = 0
    let failed = 0

    for (const path of routes.surviving) {
        const url = `${BASE}${path}`
        try {
            const res = await fetch(url, { redirect: 'manual' })
            const html = await res.text()
            await writeFile(join(OUT, `${slug(path)}.html`), html)
            index[path] = { status: res.status, head: extractHead(html) }
            ok++
            process.stdout.write(`  ${res.status}  ${path}\n`)
        } catch (err) {
            failed++
            index[path] = { status: null, error: String(err) }
            process.stdout.write(`  ERR  ${path}  ${err}\n`)
        }
    }

    await writeFile(join(OUT, 'index.json'), JSON.stringify(index, null, 2) + '\n')
    console.log(`\nBaseline snapshot: ${ok} ok, ${failed} failed → ${OUT}`)
    if (failed) process.exit(1)
}

run()
