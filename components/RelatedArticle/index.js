import React from 'react'
import * as S from './styled'
import * as ui from '../../ui'

import resourcesMeta from '../../content/resources'
import articlesMeta from '../../content/articles'

const RelatedArticle = ({ id, type }) => {
    const meta = type === 'article'
        ? articlesMeta
        : resourcesMeta
    const { headline, description, link, previewImage} = meta.find(m => m.id === id)

    return (
        <ui.Container>
            <hr />
            <h3>Related Article</h3>
            <S.Container>
                <S.Image src={`https://ik.imagekit.io/wwebdev/${previewImage}`} alt={headline} />
                <S.Content>
                    <h3>
                        <a href={link}>
                            {headline}
                        </a>
                    </h3>

                    <p>{description}</p>
                </S.Content>
            </S.Container>
        </ui.Container>
    )
}

export default RelatedArticle
