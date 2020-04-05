import React from 'react'
import LazyLoad from 'react-lazy-load'
import * as S from './styled'
import * as ui from '../../ui'

const ArticlePreview = ({
  date,
  link,
  headline,
  description,
  type,
  previewImage,
}) => {
  const d = new Date(date)
  const isResource = type === 'Resource'

  return (
    <S.Container>
      { previewImage &&
        <a href={link}>
          <ui.Screenreader>{headline}</ui.Screenreader>
          <LazyLoad offsetVertical={1000}>
            <picture>
              <source srcSet={`https://ik.imagekit.io/wwebdev/tr:w-760/${previewImage}`} media="(max-width: 380px)" />
              <source srcSet={`https://ik.imagekit.io/wwebdev/tr:w-960/${previewImage}`} media="(max-width: 480px)" />
              <source srcSet={`https://ik.imagekit.io/wwebdev/tr:w-200/${previewImage}`} media="(max-width: 639px)" />
              <S.PreviewImage src={`https://ik.imagekit.io/wwebdev/tr:w-400/${previewImage}`} alt={headline} />
            </picture>
          </LazyLoad>
        </a>
      }
      <div>
        <header>
          { type &&
            <S.Type highlight={isResource}>
              <b>{type}</b> -&nbsp;
            </S.Type>
          }
          <S.Time datetime={d.toISOString()}>{date}</S.Time>
          <S.Headline>
            <a href={link}>{headline}</a>
          </S.Headline>
        </header>
        <p>{description}</p>
        <S.ReadMore href={link}>
          { isResource ? 'Open Resource' : 'Read more' }
        </S.ReadMore>
      </div>
    </S.Container>
  )
}

export default ArticlePreview
