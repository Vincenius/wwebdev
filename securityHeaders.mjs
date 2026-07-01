// Security headers ported verbatim from legacy-next/next.config.js.
// Single source of truth, consumed by the production server (server.mjs) and
// applied to every response (static + on-demand).

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://analytics.vincentwill.com https://utteranc.es;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://ik.imagekit.io https://wweb.dev https://www.co2neutralwebsite.com;
  font-src 'self';
  connect-src 'self' https://analytics.vincentwill.com;
  frame-src https://utteranc.es;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`

export const securityHeaders = {
    'Content-Security-Policy': ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    // `0` disables the legacy XSS auditor (deprecated, can itself be exploited);
    // CSP is the real protection here.
    'X-XSS-Protection': '0',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    'Cross-Origin-Resource-Policy': 'same-origin',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Embedder-Policy': 'unsafe-none',
}
