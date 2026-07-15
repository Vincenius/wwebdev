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
yarn build          # static build → dist/
yarn serve          # node server.mjs → PROD (serves dist/ + security headers + caching + 404)
yarn check          # astro check (astro/tsconfigs/strictest)
yarn lint           # eslint (flat config: TS + astro + jsx-a11y + react-hooks)
yarn format         # prettier --write . (format:check for CI-style check)
yarn test:parity    # diff routes vs test/baseline (run `yarn serve` first)
```

Yarn 4 via Corepack (`corepack enable`). Prod = `server.mjs` (Express static +
headers + compression), **not** `astro preview`. CI: `.github/workflows/ci.yml`
runs lint → check → build → parity.

## Layout

```
astro.config.mjs      static site (no adapter); trailingSlash 'never', format 'directory'
server.mjs            prod server: dist/ + securityHeaders.mjs + Cache-Control + branded 404
securityHeaders.mjs   CSP + security headers (single source of truth)
src/
  pages/             file routes (.astro). 404.astro = branded not-found (noindex).
                     sitemap.xml.ts, robots.txt.ts, rss/*.ts = build-time endpoints.
  layouts/           Layout, SidebarLayout, Head.astro (Head = all <head>/SEO)
  components/        shared .astro components (Nav, Footer, CodeBlock, Icon…)
  components/react/  React components used BOTH statically from .astro (no JS
                     shipped) and inside islands: LinkBox, CopyButton, icons
  components/islands/ interactive React islands (Search + 5 generators)
  data/              posts.ts, templates.ts  ← content registry (see below)
  lib/               content.ts (registry access), dates.ts (ISO→display),
                     feedData/buildFeed (RSS), search.ts (local search)
  styles/            global/ui/ads/linkbox/forms + per-generator .css
test/                routes.json, parity.mjs, lib/extract.mjs, baseline/
```

## Content registry (src/data + src/lib)

- `posts.ts` / `templates.ts`: ordered **newest-first**; dates are ISO
  `YYYY-MM-DD` strings. Display formatting only via `lib/dates.ts`
  (`formatDisplayDate`, pinned to UTC — build output is TZ-independent).
- **No numeric ids.** Pages are joined to their metadata by URL:
  `findByLink(Astro.url.pathname)` (`lib/content.ts`) — throws at build time if
  a page has no entry. PrevNext = array-order neighbors. `Featured` takes
  `links={[…]}`.
- Adding a post = add the data entry (top of the array) + the `.astro` page
  whose path matches `link`.

## Conventions

- **Static content → `.astro`; interactive → React island** in
  `components/islands/` (`client:visible`/`client:load`; use `className`).
  React components in `components/react/` are also rendered statically from
  .astro files (no `client:` directive → zero JS shipped). No styled-components
  / MUI / Emotion — plain CSS driven by design tokens. Islands use global CSS
  classes (can't use Astro scoped styles).
- **Design tokens** live in `src/styles/global.css` `@theme` (theme-only
  Tailwind import — **no preflight, no utilities**; it only emits `:root` CSS
  vars): single accent `--color-accent` (+ `--color-accent-hover`),
  `--color-heading`/`--color-body`, greys (`--color-dark-grey`,
  `--color-light-grey`, `--color-grey-blue`), `--radius`/`--radius-lg`,
  `--shadow-card`/`--shadow-page`. **Don't hard-code hexes/radii/shadows** —
  reference the tokens. The green-blue→blue gradient is logo/promo only.
- **Icons**: `components/Icon.astro` (astro) / `components/react/icons.tsx`
  (React). No global svg sizing rule — size via the `size` prop. `.sr-only`
  (global.css) for icon-link labels.
- **Page width/gutters**: add the `.ui-max` class (ui.css) — don't copy the
  max-width/padding block into component CSS.
- Clickable controls must be real `<button>`s (jsx-a11y lint enforces this);
  style them with `.ui-unbutton` + component classes. Copy-to-clipboard =
  `components/react/CopyButton.tsx`.
- Global stylesheets (imported in `Layout.astro`): `global` (tokens+base),
  `ui` (`.ui-*` primitives), `linkbox`, `forms` (native control theming), `ads`.
- `<head>`/SEO lives only in `layouts/Head.astro`.
- Local `<img>`s carry intrinsic `width`/`height` attributes (CLS); article CSS
  scales them with `max-width:100%; height:auto`.

## Gotchas

- Fully static — no on-demand routes, no adapter. `server.mjs` has a custom static
  resolver for `trailingSlash:'never'` + `format:'directory'` (`/blog` → `blog/index.html`,
  no 301). Don't swap in `express.static` (it 301s to add slashes).
- Client env is `PUBLIC_*` (was `NEXT_PUBLIC_*`).
- Parity harness: `test/baseline/` was re-snapshot from the post-refactor build
  (ISO dates, sitemap additions, a11y buttons) and is now the **regression
  baseline** for the current site. 7 interactive tool pages keep a relaxed text
  tolerance (native controls replaced MUI). The animated-css-background-generator
  (browser-mockup layout) and creative-hover-effects (sidebar tool layout +
  demo cards, was a full-screen dark page) pages were redesigned after that
  snapshot — re-snapshot before comparing them.
- Animated-bg previews: the copyable CSS is a fixed, viewport-unit page
  background; the live preview reuses it inside the mockup by rewriting v*→cq*
  units (`islands/animatedCssBg/previewCss.ts`; the mockup content is a size
  container) plus a `position: absolute` override in
  `styles/animated-css-background-generator.css`. Keep those in sync.
