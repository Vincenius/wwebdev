# Migration Inventory — Next.js → Astro

Generated in **Phase 0**. Baseline app: Next.js `13.2.3`, `pages/` router, styled-components + MUI + Emotion, `next-pwa`.
Base URL: `https://wweb.dev`. Package manager: `yarn`. Deploy: Jenkins + docker compose (Node server).

## Rendering / trailing-slash baseline
- `next.config.js` sets **no** `trailingSlash` → Next default `false`. Build uses `next export` (fully static HTML export) + `next-pwa` for the service worker.
- **No `redirects()` / `rewrites()`** in `next.config.js`. Only `headers()` (security + CSP) and `poweredByHeader: false`.
- Astro target decision: `output: 'static'` + `@astrojs/node` adapter, individual API routes opt into SSR via `export const prerender = false`. `trailingSlash: 'never'`, `build.format: 'file'` to match `false`.

## Environment variables
| Next var | Scope | Used by | Astro mapping |
|---|---|---|---|
| `MONGODB_USER` / `MONGODB_PASSWORD` | server-only | `/api/search`, `/api/weekly` (`/api/library` removed) | `import.meta.env.MONGODB_USER` (server) |
| `EMAIL_USER` / `EMAIL_PASSWORD` | server-only | `/api/submit` (nodemailer) | `import.meta.env.EMAIL_USER` (server) |
| `NEXT_PUBLIC_HOSTNAME` | client-exposed | `utils/search.js` (runtime fetch), `pages/library/*` (build-time fetch — **removed**) | `PUBLIC_HOSTNAME` |

No committed `.env`. Server vars must never reach the client bundle.

## Surviving routes (38 HTML + static assets)

### Static pages (prerender)
| Path | Source | Data | Interactive components |
|---|---|---|---|
| `/` | `pages/index.js` | `content/posts`, `content/templates`; `getStaticProps` runs `generateStaticFiles()` (writes robots/sitemap/rss) | Ad (island), ArticlePreview (island) |
| `/about` | `pages/about.js` | — | — |
| `/privacy` | `pages/privacy.js` | — | — |
| `/sponsorship` | `pages/sponsorship.js` | — | — |
| `/weekly` | `pages/weekly.js` | — (static notice, links to webdev.town) | — |
| `/blog` | `pages/blog.js` | `content/posts` (filter Article) | Ad, ArticlePreview |
| `/blog/<14 slugs>` | `pages/blog/*.js` | `content/posts` (per-id meta) | CodeBlock, Comments, PrevNext, Ad |
| `/resources` | `pages/resources.js` | `content/posts` (filter Resource) | Ad, ArticlePreview |
| `/resources/creative-backgrounds` | static listicle | posts meta | Ad, Featured |
| `/resources/free-icon-sets` | static listicle | posts meta | Ad, Featured, NewsletterLink |
| `/resources/free-svg-illustrations` | static listicle | posts meta | Ad, Featured |
| `/resources/websites-for-inspiration` | static listicle | posts meta | Ad, Featured |
| `/resources/js-array-functions-cheatsheet` | static | posts meta | CodeBlock, Ad |
| `/resources/js-object-functions-cheatsheet` | static | posts meta | CodeBlock, Ad |
| `/templates` | `pages/templates.js` | `content/templates` | LinkBox |
| `/templates/<3 slugs>` | `pages/templates/*.js` | posts/templates meta | — |

### Interactive generator pages (prerendered shell + client island)
| Path | Island component | `client:*` |
|---|---|---|
| `/resources/animated-css-background-generator` | `AnimatedCssBackgroundGenerator` | `client:load` / `visible` |
| `/resources/blur-background-css-generator` | `BlurBackgroundGenerator` | `client:load` / `visible` |
| `/resources/css-separator-generator` | `CssSeparatorGenerator` | `client:load` / `visible` |
| `/resources/loader-generator` | `LoaderGenerator` | `client:visible` |
| `/resources/navigation-generator` | `NavigationGenerator` | `client:load` / `visible` |
| `/resources/creative-hover-effects` | `CreativeHoverEffects` | `client:visible` |

### Interactive app pages
| Path | Behavior | Island |
|---|---|---|
| `/search` | client search UI, fetches `/api/search` at runtime; MUI Checkbox/TextField; "library" checkbox toggles searching the **weekly Mongo collection** (unrelated to the removed `/library` route) | `Search` (`client:load`) |

### API routes (SSR endpoints, `prerender = false`, need Node adapter)
| Path | Method | Backend | Keep? |
|---|---|---|---|
| `/api/search` | GET | MongoDB Atlas `$search` | **Keep** (used by `/search`) |
| `/api/submit` | POST | nodemailer SMTP | **Keep** — no internal caller found (form origin TBD); flag |
| `/api/weekly` | GET `?id=` | MongoDB | **Keep** — no internal caller found; possible external consumer; flag |

