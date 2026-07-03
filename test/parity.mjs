// Phase B — route-parity harness (the core "nothing breaks" test).
// Diffs a running target (the Astro build) against the captured Next baseline:
//   T-01 status parity   T-03 removed routes 404   T-04 head/SEO parity
//   + normalized DOM-text diff within tolerance.
//
//   TARGET_URL=http://localhost:4321 node test/parity.mjs
//
// Exits non-zero (fails loudly) listing every divergent route.
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import routes from './routes.json' with { type: 'json' }
import { extractHead, extractText, extractInternalLinks } from './lib/extract.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const TARGET = process.env.TARGET_URL ?? 'http://localhost:4321'
const TEXT_TOLERANCE = Number(process.env.TEXT_TOLERANCE ?? 0.02)

// Interactive generator/tool pages: their form CONTROLS were intentionally
// restyled from MUI (Slider value labels, react-color hex/rgb/a labels) to native
// inputs per the migration's styling decision, so their control text legitimately
// differs from the Next baseline. Prose + head + generated-output are still
// checked; the text-diff gets a wider tolerance to absorb the control chrome.
const TOOL_TOLERANCE = 0.15
const TOOL_ROUTES = new Set([
    '/resources/animated-css-background-generator',
    '/resources/blur-background-css-generator',
    '/resources/css-separator-generator',
    '/resources/loader-generator',
    '/resources/navigation-generator',
    '/resources/js-array-functions-cheatsheet',
    '/resources/js-object-functions-cheatsheet',
])

const slug = (path) => (path === '/' ? 'index' : path.replace(/^\//, '').replaceAll('/', '__'))

async function loadBaseline() {
    const idx = JSON.parse(await readFile(join(HERE, 'baseline', 'index.json'), 'utf8'))
    return idx
}

async function baselineHtml(path) {
    return readFile(join(HERE, 'baseline', `${slug(path)}.html`), 'utf8')
}

/** Symmetric word-multiset difference ratio (0 = identical). */
function textDiffRatio(a, b) {
    const count = (s) => {
        const m = new Map()
        for (const w of s.split(' ').filter(Boolean)) m.set(w, (m.get(w) ?? 0) + 1)
        return m
    }
    const ma = count(a),
        mb = count(b)
    const keys = new Set([...ma.keys(), ...mb.keys()])
    let diff = 0,
        total = 0
    for (const k of keys) {
        const x = ma.get(k) ?? 0,
            y = mb.get(k) ?? 0
        diff += Math.abs(x - y)
        total += Math.max(x, y)
    }
    return total === 0 ? 0 : diff / total
}

function diffHead(base, got) {
    const problems = []
    const walk = (b, g, path = '') => {
        if (b && typeof b === 'object' && !Array.isArray(b)) {
            for (const k of Object.keys(b)) walk(b[k], g?.[k], path ? `${path}.${k}` : k)
        } else {
            const bs = JSON.stringify(b),
                gs = JSON.stringify(g)
            if (bs !== gs) problems.push(`${path}: baseline ${bs} != target ${gs}`)
        }
    }
    walk(base, got)
    return problems
}

async function run() {
    const baseline = await loadBaseline()
    const failures = []

    // Optional subset filter for incremental batch verification: ONLY=/a,/b
    const only = process.env.ONLY ? process.env.ONLY.split(',').map((s) => s.trim()) : null
    const surviving = only ? routes.surviving.filter((p) => only.includes(p)) : routes.surviving

    // T-01 / T-04 + text: surviving routes
    for (const path of surviving) {
        const base = baseline[path]
        if (!base || base.status == null) {
            failures.push(`[baseline-missing] ${path} — run snapshot-baseline first`)
            continue
        }
        let res
        try {
            res = await fetch(`${TARGET}${path}`, { redirect: 'manual' })
        } catch (err) {
            failures.push(`[unreachable] ${path} — ${err}`)
            continue
        }
        const html = await res.text()

        if (res.status !== base.status) {
            failures.push(`[status] ${path} — baseline ${base.status} != target ${res.status}`)
        }
        // SKIP_HEAD=1 while intentionally improving <head> output (JSON-LD, canonical,
        // dropped legacy metas) — content/route regressions are still checked.
        if (!process.env.SKIP_HEAD) {
            for (const p of diffHead(base.head, extractHead(html))) {
                failures.push(`[head] ${path} — ${p}`)
            }
        }
        const ratio = textDiffRatio(extractText(await baselineHtml(path)), extractText(html))
        const tol = TOOL_ROUTES.has(path) ? TOOL_TOLERANCE : TEXT_TOLERANCE
        if (ratio > tol) {
            failures.push(`[text] ${path} — diff ratio ${ratio.toFixed(3)} > ${tol}`)
        }

        // T-03: no surviving page may link to the removed library feature.
        const dead = extractInternalLinks(html).filter(
            (h) => h === '/library' || h.startsWith('/library/'),
        )
        if (dead.length) {
            failures.push(
                `[dead-link] ${path} — links to removed routes: ${[...new Set(dead)].join(', ')}`,
            )
        }
    }

    // T-03: removed library routes must be absent (404)
    for (const path of only ? [] : routes.removed) {
        let res
        try {
            res = await fetch(`${TARGET}${path}`, { redirect: 'manual' })
        } catch (err) {
            failures.push(`[unreachable] ${path} — ${err}`)
            continue
        }
        if (res.status !== 404) {
            failures.push(`[removed] ${path} — expected 404, got ${res.status}`)
        }
    }

    if (failures.length) {
        console.error(`\n✗ Route parity FAILED (${failures.length}):`)
        for (const f of failures) console.error('  ' + f)
        process.exit(1)
    }
    const removedChecked = only ? 0 : routes.removed.length
    console.log(
        `\n✓ Route parity passed: ${surviving.length} surviving${only ? ' (filtered)' : ''}, ${removedChecked} removed.`,
    )
}

run()
