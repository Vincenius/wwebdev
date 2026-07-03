// Client-side search over all local content (runs in the Search island).
import { allItems } from './content'

export interface SearchResult {
    headline: string
    description: string
    link: string
    shareImage?: string
}

export default function search(query: string): SearchResult[] {
    const q = query.toLowerCase().trim()
    if (!q) return []
    return allItems.filter(
        (p) => p.headline.toLowerCase().includes(q) || p.description.toLowerCase().includes(q),
    )
}
