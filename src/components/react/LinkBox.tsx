// The one LinkBox implementation: rendered statically from .astro pages (no
// client JS) and hydrated inside the Search island. Styles: src/styles/linkbox.css.
import { ArrowIcon } from './icons'

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
                        <ArrowIcon size={32} />
                    </a>
                )}
            </article>
        </div>
    )
}
