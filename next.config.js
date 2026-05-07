// next.config.js
const withPWA = require('next-pwa')({ dest: 'public' })
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://analytics.vincentwill.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://ik.imagekit.io https://wweb.dev;
  font-src 'self';
  connect-src 'self' https://analytics.vincentwill.com;
  frame-src 'none';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`

const securityHeaders = [
    {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
    },
    {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
    },
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    },
    {
        key: 'Cross-Origin-Resource-Policy',
        value: 'same-origin',
    },
    {
        key: 'Cross-Origin-Opener-Policy',
        value: 'same-origin',
    },
    {
        key: 'Cross-Origin-Embedder-Policy',
        value: 'unsafe-none',
    },
]

const settings = withBundleAnalyzer({
    poweredByHeader: false,
    compiler: {
        styledComponents: true,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders,
            },
        ]
    },
})

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
