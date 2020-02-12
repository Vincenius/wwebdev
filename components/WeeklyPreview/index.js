import React from 'react'
import Link from 'next/link'
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import * as S from './styled'

const ArticlePreview = ({
    date,
    number,
    description,
}) => {
    const d = new Date(date)
    const headline = `Weekly #${number}`
    const link = `/weekly/${number}`
    const img = `/weekly/${number}.jpg`

    return (
        <S.Container>
            <header>
                <S.Headline>
                    <Link href={link}><a>{headline}</a></Link>
                </S.Headline>
                <S.Time datetime={d.toISOString()}>{date}</S.Time>
            </header>
            <Link href={link}><a>
                <S.Image src={img} alt={`number image ${number}`} />
            </a></Link>
            <p>{description}</p>
            <Link href={link}>
                <S.ReadMore>
                Open Weekly <ArrowRight width="1em" height="1em" />
                </S.ReadMore>
            </Link>
        </S.Container>
    )
}

export default ArticlePreview
