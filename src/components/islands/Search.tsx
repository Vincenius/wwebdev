// Search island — filters local article/resource data as you search.
import { useState } from 'react'
import search from '../../lib/search'
import type { SearchResult } from '../../lib/search'
import LinkBox from './LinkBox'

const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
)

export default function Search() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<SearchResult[]>([])
    const [searched, setSearched] = useState(false)

    const run = () => {
        setResults(search(query))
        setSearched(true)
    }

    return (
        <div>
            <div className="ui-container">
                <h2 className="ui-section-headline">Search</h2>
                <div className="search-row">
                    <label className="search-input">
                        <span className="search-input-icon"><SearchIcon /></span>
                        <input
                            placeholder="Type here..."
                            value={query}
                            onChange={(e) => setQuery(e.currentTarget.value)}
                            onKeyDown={(e) => e.key === 'Enter' && run()}
                            aria-label="Search"
                        />
                    </label>
                    <button type="button" className="search-button" onClick={run}>Search</button>
                </div>
            </div>

            <div className="ui-grid">
                {results.map((r) => (
                    <LinkBox
                        key={r.link}
                        title={r.headline}
                        description={r.description}
                        link={r.link}
                        image={r.shareImage}
                        isExternal={false}
                    />
                ))}
                {searched && results.length === 0 && <p>Couldn't find anything...</p>}
            </div>
        </div>
    )
}
