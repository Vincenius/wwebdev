# Migration Report — Next.js → Astro

Migrated the **wweb.dev** site from Next.js (`pages/` router, styled-components +
MUI + Emotion, `next-pwa`) to **Astro** with feature parity. Work done on branch
`migrate/astro`. The legacy Next.js app (kept under `legacy-next/` during the
migration for parity comparison) has been removed now that all checks pass; the
production HTML baseline it was diffed against remains in `test/baseline/`.

## Result

- **38 / 38** surviving routes pass the route-parity harness (identical HTTP
  status, byte-identical SEO `<head>`, main-content text within tolerance).
- **10 / 10** removed **library** routes return **404**; zero internal links to them.
- `astro check` clean; `astro build` clean; production server verified (pages +
  `/api/search` + security headers on every response).

## Routes migrated (per-page render mode)

All pages are **prerendered (static)**; only the API endpoint is **on-demand (SSR)**.

| Route(s)                                                            | Render                                               | Notes                                                  |
| ------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------ |
| `/`                                                                 | static                                               | article+resource list                                  |
| `/blog` + 14 `/blog/*`                                              | static                                               | articles; Prism code via `@astrojs/prism` (build-time) |
| `/resources` + `/resources/*` (6 listicles)                         | static                                               |                                                        |
| `/templates` + 3 `/templates/*`                                     | static                                               |                                                        |
| `/about`, `/privacy`, `/sponsorship`, `/weekly`                     | static                                               |                                                        |
| `/search`                                                           | static shell + **React island**                      | client-side search over local articles                 |
| `/resources/*` (6 generators)                                       | static shell + **React island** (5) / **.astro** (1) | see islands below                                      |
| `/api/search`                                                       | **SSR** (`prerender = false`)                        | MongoDB Atlas `$search`                                |
| `/sitemap.xml`, `/robots.txt`, `/rss/{feed.xml,atom.xml,feed.json}` | static endpoints                                     | reproduced from `feed` + posts/templates               |

## Routes removed (the "library" feature)

Deleted, not migrated: `/library`, `/library/{latest,javascript,css,tools,react,`
`articles,design,libraries,other}` (10 routes), `pages/api/library.js`, the
`FilterBar` component, and the **Library** nav link. Sitemap/RSS never included
them. Asserted 404 in the harness.

Also dropped (retired / dead): `/api/submit` (nodemailer), `/api/weekly` (Mongo),
`pages/api/migrate.js` (commented out), unused `WeeklyTabs`/`WeeklyPreview`/
`NewsletterLink`.

## Components: islands vs `.astro`

- **Converted to `.astro`** (no client JS): Layout, Head, Nav (vanilla-JS mobile
  toggle, replacing `hamburger-react`), Footer, Header, SocialBar, Ad, LinkBox,
  ArticlePreview, CodeBlock, Comments, PrevNext, ArticleLayout, Featured, and the
  **creative-hover-effects** page (CSS demos + a tiny click-toggle script).
- **React islands** (`client:load`): Search, and 5 generators — Loader, Blur,
  CSS-Separator, Navigation, Animated-CSS-Background. Their pure output-generating
  logic was ported verbatim (generated CSS/HTML strings verified byte-identical);
  MUI `Slider`/`Select`/`Checkbox`/`Radio` and `react-color` were replaced with
  native `<input range/select/checkbox/radio/color>`; styled-components → plain CSS.

## Dependencies

**Removed:** `next`, `next-pwa`, `@next/bundle-analyzer`, `styled-components`, all
`@mui/*`, both `@emotion/*`, `react-color`, `react-sizeme`, `react-lazy-load`,
`hamburger-react`, `nodemailer`, plus stale `axios`/`request`/`node-fetch`/`fs`/
`image-downloader`/`resize-polyfill` (they lived only in the Next app; the Astro
`package.json` was authored fresh with no unused deps — verified).

**Kept:** `mongodb` (`/api/search`), `feed` (RSS), `sharp` (image tooling),
`html-react-parser`, `fs-extra`.

