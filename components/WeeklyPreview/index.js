import React from 'react'
import LazyLoad from 'react-lazy-load'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'
import * as S from './styled'

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
                    <S.Image>
                        <source media="(max-width: 320px)" srcset={`https://res.cloudinary.com/wwebdev/image/upload/q_auto,w_640,dpr_auto,c_scale,f_auto/${previewImage}`} />
                        <source media="(max-width: 380px)" srcset={`https://res.cloudinary.com/wwebdev/image/upload/q_auto,w_760,dpr_auto,c_scale,f_auto/${previewImage}`} />
                        <LazyLoad height={200} offsetVertical={500}>
                            <img src={`https://res.cloudinary.com/wwebdev/image/upload/q_auto,w_auto,dpr_auto,c_scale,f_auto/${previewImage}`} alt={headline} />
                        </LazyLoad>
                    </S.Image>
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
