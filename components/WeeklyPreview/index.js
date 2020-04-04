import React from 'react'
import LazyLoad from 'react-lazy-load'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'
import * as S from './styled'
import * as ui from '../../ui'

const ArticlePreview = ({
    date,
    number,
    description,
    previewImage,
}) => {
    const d = new Date(date)
    const headline = `Weekly #${number}`
    const link = `/weekly/${number}`

    return (
        <S.Container>
            <header>
                <S.Headline>
                    <a href={link}>{headline}</a>
                </S.Headline>
                <S.Time datetime={d.toISOString()}>{date}</S.Time>
            </header>
            <a href={link}>
                <ui.Screenreader>{headline}</ui.Screenreader>
                <LazyLoad offsetVertical={1000}>
                    <S.Image src={`https://res.cloudinary.com/wwebdev/image/upload/${previewImage}`} alt={headline} />
                </LazyLoad>
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
