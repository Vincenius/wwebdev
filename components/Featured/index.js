import React, { useState } from 'react'
import Link from 'next/link'
import LazyLoad from 'react-lazy-load'
import resources from '../../content/resources'
import templates from '../../content/templates'
import * as S from './styled'

const Featured = ({ articleIds = [], templateIds = [], resourceIds = [] }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const articles = [
    ...resources.filter(r => resourceIds.includes(r.id)),
    ...templates.filter(t => templateIds.includes(t.id)),
    ...articleIds.filter(a => articleIds.includes(a.id))
  ]
  return <S.Container>
    { articles.map((a, i) =>
      <S.Article key={`featured-${a.headline}`} margin={i === 1}>
        <Link href={a.link}>
          { !imageLoaded && <S.ImageSkeleton variant="rect" /> }
          <LazyLoad offsetVertical={1000} onContentVisible={() => setImageLoaded(true)}>
            <S.PreviewImage src={a.previewImage} alt={a.headline} />
          </LazyLoad>
        </Link>
        <Link href={a.link}><h3>{a.headline}</h3></Link>
      </S.Article>
    )}
  </S.Container>
}

export default Featured
