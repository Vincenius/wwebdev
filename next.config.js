// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            ...defaultPathMap,
            '/weekly/1': { page: '/weekly/weekly', query: { pid: '1' } },
            '/weekly/2': { page: '/weekly/[pid]', query: { pid: '2' } },
            '/weekly/3': { page: '/weekly/[pid]', query: { pid: '3' } },
        }
    },
})
