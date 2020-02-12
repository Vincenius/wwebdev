// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            ...defaultPathMap,
            '/weekly/1': { page: '/weekly/[pid]', query: { pid: '1' } },
            '/weekly/2': { page: '/weekly/[pid]', query: { pid: '2' } },
            '/weekly/3': { page: '/weekly/[pid]', query: { pid: '3' } },
            '/weekly/4': { page: '/weekly/[pid]', query: { pid: '4' } },
            '/weekly/5': { page: '/weekly/[pid]', query: { pid: '5' } },
            '/weekly/6': { page: '/weekly/[pid]', query: { pid: '6' } },
            '/weekly/7': { page: '/weekly/[pid]', query: { pid: '7' } },
            '/weekly/8': { page: '/weekly/[pid]', query: { pid: '8' } },
            '/weekly/9': { page: '/weekly/[pid]', query: { pid: '9' } },
            '/weekly/10': { page: '/weekly/[pid]', query: { pid: '10' } },
            '/weekly/11': { page: '/weekly/[pid]', query: { pid: '11' } },
            '/weekly/12': { page: '/weekly/[pid]', query: { pid: '12' } },
        }
    },
})
