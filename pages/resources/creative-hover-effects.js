import React, { useState } from 'react'
import Link from 'next/link'
import Head from '../../components/Head'
import Nav from '../../components/Nav'
import CreativeHoverEffects from '../../components/CreativeHoverEffects'
import * as S from '../../components/CreativeHoverEffects/styled'
import meta from '../../content/posts'

const postMeta = meta.find(m => m.id === 13)

const Demo = () => (
    <S.Container>
        <Head
            isArticle={true}
            title={postMeta.headline}
            link={`https://wweb.dev${postMeta.link}`}
            description={postMeta.description}
            image={postMeta.shareImage}
            date={new Date(postMeta.date)}
        />

        <Nav isArticle={true} />

        <CreativeHoverEffects />
    </S.Container>
)

export default Demo
