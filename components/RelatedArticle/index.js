import React from 'react'
import * as S from './styled'
import * as ui from '../../ui'

import resourcesMeta from '../../content/resources'
import articlesMeta from '../../content/articles'

const RelatedArticle = ({ id, type, hideHeadline = false, small = false }) => {
    const meta = type === 'article'
        ? articlesMeta
        : resourcesMeta
    const { headline, description, link, previewImage} = meta.find(m => m.id === id)

    return (
        <ui.Container>
            { !hideHeadline && <hr /> }
            { !hideHeadline && <h3>Related Article</h3> }
            <S.Container isSmall={small}>
                <S.Image src={previewImage} alt={headline} small={small} />
                <S.Content small={small}>
                    <h3>
                        <a href={link}>
                            {headline}
                        </a>
                    </h3>

                    <p>{description}</p>
                    <a href={link}>Visit!</a>
                </S.Content>
            </S.Container>
        </ui.Container>
    )
}

export default RelatedArticle
