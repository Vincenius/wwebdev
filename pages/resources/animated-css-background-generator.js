import React, { useState } from 'react'
import Head from '../../components/Head'
import Nav from '../../components/Nav'
import SubscribeForm from '../../components/SubscribeForm'
import AbsoluteAd from '../../components/Ads/AbsoluteAd'
import Ad, { ids } from '../../components/Ads/Ad'
import * as ui from '../../ui'

import { Background1, Background2, Background3 } from '../../components/AnimatedCssBackgroundGenerator'
import * as S from '../../components/AnimatedCssBackgroundGenerator/styles/animatedCssBg'
import meta from '../../content/resources'

const postMeta = meta.find(m => m.id === 1)

const Demo = () => {
    const [activeBg, changeBg] = useState(0);

    return (
        <React.Fragment>
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

                <AbsoluteAd />

                { activeBg === 0 && <Background1 changeBg={changeBg} activeBg={activeBg} /> }
                { activeBg === 1 && <Background2 changeBg={changeBg} activeBg={activeBg} /> }
                { activeBg === 2 && <Background3 changeBg={changeBg} activeBg={activeBg} /> }
            </S.Container>

            <S.BottomContainer>
                <ui.SidebarContainer>
                    <ui.ArticleContainer as="article">
                    TEXT

                    <br />
                    <SubscribeForm />

                    </ui.ArticleContainer>
                    <ui.Sidebar>
                        <Ad id={ids.sidebar} />
                        <Ad id={ids.sidebarMiddle} />
                        <Ad id={ids.sidebarBottom} />
                    </ui.Sidebar>
                </ui.SidebarContainer>
            </S.BottomContainer>

        </React.Fragment>

        // animated css backgrounds, background generator css, css animated backgrounds, animate background css, css backgrounds animated
    )
}

export default Demo
