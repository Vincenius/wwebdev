// Client-side search over local article/resource data (runs in the Search island).
import posts from '../data/posts'

export interface SearchResult {
    headline: string
    description: string
    link: string
    shareImage?: string
}

export default function search(query: string): SearchResult[] {
    const q = query.toLowerCase().trim()
    if (!q) return []
    return posts.filter(
        (p) =>
            p.headline.toLowerCase().includes(q) || p.description.toLowerCase().includes(q),
    )
}
