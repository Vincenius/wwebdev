import React from 'react'
import Link from 'next/link'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'

import weeklyData from '../../content/weekly'
import articleData from '../../content/articles'
import * as S from './styled'

const PrevNext = ({ postId, isArticle }) => {
    const data = isArticle ? articleData : weeklyData
    const prevMeta = postId > 1 && data.find(m => m.id === postId - 1)
    const nextMeta = postId < data.length && data.find(m => m.id === postId + 1)
    const linkName = isArticle ? 'Article' : 'Weekly'

    return (
        <S.Container>
            { !prevMeta ? <span></span>
                : <S.Link href={prevMeta.link}>
                    <S.Prev>
                        <ArrowRight />
                        Previous {linkName}
                    </S.Prev>
                    { isArticle && <span>{prevMeta.headline}</span> }
                </S.Link>
            }
            { nextMeta &&
                <S.Link href={nextMeta.link} right={true}>
                    <S.Next>
                        Next {linkName}
                        <ArrowRight />
                    </S.Next>
                    { isArticle && <span>{nextMeta.headline}</span> }
                </S.Link>
            }
        </S.Container>
    )
}

export default PrevNext
