import React, { useState } from 'react'
import Link from 'next/link'
import LazyLoad from 'react-lazy-load'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'
import * as S from './styled'
import * as ui from '../../ui'

const ArticlePreview = ({
  date,
  link,
  headline,
  description,
  type,
  previewImage,
  updatedAt,
}) => {
  const lastDate = updatedAt || date
  const d = new Date(lastDate)
  const isResource = type === 'Resource'
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <S.Container>
      { previewImage &&
        <Link href={link}><a>
          <ui.Screenreader>{headline}</ui.Screenreader>
          { !imageLoaded && <S.ImageSkeleton variant="rect" /> }
          <LazyLoad offsetVertical={1000} onContentVisible={() => setImageLoaded(true)}>
            <S.PreviewImage
              sizes={
                `(max-width: 320px) 320px,
                (max-width: 380px) 380px,
                (max-width: 480px) 480px,
                (max-width: 640px) 640px,
                200px`
              }
              srcSet={
                `https://ik.imagekit.io/wwebdev/tr:w-200/${previewImage} 200w,
                  https://ik.imagekit.io/wwebdev/tr:w-320/${previewImage} 320w,
                  https://ik.imagekit.io/wwebdev/tr:w-380/${previewImage} 380w,
                  https://ik.imagekit.io/wwebdev/tr:w-400/${previewImage} 400w,
                  https://ik.imagekit.io/wwebdev/tr:w-480/${previewImage} 480w,
                  https://ik.imagekit.io/wwebdev/tr:w-640/${previewImage} 640w,
                  https://ik.imagekit.io/wwebdev/tr:w-760/${previewImage} 760w,
                  https://ik.imagekit.io/wwebdev/tr:w-960/${previewImage} 960w,
                  https://ik.imagekit.io/wwebdev/tr:w-1280/${previewImage} 1280w
                `
              }
              src={`https://ik.imagekit.io/wwebdev/${previewImage}`}
              alt={headline}
            />
          </LazyLoad>
        </a></Link>
      }
      <div>
        <header>
          { type &&
            <S.Type highlight={isResource}>
              <b>{type}</b> -&nbsp;
            </S.Type>
          }
          {updatedAt && <S.Updated>Updated: </S.Updated>}
          <S.Time datetime={d.toISOString()}>{lastDate}</S.Time>
          <S.Headline>
            <Link href={link}>
              <a>{headline}</a>
            </Link>
          </S.Headline>
        </header>
        <p>{description}</p>
        <Link href={link}><a><S.ReadMore>
          { isResource ? 'Open Resource ' : 'Read more ' }
          <ArrowRight width="1em" height="1em" />
        </S.ReadMore></a></Link>
      </div>
    </S.Container>
  )
}

export default ArticlePreview
