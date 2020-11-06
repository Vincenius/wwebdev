import React, { useState } from 'react'
import Link from 'next/link'
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

  return (
    <S.Container>
      { previewImage &&
        <Link href={link}><a>
          <ui.Screenreader>{headline}</ui.Screenreader>
            <S.PreviewImage
              src={previewImage}
              alt={headline}
              unsized
            />
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
