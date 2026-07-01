// Shared data for the RSS / sitemap generators. Ported from
// legacy-next/utils/generateStaticFiles.js — same source (posts + templates),
// same sort (date desc), same fields.
import posts from '../data/posts'
import templates from '../data/templates'
import type { Post } from '../data/posts'

export const siteURL = 'https://wweb.dev'

export const sortedData: Post[] = templates
    .concat(posts)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const formatDate = (date: Date): string => {
    const d = new Date(date)
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    const year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
}