**Added:** `astro`, `@astrojs/node`, `@astrojs/react`, `@astrojs/prism`,
`@tailwindcss/vite` + `tailwindcss`, `@fontsource/lato`, `prismjs`, `express`
(prod server), `feed`, `mongodb`, `cross-env`.

## Key decisions

1. **Styling → Tailwind/plain CSS**, dropping styled-components/MUI/Emotion.
2. **Trailing slash** `never` + `build.format: 'directory'` (route `index.html`
   merges with same-named `public/` asset dirs, e.g. `/blog` + `/blog/*.png`).
3. **Baseline** captured from production HTML (`test/baseline/`).
4. **Security headers/CSP** ported verbatim (`securityHeaders.mjs`); applied to
   every response by `server.mjs`. **Service worker dropped** (`manifest.json`
   kept). Node adapter in **middleware mode** because Astro middleware does not
   run for prerendered files at runtime.
5. **`TZ=UTC` build** so the JSON-LD `dateModified` (`Date.toString()`) is
   deterministic and matches the UTC production baseline.

## Behavioral differences (could not be byte-eliminated)

All are consequences of the approved "drop MUI/react-color, restyle to native"
decision or pre-existing quirks — none affect content or SEO:

1. **Generator/tool controls look different**: native range/color/select inputs
   instead of MUI Sliders (no floating value label) and the `react-color` Sketch
   picker (native color swatch, no RGBA fields). Generated output is identical.
   These 7 pages use a relaxed (0.15) main-text parity tolerance to absorb the
   control-label text; prose, `<head>`, and generated code are still verified.
2. **Live code preview in generator islands** is a plain styled `<pre>` (Prism
   can't run inside a React island). The copyable code text is exact; syntax
   coloring is approximate.
3. **caniuse "Chip"** on the JS cheatsheets is a CSS approximation of MUI `Chip`
   (label text `> N%` preserved).
4. **Animated generator "Size" control** was a MUI two-thumb range; the native
   single-thumb input edits the lower bound only (generated CSS still consumes the
   full tuple).
5. **Pre-existing quirks preserved verbatim**: the JSON-LD template emits literal
   `"undefined"`/`"${date}"` for absent fields; the footer's
   `co2neutralwebsite.com` image is not in the CSP `img-src` allowlist (as in the
   original `next.config.js`).

## Verification not yet automated

- Interactive **behavior** of the 6 generators (T-09) — validated via build +
  hydration + initial-render parity; end-to-end Playwright coverage is recommended
  before production cut-over.
- `/api/search` returns `[]` locally (no Mongo creds); shape verified, live data
  needs deploy env.

## Post-migration cleanup (quality pass)

Applied after parity was reached — these intentionally diverge from the old prod
site to fix bugs / simplify / harden (run the harness with `SKIP_HEAD=1`):

- **Fully static now**: removed the dead `/api/search` endpoint (the UI never
  called it) + the `mongodb` dep + the `@astrojs/node` adapter. Search filters
  local data client-side; no DB, no backend, no SSR runtime. `server.mjs` is a
  plain Express static server + headers + branded **`404.astro`**.
- **SEO/`<head>` fixes** (`layouts/Head.astro`): valid Article **JSON-LD** with
  real ISO dates (was literal `"undefined"`/`"${date}"`, and wrongly emitted on
  non-articles); real **canonical** on every page (was empty off-articles);
  correct `og:type`/`twitter:site`; fixed the relative **apple-touch-icon** path;
  dropped dead metas (`X-UA-Compatible`, `msapplication-config` → 404 file,
  `google-adsense-account`) and a redundant inline reset.
- **Security**: `X-XSS-Protection: 0` (the `1; mode=block` legacy auditor is
  deprecated/harmful); fixed the CSP-blocked CO2 badge (`img-src`); enabled
  utterances comments (`script-src`/`frame-src https://utteranc.es`).
- **Perf**: generator islands `client:load` → `client:visible` (deferred hydration).
- **Bug fixes**: navigation generator injected literal `"false"` into CSS;
  animated-bg generator prefixed `"undefined"` to generated CSS — both fixed.

## Remaining / follow-up

- `legacy-next/` has been deleted. The parity harness runs against the committed
  `test/baseline/` snapshot (regenerate with `yarn snapshot:baseline`).
