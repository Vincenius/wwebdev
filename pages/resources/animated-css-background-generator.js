import React, { useState } from 'react'
import Link from 'next/link'
import { Head, Nav } from '../../components'
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
                link={`https://wweb.dev${postMeta.link}`}
                description={postMeta.description}
                image={postMeta.previewImage}
                date={new Date(postMeta.date)}
            />

            <Nav isArticle={true} transparentBg={true} />

            { activeBg === 0 && <Background1 changeBg={changeBg} activeBg={activeBg} /> }
            { activeBg === 1 && <Background2 changeBg={changeBg} activeBg={activeBg} /> }
            { activeBg === 2 && <Background3 changeBg={changeBg} activeBg={activeBg} /> }
        </S.Container>
    )
}

export default Demo