### Static/generated assets to preserve
- `public/robots.txt`, `public/sitemap.xml`, `public/rss/{feed.xml,atom.xml,feed.json}` — currently generated at build by `utils/generateStaticFiles.js` (invoked from `/` `getStaticProps`). Astro: reproduce via an integration hook or endpoints. **Sitemap/RSS must exclude removed library routes** (they already don't include them — sourced from `content/posts`+`content/templates`).
- `public/manifest.json`, favicons, `share.png`, preview images.
- Service worker (`next-pwa` → `sw.js` + workbox). PWA parity decision needed.

## Head / SEO (from `components/Head/index.js`)
Per-page: `<title>` (`{title} | wweb.dev` or `wweb.dev | {title}` when `titleNameFirst`), canonical (`link`), description, robots, OG (title/image/site_name/description/url/type=article), Twitter card, JSON-LD `Article` structured data, favicon, apple-touch-icon, manifest, theme-color, adsense meta, inline analytics `<script defer src=analytics.vincentwill.com/script.js data-website-id=...>`, inline `<style>` reset. All must be reproduced in the Astro layout `<head>`.

## LIBRARY FEATURE — TO REMOVE (Phase 6)
| Item | Action |
|---|---|
| `pages/library/index.js` | delete route `/library` |
| `pages/library/[slug].js` | delete routes `/library/{latest,javascript,css,tools,react,articles,design,libraries,other}` (9) |
| `pages/api/library.js` | delete (consumed only by library pages) |
| `components/FilterBar/*` | delete — imports `/api/library`, **no importers** (dead) |
| Nav "Library" link (`components/Nav/index.js:17`) | remove from `links` array |
| `NEXT_PUBLIC_HOSTNAME` build-time fetch | removed with library pages |

Assert removed paths return **404** in Astro; assert zero internal links to `/library*`.

## Dead code found (remove during migration, not library-specific)
- `components/WeeklyTabs/*`, `components/WeeklyPreview/*` — no importers.
- `pages/api/migrate.js` — entire file commented out.
- `content/generator.js` weekly bits / `scripts/*` — build/email helper scripts, not routes (keep scripts as-is unless unused).

## Dependency disposition (verify with depcheck in Phase 6)
- **Keep:** `mongodb` (search/weekly), `nodemailer` (submit), `feed` (RSS), `react-syntax-highlighter` (CodeBlock), `hamburger-react` (Nav), `html-react-parser`, `sharp` (images).
- **Remove after library removal:** nothing becomes unused *solely* from library removal except `FilterBar` deps (none unique).
- **Replace (framework):** `next`, `next-pwa`, `@next/bundle-analyzer` → Astro + adapter (+ optional `@vite-pwa/astro`).
- **Styling stack (`styled-components`, `@mui/*`, `@emotion/*`, `@mui/styled-engine-sc`):** disposition depends on the **styling decision below** — this is the largest open question.

## RESOLVED DECISIONS (Phase 0 review)
1. **Styling → Port to Tailwind.** Rewrite `ui/` primitives + all component `styled.js` as Tailwind utility classes / plain CSS. Convert static pages to native `.astro`. Interactive widgets (generators, `/search`) stay React islands but restyled with Tailwind (no styled-components/Emotion). Replace `@mui/*` inputs/icons with Tailwind-styled headless inputs + inline SVG icons. **Drop** `styled-components`, `@mui/material`, `@mui/lab`, `@mui/icons-material`, `@mui/styles`, `@mui/styled-engine-sc`, `@emotion/react`, `@emotion/styled`. Add `@astrojs/tailwind` (or Tailwind v4 Vite plugin) + `@astrojs/react`.
2. **Baseline → Snapshot production HTML** from `https://wweb.dev` for surviving routes only (exclude `/library*`). No local secrets required.
3. **Trailing slash →** `trailingSlash: 'never'` + `build.format: 'file'` (matches Next default `false`).
4. **Headers/PWA → Astro middleware, drop SW.** Reproduce CSP + all security headers from `next.config.js` in `src/middleware.ts`. Drop `next-pwa` service worker; **keep** `public/manifest.json` (installable). Drop `@next/bundle-analyzer`.
5. **APIs → Drop `/api/submit` and `/api/weekly`.** Only `/api/search` survives (SSR endpoint, Mongo) → `@astrojs/node` adapter still required. **Drop** `nodemailer`. **Keep** `mongodb` (search only).

### Net dependency plan
- **Remove (framework/PWA):** `next`, `next-pwa`, `@next/bundle-analyzer`.
- **Remove (styling):** all `@mui/*`, both `@emotion/*`, `styled-components`.
- **Remove (dropped APIs):** `nodemailer`; also stale: `fs`, `request`, `image-downloader`, `node-fetch`, `axios`, `resize-polyfill`, `react-sizeme`, `react-color`, `react-lazy-load` — **verify each with `depcheck`** in Phase 6 before removing.
- **Keep:** `mongodb` (`/api/search`), `feed` (RSS gen), `react`/`react-dom` (islands), `react-syntax-highlighter` (CodeBlock), `hamburger-react` or inline (Nav), `html-react-parser`, `sharp`, `fs-extra` (asset generation).
- **Add:** `astro`, `@astrojs/node`, `@astrojs/react`, `@astrojs/tailwind` + `tailwindcss`, `@astrojs/sitemap` (optional, or keep custom generator).
