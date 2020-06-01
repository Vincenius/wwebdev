import React from 'react'
import Link from 'next/link'
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
                    <Link href="/weekly/[slug]" href={link}><a>{headline}</a></Link>
                </S.Headline>
                <S.Time datetime={d.toISOString()}>{date}</S.Time>
            </header>
            <Link href="/weekly/[slug]" href={link}><a>
                <ui.Screenreader>{headline}</ui.Screenreader>
                <LazyLoad offsetVertical={1000}>
                    <S.Image
                        sizes={
                            `(max-width: 320px) 320px,
                            (max-width: 380px) 380px,
                            (max-width: 960px) 480px,
                            275px`
                        }
                        srcSet={
                            `https://ik.imagekit.io/wwebdev/tr:w-275/${previewImage} 275w,
                            https://ik.imagekit.io/wwebdev/tr:w-320/${previewImage} 320w,
                            https://ik.imagekit.io/wwebdev/tr:w-380/${previewImage} 380w,
                            https://ik.imagekit.io/wwebdev/tr:w-480/${previewImage} 480w,
                            https://ik.imagekit.io/wwebdev/tr:w-550/${previewImage} 550w,
                            https://ik.imagekit.io/wwebdev/tr:w-960/${previewImage} 960w`
                        }
                        src={`https://ik.imagekit.io/wwebdev/${previewImage}`}
                        alt={headline}
                    />
                </LazyLoad>
            </a></Link>
            <p>{description}</p>
            <Link href="/weekly/[slug]" as={link}><a><S.ReadMore>
                Open Weekly <ArrowRight width="1em" height="1em" />
            </S.ReadMore></a></Link>
        </S.Container>
    )
}

export default ArticlePreview
