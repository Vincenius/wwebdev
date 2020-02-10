import React from 'react'
import Link from 'next/link'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'

import { weeklyData } from '../../content/weekly'
import articleData from '../../content/articles'
import * as S from './styled'

const PrevNext = ({ postId, isArticle }) => {
    const pid = parseInt(postId)
    const data = isArticle ? articleData : weeklyData
    const prevMeta = pid > 1 && data.find(m => parseInt(m.id) === pid - 1)
    const nextMeta = pid < data.length && data.find(m => parseInt(m.id) === pid + 1)
    const linkName = isArticle ? 'Article' : 'Weekly'

    return (
        <S.Container>
            { !prevMeta ? <span></span>
                : <S.Link href={isArticle ? prevMeta.link : `/weekly/${prevMeta.id}`}>
                    <S.Prev>
                        <ArrowRight width="1em" height="1em" />
                        Previous {linkName}
                    </S.Prev>
                    { isArticle && <span>{prevMeta.headline}</span> }
                </S.Link>
            }
            { nextMeta &&
                <S.Link href={isArticle ? nextMeta.link : `/weekly/${nextMeta.id}`} right={true}>
                    <S.Next>
                        Next {linkName}
                        <ArrowRight width="1em" height="1em" />
                    </S.Next>
                    { isArticle && <span>{nextMeta.headline}</span> }
                </S.Link>
            }
        </S.Container>
    )
}

export default PrevNext
