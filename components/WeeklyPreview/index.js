import React from 'react'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'
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
                    <a href={link}>{headline}</a>
                </S.Headline>
                <S.Time datetime={d.toISOString()}>{date}</S.Time>
            </header>
            <a href={link}>
                <S.Image src={img} alt={`number image ${number}`} />
            </a>
            <p>{description}</p>
            <a href={link}>
                <S.ReadMore>
                Open Weekly <ArrowRight width="1em" height="1em" />
                </S.ReadMore>
            </a>
        </S.Container>
    )
}

export default ArticlePreview
