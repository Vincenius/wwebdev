// next.config.js
const withCSS = require('@zeit/next-css')
const { weeklyData } = require('./content/weekly')

const weeklyPages = {}
for (const w of weeklyData) {
    weeklyPages[`/weekly/${w.id}`] = { page: '/weekly/[pid]', query: { pid: `${w.id}` } }
}

module.exports = withCSS({
    exportPathMap: async function(
        defaultPathMap,
    ) {
        return {
            ...defaultPathMap,
            ...weeklyPages,
        }
    },
})
