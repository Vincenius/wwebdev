// Ported from legacy-next/utils/generateStaticFiles.js (RSS/Atom/JSON feed).
import { Feed } from 'feed'
import { sortedData, siteURL } from './feedData'

export function buildFeed(): Feed {
    const date = new Date()
    const author = {
        name: 'Vincent Will',
        email: 'info@wweb.dev',
        link: 'https://vincentwill.com',
    }

    const feed = new Feed({
        title: 'wweb.dev',
        description:
            'Stay up to date with weekly updates, get resources for next project and read articles and tutorials about web development.',
        id: siteURL,
        link: siteURL,
        image: `${siteURL}/logo-text.png`,
        favicon: `${siteURL}/favicon.ico`,
        copyright: `All rights reserved ${date.getFullYear()}, wweb.dev`,
        updated: date,
        generator: 'Feed for Node.js',
        feedLinks: {
            rss2: `${siteURL}/rss/feed.xml`,
            json: `${siteURL}/rss/feed.json`,
            atom: `${siteURL}/rss/atom.xml`,
        },
        author,
    })

    sortedData.forEach((post) => {
        const url = `${siteURL}${post.link}`
        feed.addItem({
            title: post.headline,
            id: url,
            link: url,
            description: post.description,
            content: post.description,
            author: [author],
            contributor: [author],
            date: new Date(post.updatedAt || post.date),
        })
    })

    return feed
}
