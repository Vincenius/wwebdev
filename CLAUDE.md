# CLAUDE.md

Project cheat-sheet for agents. **Keep this file current** when structure,
commands, or conventions change.

## What this is

[wweb.dev](https://wweb.dev) — a **fully static** Astro site (migrated from
Next.js) with a few **React islands** (search + CSS-generator tools). Content is
hardcoded data in `src/data/`, not a CMS. No database, no server-side routes.

## Commands

```bash
yarn dev            # dev server (http://localhost:4321)
yarn build          # static build → dist/ (runs as TZ=UTC — keep it)
yarn serve          # node server.mjs → PROD (serves dist/ + security headers + 404)
yarn check          # astro check (astro/tsconfigs/strictest)
yarn test:parity    # diff routes vs test/baseline (run `yarn serve` first; SKIP_HEAD=1
                    #   to ignore intentional <head> changes; checks status/text/404s)
```

Yarn 4 via Corepack (`corepack enable`). Prod = `server.mjs` (Express static +
headers), **not** `astro preview`.

## Layout

```
astro.config.mjs      static site (no adapter); trailingSlash 'never', format 'directory'
server.mjs            prod server: serves dist/, applies securityHeaders.mjs, branded 404
securityHeaders.mjs   CSP + security headers (single source of truth)
src/
  pages/             file routes (.astro). 404.astro = branded not-found.
                     sitemap.xml.ts, robots.txt.ts, rss/*.ts = build-time endpoints.
  layouts/           Layout, SidebarLayout, Head.astro (Head = all <head>/SEO)
  components/        shared .astro components (Nav, Footer, LinkBox, CodeBlock…)
  components/islands/ React islands (Search + 5 generators), client:visible
  data/              posts.ts, templates.ts  ← site content
  lib/               feedData/buildFeed (RSS), search.ts (local search)
  styles/            global/ui/ads/linkbox + per-generator .css
test/                routes.json, parity.mjs, lib/extract.mjs, baseline/ (prod HTML)
```

## Conventions

- **Static content → `.astro`; interactive → React island** in `components/islands/`
  (`client:visible`; use `className`, not `class`). No styled-components / MUI /
  Emotion — plain CSS driven by design tokens. Islands use global CSS classes
  (can't use Astro scoped styles).
- **Design tokens** live in `src/styles/global.css` `@theme` (emitted as `:root`
  CSS vars — use `var(--…)` in component CSS): single accent `--color-accent`
  (+ `--color-accent-hover`), `--color-heading`/`--color-body`, `--radius`/
  `--radius-lg`, `--shadow-card`/`--shadow-page`. Don't hard-code hexes/radii/
  shadows — reference the tokens. The green-blue→blue gradient is logo/promo only.
- Global stylesheets (imported in `Layout.astro`): `global` (tokens+base),
  `ui` (`.ui-*` primitives), `linkbox`, `forms` (native control theming), `ads`.
- `<head>`/SEO lives only in `layouts/Head.astro`.

## Gotchas

- Fully static — no on-demand routes, no adapter. `server.mjs` has a custom static
  resolver for `trailingSlash:'never'` + `format:'directory'` (`/blog` → `blog/index.html`,
  no 301). Don't swap in `express.static` (it 301s to add slashes).
- Build must be **TZ=UTC** (baked into `yarn build`) so JSON-LD dates are deterministic.
- Client env is `PUBLIC_*` (was `NEXT_PUBLIC_*`).
- Parity harness: 7 interactive tool pages use a relaxed text tolerance (native
  controls replaced MUI); `<head>` was intentionally improved post-migration
  (valid JSON-LD, real canonicals) so use `SKIP_HEAD=1` vs the old prod baseline.
