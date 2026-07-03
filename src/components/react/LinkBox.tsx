// React version of LinkBox for use inside client islands (e.g. Search results).
// Same markup + global .lb-* classes as src/components/LinkBox.astro.

interface Props {
    title: string
    description: string
    image?: string | undefined
    link: string
    selfPromoted?: string | undefined
    fullHeight?: boolean | undefined
    isExternal?: boolean | undefined
    sponsored?: boolean | undefined
}

const Arrow = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
    </svg>
)

export default function LinkBox({
    title,
    description,
    image,
    link,
    selfPromoted,
    fullHeight = false,
    isExternal = true,
    sponsored,
}: Props) {
    const linkAttrs = isExternal
        ? { href: link, target: '_blank', rel: 'noopener' }
        : { href: link }

    return (
        <div className="lb-container">
            {selfPromoted && (
                <div>
                    <div className="lb-promo-bg"></div>
                    <div className="lb-promo-label">{selfPromoted}</div>
                </div>
            )}
            <article className={`lb-content${fullHeight ? ' full-height' : ''}`}>
                <div>
                    {image && (
                        <a {...linkAttrs}>
                            <img src={image} alt={title} loading="lazy" />
                        </a>
                    )}
                    <div className="lb-description">
                        {sponsored && <span className="lb-sponsored">Sponsored</span>}
                        <a {...linkAttrs}>
                            <h2>{title}</h2>
                        </a>
                        <p>{description}</p>
                    </div>
                </div>

                {isExternal && (
                    <a className="lb-visit" href={link} target="_blank" rel="noopener noreferrer">
                        visit
                        <Arrow />
                    </a>
                )}
            </article>
        </div>
    )
}
