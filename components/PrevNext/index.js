import React from 'react'
import Link from 'next/link'
import ArrowRight from '@mui/icons-material/ArrowRightAlt'

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
                : <Link
                    href={isArticle ? prevMeta.link : '/weekly/[slug]'}
                    as={!isArticle ? `/weekly/${prevMeta.id}` : undefined}
                >
                    <S.Link>
                        <S.Prev>
                            <ArrowRight width="1em" height="1em" />
                            Previous {linkName}
                        </S.Prev>
                        { isArticle && <span>{prevMeta.headline}</span> }
                    </S.Link>
                </Link>
            }
            { nextMeta &&
                <Link
                    href={isArticle ? nextMeta.link : `/weekly/[slug]`}
                    as={!isArticle ? `/weekly/${nextMeta.id}` : undefined}
                >
                    <S.Link right={true}>
                        <S.Next>
                            Next {linkName}
                            <ArrowRight width="1em" height="1em" />
                        </S.Next>
                        { isArticle && <span>{nextMeta.headline}</span> }
                    </S.Link>
                </Link>
            }
        </S.Container>
    )
}

export default PrevNext
