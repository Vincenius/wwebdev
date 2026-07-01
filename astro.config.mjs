import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
// Fully static site (no on-demand routes) — served by server.mjs, which adds the
// security headers. React islands are rendered at build time + hydrated client-side.
export default defineConfig({
    site: 'https://wweb.dev',
    // Match Next's default (no trailing slash). `format: 'directory'` emits
    // <route>/index.html so route output merges with same-named public/ asset dirs
    // (e.g. /blog route + /blog/*.png images).
    trailingSlash: 'never',
    build: {
        format: 'directory',
    },
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
})
