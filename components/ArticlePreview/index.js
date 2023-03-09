import React, { useState } from 'react'
import Link from 'next/link'
import LazyLoad from 'react-lazy-load'
import ArrowRight from '@mui/icons-material/ArrowRightAlt'
import * as S from './styled'

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
  const isTemplate = type === 'Template'
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <S.Container>
      { previewImage &&
        <Link href={link}>
          { !imageLoaded && <S.ImageSkeleton variant="rect" /> }
          <LazyLoad offsetVertical={1000} onContentVisible={() => setImageLoaded(true)}>
            <S.PreviewImage
              src={previewImage}
              alt={headline}
            />
          </LazyLoad>
        </Link>
      }
      <div>
        <header>
          { type &&
            <S.Type highlight={isResource || isTemplate}>
              <b>{type}</b> -&nbsp;
            </S.Type>
          }
          {updatedAt && <S.Updated>Updated: </S.Updated>}
          <S.Time datetime={d.toISOString()}>{lastDate}</S.Time>
          <S.Headline>
            <Link href={link}>{headline}</Link>
          </S.Headline>
        </header>
        <p>{description}</p>
        <Link href={link}><S.ReadMore>
          { isResource
            ? 'Open Resource '
            : isTemplate ? 'Open Template' : 'Read more ' }
          <ArrowRight width="1em" height="1em" />
        </S.ReadMore></Link>
      </div>
    </S.Container>
  )
}

export default ArticlePreview
