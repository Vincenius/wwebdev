// Shared extraction helpers for the route-parity harness.
// Pulls the SEO-critical <head> tags and a normalized DOM-text signature
// out of an HTML string so Next (baseline) and Astro output can be diffed.
import { parse } from 'node-html-parser'

/** The <head> tags we assert byte-identical parity on (T-04). */
export function extractHead(html) {
    const root = parse(html)
    const head = root.querySelector('head') ?? root

    const metaByName = (attr, value) => {
        const el = head.querySelector(`meta[${attr}="${value}"]`)
        return el?.getAttribute('content') ?? null
    }

    const jsonLd = head
        .querySelectorAll('script[type="application/ld+json"]')
        .map((s) => normalizeJson(s.textContent))

    return {
        title: head.querySelector('title')?.textContent?.trim() ?? null,
        description: metaByName('name', 'description'),
        robots: metaByName('name', 'robots'),
        canonical: head.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null,
        og: {
            title: metaByName('property', 'og:title'),
            description: metaByName('property', 'og:description'),
            image: metaByName('property', 'og:image'),
            url: metaByName('property', 'og:url'),
            type: metaByName('property', 'og:type'),
            site_name: metaByName('property', 'og:site_name'),
        },
        twitter: {
            card: metaByName('name', 'twitter:card'),
            title: metaByName('name', 'twitter:title'),
            description: metaByName('name', 'twitter:description'),
            image: metaByName('name', 'twitter:image'),
            creator: metaByName('name', 'twitter:creator'),
        },
        jsonLd,
    }
}

/** Normalize JSON-LD so whitespace / key order don't cause false diffs. */
function normalizeJson(text) {
    try {
        return JSON.stringify(sortKeys(JSON.parse(text)))
    } catch {
        // Legacy Head embeds a template literal with unfilled `${...}` — compare raw, whitespace-collapsed.
        return text.replace(/\s+/g, ' ').trim()
    }
}

function sortKeys(value) {
    if (Array.isArray(value)) return value.map(sortKeys)
    if (value && typeof value === 'object') {
        return Object.fromEntries(
            Object.keys(value)
                .sort()
                .map((k) => [k, sortKeys(value[k])]),
        )
    }
    return value
}

/**
 * Normalized visible-text signature of the page's <main> content.
 * We scope to <main> on purpose: the site chrome (nav/header/footer) carries the
 * one *intended* difference from baseline — the removed "Library" nav link — so
 * comparing full-body text would false-fail every route. Chrome parity is covered
 * separately by link-resolution checks (T-07). Falls back to <body> if no <main>.
 */
const decodeEntities = (s) =>
    s
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#0?39;/g, "'")
        .replace(/&#x27;/gi, "'")
        .replace(/&#x2f;/gi, '/')
        .replace(/&apos;/g, "'")

export function extractText(html) {
    const root = parse(html)
    const scope = root.querySelector('main') ?? root.querySelector('body') ?? root
    // Drop chrome + non-content so the intended "Library" nav-link removal (and
    // other header/footer chrome) never registers as a content diff — matters for
    // the few pages that have no <main> (e.g. the full-screen demo pages).
    // Also drop the sidebar/ad regions: the production ad rotates between
    // affiliates (StatusScout / HTMLrev / …) so it is non-deterministic content.
    scope
        .querySelectorAll(
            'nav, header, footer, aside, script, style, noscript, #carbon, #carbonads',
        )
        .forEach((n) => n.remove())
    // Turn BLOCK-level tag boundaries into whitespace but drop INLINE tags with
    // no separator. Rationale:
    //  • block boundaries → space: adjacent elements (LinkBoxes, <p>s) don't glue
    //    into one word ("visitGradient").
    //  • inline tags → nothing: syntax-highlighter token <span>s (which differ
    //    between react-syntax-highlighter's per-token spans and a plain <pre>)
    //    collapse back to the identical raw code text ("50px", not "50 px").
    // Applied identically to both baseline and target.
    const BLOCK =
        /<\/?(?:div|p|section|article|header|footer|main|aside|nav|ul|ol|li|h[1-6]|br|hr|table|thead|tbody|tr|td|th|pre|blockquote|figure|figcaption|dl|dt|dd|form|fieldset|details|summary)\b[^>]*>/gi
    return (
        decodeEntities(scope.innerHTML.replace(BLOCK, ' ').replace(/<[^>]+>/g, ''))
            // strip zero-width / invisible chars (e.g. MUI fieldset legends emit U+200B)
            .replace(/[​-‍﻿]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
    )
}

/** All internal (same-site / relative) link hrefs on the page — for T-03 / T-07. */
export function extractInternalLinks(html, origin = 'https://wweb.dev') {
    const root = parse(html)
    return root
        .querySelectorAll('a[href]')
        .map((a) => a.getAttribute('href'))
        .filter(Boolean)
        .map((h) => (h.startsWith(origin) ? h.slice(origin.length) || '/' : h))
        .filter((h) => h.startsWith('/'))
}
