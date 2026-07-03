// Single access point for the hardcoded content registry (src/data).
// Pages look their metadata up by their own URL — no numeric-id join.
import posts from '../data/posts'
import templates from '../data/templates'
import type { Post } from '../data/posts'

/** Every content item (articles, resources, templates), newest first. */
export const allItems: Post[] = [...posts, ...templates].sort((a, b) =>
    b.date.localeCompare(a.date),
)

/** Metadata for the page at `pathname`. Throws at build time when the page
 *  has no entry in src/data — a loud failure instead of a broken page. */
export function findByLink(pathname: string): Post {
    const link = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/'
    const item = allItems.find((p) => p.link === link)
    if (!item) throw new Error(`No src/data entry found for page "${link}"`)
    return item
}
