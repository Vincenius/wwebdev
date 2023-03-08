import React, { useState } from 'react'
import Link from 'next/link'
import LazyLoad from 'react-lazy-load'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'
import * as S from './styled'
import * as ui from '../../ui'

const ArticlePreview = ({
    date,
    number,
    description,
}) => {
    const d = new Date(date)
    const headline = `Weekly #${number}`
    const link = `/weekly/${number}`
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <S.Container>
            <header>
                <S.Headline>
                    <Link href="/weekly/[slug]" href={link}>{headline}</Link>
                </S.Headline>
                <S.Time datetime={d.toISOString()}>{date}</S.Time>
            </header>
            <Link href="/weekly/[slug]" href={link}>
                <ui.Screenreader>{headline}</ui.Screenreader>
                { !imageLoaded && <S.ImageSkeleton variant="rect" /> }
                <LazyLoad offsetVertical={1000} onContentVisible={() => setImageLoaded(true)}>
                    <S.Image
                        src={`/weekly/preview/${number}.jpg`}
                        alt={headline}
                    />
                </LazyLoad>
            </Link>
            <p>{description}</p>
            <Link href="/weekly/[slug]" as={link}><S.ReadMore>
                Open Weekly <ArrowRight width="1em" height="1em" />
            </S.ReadMore></Link>
        </S.Container>
    )
}

export default ArticlePreview
