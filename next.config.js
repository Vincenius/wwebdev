// next.config.js
const withPWA = require('next-pwa')({ dest: 'public' })
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const settings = withBundleAnalyzer({
    trailingSlash: true,
    compiler: {
        styledComponents: true,
    },
})

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
