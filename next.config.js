// next.config.js
const withCSS = require('@zeit/next-css')
const { weeklyData } = require('./content/weekly')

const weeklyPages = {}
const ignorePages = ['/weekly/[pid]']
for (const w of weeklyData) {
    weeklyPages[`/weekly/${w.id}`] = { page: '/weekly/[pid]', query: { pid: `${w.id}` } }
}

module.exports = withCSS({
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
})
