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
                    <picture>
                        <source srcset={`https://ik.imagekit.io/wwebdev/tr:w-760/${previewImage}`} media="(max-width: 380px)" />
                        <source srcset={`https://ik.imagekit.io/wwebdev/tr:w-960/${previewImage}`} media="(max-width: 959px)" />
                        <S.Image src={`https://ik.imagekit.io/wwebdev/tr:w-800/${previewImage}`} alt={headline} />
                    </picture>
                </LazyLoad>
            </a>
            <p>{description}</p>
            <S.ReadMore href={link}>
                Open Weekly <ArrowRight width="1em" height="1em" />
            </S.ReadMore>
        </S.Container>
    )
}

export default ArticlePreview
