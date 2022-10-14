import React from 'react'
import Link from 'next/link'
import resources from '../../content/resources'
import templates from '../../content/templates'
import * as S from './styled'

const articles = [
  ...resources.filter(r => r.id === 1 || r.id === 5),
  ...templates.filter(t => t.id === 1)
]

const Featured = () => {
  return <S.Container>
    { articles.map((a, i) =>
      <S.Article key={`featured-${a.headline}`} margin={i === 1}>
        <Link href={a.link}><img src={a.previewImage}/></Link>
        <Link href={a.link}><h3>{a.headline}</h3></Link>
      </S.Article>
    )}
  </S.Container>
}

export default Featured
