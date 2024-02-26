import React from 'react'
import Link from 'next/link'
import ArrowRight from '@mui/icons-material/ArrowRightAlt'

import articleData from '../../content/posts'
import * as S from './styled'

const PrevNext = ({ postId }) => {
    const pid = parseInt(postId)
    const data = articleData
    const prevMeta = pid > 1 && data.find(m => parseInt(m.id) === pid - 1)
    const nextMeta = pid < data.length && data.find(m => parseInt(m.id) === pid + 1)

    return (
        <S.Container>
            { !prevMeta ? <span></span>
                : <Link
                    href={prevMeta.link}
                >
                    <S.Link>
                        <S.Prev>
                            <ArrowRight width="1em" height="1em" />
                            Previous Article
                        </S.Prev>
                        <span>{prevMeta.headline}</span>
                    </S.Link>
                </Link>
            }
            { nextMeta &&
                <Link
                    href={nextMeta.link}
                >
                    <S.Link right={true}>
                        <S.Next>
                            Next Article
                            <ArrowRight width="1em" height="1em" />
                        </S.Next>
                        <span>{nextMeta.headline}</span>
                    </S.Link>
                </Link>
            }
        </S.Container>
    )
}

export default PrevNext
