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
          <picture>
            <source media="(max-width: 320px)" srcset={`https://res.cloudinary.com/wwebdev/image/upload/q_auto,w_640,dpr_auto,c_scale,f_auto/${previewImage}`} />
            <source media="(max-width: 360px)" srcset={`https://res.cloudinary.com/wwebdev/image/upload/q_auto,w_720,dpr_auto,c_scale,f_auto/${previewImage}`} />
            <source media="(max-width: 480px)" srcset={`https://res.cloudinary.com/wwebdev/image/upload/q_auto,w_960,dpr_auto,c_scale,f_auto/${previewImage}`} />
            <source media="(max-width: 640px)" srcset={`https://res.cloudinary.com/wwebdev/image/upload/q_auto,w_400,dpr_auto,c_scale,f_auto/${previewImage}`} />
            <S.PreviewImage src={`https://res.cloudinary.com/wwebdev/image/upload/q_auto,w_800,dpr_auto,c_scale,f_auto/${previewImage}`} alt={headline} />
          </picture>
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
