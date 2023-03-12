import React from 'react'

import Head from '../../components/Head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SponsorNinjaWidget from '../../components/SponsorNinja'
import meta from '../../content/resources'
import BlurBgGenerator from '../../components/BlurBackgroundGenerator'
import Featured from '../../components/Featured'
import NewsletterLink from '../../components/NewsletterLink'
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
                image={postMeta.shareImage}
                date={new Date(postMeta.date)}
            />

            <Nav isArticle={true} />
            <BlurBgGenerator />
        </S.Container>

        <S.BottomContainer>
            <ui.Container>
                <ui.SidebarContainer>
                    <ui.SidebarArticle as="article">
                        <ui.SectionHeadline>Blur Background CSS Generator</ui.SectionHeadline>

                        <p>
                            This is a tool to generate the CSS for a customizable blur background.
                            Afterward, you can easily copy the code and use it on your website.
                        </p>
                        <p>
                            You can customize the gradient background color as well as the gradient color of the circles.
                            You can set the position and the size of the circles as well.
                        </p>
                        <p>
                            As everything on wweb.dev this tool is under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT license</a>.
                            This means that you can use the generated backgrounds for commercial or private projects without attribution.
                        </p>
                        <p>
                            If you like the generated blur backgrounds or use them anywhere in your project, I'd be happy if you'd let me know.
                            Also, feedback for this generator is always welcome. Just pass me a message on <a href="https://twitter.com/wweb_dev" target="_blank" rel="noopener noreferrer">Twitter</a> or via email: <a href="mailto:info@wweb.dev">info@wweb.dev</a>.
                        </p>
                        <ui.Subheadline as="h2">You might also like</ui.Subheadline>
                        <Featured resourceIds={[1, 5, 4]} />
                    </ui.SidebarArticle>
                    <ui.Sidebar>
                        <ui.MobileHide>
                            <br/><NewsletterLink />
                            <SponsorNinjaWidget />
                        </ui.MobileHide>
                    </ui.Sidebar>
                </ui.SidebarContainer>
            </ui.Container>
            <Footer />
        </S.BottomContainer>
    </React.Fragment>
}

export default BlurBackgroundGenerator
