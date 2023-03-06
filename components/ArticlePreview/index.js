import React from 'react'
import Link from 'next/link'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'
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

  return (
    <S.Container>
      { previewImage &&
        <Link href={link}><S.Link>
          <S.PreviewImage
            src={previewImage}
            alt={headline}
            width={300}
            height={170}
          />
        </S.Link></Link>
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
            <Link href={link}>
              <a>{headline}</a>
            </Link>
          </S.Headline>
        </header>
        <p>{description}</p>
        <Link href={link}><a><S.ReadMore>
          { isResource
            ? 'Open Resource '
            : isTemplate ? 'Open Template' : 'Read more ' }
          <ArrowRight width="1em" height="1em" />
        </S.ReadMore></a></Link>
      </div>
    </S.Container>
  )
}

export default ArticlePreview
