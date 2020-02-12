import React, { useState } from 'react'
import { Head } from '../../components'
import { Background1, Background2, Background3 } from '../../components/AnimatedCssBackgroundGenerator'
import * as S from '../../components/AnimatedCssBackgroundGenerator/styles/animatedCssBg'
import meta from '../../content/resources'

const postMeta = meta.find(m => m.id === 1)

const Demo = () => {
    const [activeBg, changeBg] = useState(0);
    return (
        <S.Container>
            <Head
                isArticle={true}
                title={postMeta.headline}
                date={postMeta.date}
                link={`https://wweb.dev${postMeta.link}`}
                description={postMeta.description}
                image="/resources/resources01.jpg"
                date={new Date(postMeta.date)}
            />

            <S.Navigation>
                <a
                    onClick={() => changeBg(0)}
                    className={activeBg === 0 ? 'active' : ''}
                >
                    Demo 1
                </a>
                <a
                    onClick={() => changeBg(1)}
                    className={activeBg === 1 ? 'active' : ''}
                >
                    Demo 2
                </a>
                <a
                    onClick={() => changeBg(2)}
                    className={activeBg === 2 ? 'active' : ''}
                >
                    Demo 3
                </a>
            </S.Navigation>

            { activeBg === 0 && <Background1 /> }
            { activeBg === 1 && <Background2 /> }
            { activeBg === 2 && <Background3 /> }

            <S.Footer>
                Made by <a href="/">wwev.dev</a>
            </S.Footer>
        </S.Container>
    )
}

export default Demo
