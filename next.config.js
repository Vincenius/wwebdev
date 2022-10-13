// next.config.js
const withPWA = require('next-pwa')({ dest: 'public' })
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const { weeklyData } = require('./content/weekly')

const weeklyPages = {}
const ignorePages = ['/weekly/[pid]']
for (const w of weeklyData) {
    weeklyPages[`/weekly/${w.id}`] = { page: '/weekly/[pid]', query: { pid: `${w.id}` } }
}

const settings = withBundleAnalyzer({
    trailingSlash: true,
    exportPathMap: async function(
        defaultPathMap,
    ) {
        const pages = {
            ...defaultPathMap,
            ...weeklyPages,
        }

        for (const p of ignorePages) {
            delete pages[p]
        }

        return pages
    },
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        })
        config.plugins.push()
        return config
    },
})

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
