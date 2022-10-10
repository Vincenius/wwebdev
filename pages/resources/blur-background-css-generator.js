import React from 'react'

import Head from '../../components/Head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import meta from '../../content/resources'
import BlurBgGenerator from '../../components/BlurBackgroundGenerator'
import * as S from '../../components/BlurBackgroundGenerator/styled.js'
import * as ui from '../../ui'

const postMeta = meta.find(m => m.id === 13)

const BlurBackgroundGenerator = () => {
    return <React.Fragment>
        <S.Container>
            <Head
                isArticle={true}
                title={postMeta.headline}
                link={`https://wweb.dev${postMeta.link}`}
                description={postMeta.description}
                image={postMeta.previewImage}
                date={new Date(postMeta.date)}
            />

            <Nav isArticle={true} />
            <BlurBgGenerator />
        </S.Container>

        <S.BottomContainer>
            <ui.SidebarContainer>
                <ui.ArticleContainer as="article">
                    <h1>Blur Background CSS Generator</h1>
                </ui.ArticleContainer>
            </ui.SidebarContainer>
            <Footer />
        </S.BottomContainer>
    </React.Fragment>
}

export default BlurBackgroundGenerator
