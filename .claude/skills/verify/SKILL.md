---
name: verify
description: Build, serve and drive wweb.dev pages in a real browser to verify changes at the rendered surface.
---

# Verify a change on wweb.dev

Fully static Astro site with React islands — verification means loading the
built page in a browser and interacting with the hydrated islands.

## Build + serve

```bash
yarn install          # if server deps are missing (server.mjs needs compression/express)
yarn build            # static build → dist/ (TZ=UTC baked in)
yarn serve            # prod server on http://localhost:4321 (NOT astro preview)
```

`node server.mjs` directly fails under Yarn PnP-adjacent setups — always go
through `yarn serve`. Run it in the background; probe with
`curl -s -o /dev/null -w "%{http_code}" http://localhost:4321/<route>`.

## Drive the page

No Playwright in the repo. Install `playwright-core` in a scratch dir and use
the system Chrome (`chromium.launch({ channel: 'chrome', headless: true })`) —
no browser download needed. Islands are `client:visible`, so wait for an
island-rendered selector before asserting, and give animations ~1s.

Useful checks for the generator tools:
- computed styles of injected `<style>` output (animation-name, position, size)
- textarea `.inputValue()` for the copyable HTML/CSS code
- screenshots at 1440px and ~480px (several tool sidebars flip to
  `column-reverse` on mobile)

## Gotchas

- The console should be error-free. Vite asset inlining is disabled
  (`assetsInlineLimit: 0` in astro.config.mjs) because data-URI fonts violate
  CSP `font-src 'self'` — if data-URI CSP errors reappear, that setting was lost.
- `yarn test:parity` needs `test/baseline/` (prod HTML snapshots) which is not
  checked in; without it the harness ENOENTs. Not a substitute for browser
  verification anyway.
