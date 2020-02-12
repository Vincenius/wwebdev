import React from 'react'
import * as S from './styled'

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
          <S.PreviewImage src={previewImage} alt={headline} />
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
        <a href={link}>
          <S.ReadMore>
            { isResource ? 'Open Resource' : 'Read more' }
          </S.ReadMore>
        </a>
      </div>
    </S.Container>
  )
}

export default ArticlePreview
