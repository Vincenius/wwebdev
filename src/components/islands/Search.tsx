// Search island — filters local content data. The query is mirrored into
// `?q=` so results are deep-linkable (and the nav search icon could link
// straight to a query).
import { useEffect, useState } from 'react'
import search from '../../lib/search'
import type { SearchResult } from '../../lib/search'
import LinkBox from '../react/LinkBox'
import { SearchIcon } from '../react/icons'

export default function Search() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<SearchResult[]>([])
    const [searched, setSearched] = useState(false)

    const run = (q: string) => {
        setResults(search(q))
        setSearched(true)
        const url = q.trim()
            ? `${window.location.pathname}?q=${encodeURIComponent(q.trim())}`
            : window.location.pathname
        window.history.replaceState(null, '', url)
    }

    // Run an incoming ?q= once after hydration (SSR markup stays query-less, so
    // this can't live in the initial state without a hydration mismatch).
    useEffect(() => {
        const q = new URLSearchParams(window.location.search).get('q')
        if (q) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setQuery(q)
            run(q)
        }
    }, [])

    return (
        <div>
            <div className="ui-container">
                <h2 className="ui-section-headline">Search</h2>
                <form
                    className="search-row"
                    role="search"
                    onSubmit={(e) => {
                        e.preventDefault()
                        run(query)
                    }}
                >
                    <label className="search-input">
                        <span className="search-input-icon">
                            <SearchIcon />
                        </span>
                        <input
                            type="search"
                            placeholder="Type here..."
                            value={query}
                            onChange={(e) => setQuery(e.currentTarget.value)}
                            aria-label="Search"
                        />
                    </label>
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>
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
