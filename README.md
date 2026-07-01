<h1 align="center">wweb.dev</h1>

<p align="center">
  News, resources, articles &amp; templates about web development.
</p>

<p align="center">
  <img alt="Astro" src="https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-149ECA?logo=react&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green">
</p>

---

The [wweb.dev](https://wweb.dev) website: a **fully static** Astro site with a few
interactive React islands (search + CSS generator tools). Content lives in
`src/data/`; there's no database or backend.

## Quick start

```bash
corepack enable && yarn install
yarn dev            # http://localhost:4321
```

## Build & serve

```bash
yarn build          # static build → dist/ (TZ=UTC)
yarn serve          # node server.mjs  (serves dist/ + security headers)
# or: docker compose up --build
```

> Production is `node server.mjs` (Express: static files + security headers + a
> branded 404).

## Docs

- [CLAUDE.md](CLAUDE.md) — architecture &amp; navigation cheat-sheet
- [MIGRATION_REPORT.md](MIGRATION_REPORT.md) — Next.js → Astro migration notes
