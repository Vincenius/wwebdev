import React, { useState } from 'react'
import Head from '../../components/Head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import AbsoluteAd from '../../components/Ads/AbsoluteAd'
import Ad from '../../components/Ads/Ad'
import * as ui from '../../ui'

import { Background1, Background2, Background3 } from '../../components/AnimatedCssBackgroundGenerator'
import * as S from '../../components/AnimatedCssBackgroundGenerator/styles/animatedCssBg'
import meta from '../../content/posts'

const postMeta = meta.find(m => m.id === 5)

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
                    image={postMeta.shareImage}
                    date={new Date(postMeta.date)}
                />

                <Nav isArticle={true} transparentBg={true} />

                <AbsoluteAd position="bottom" />

                { activeBg === 0 && <Background1 changeBg={changeBg} activeBg={activeBg} /> }
                { activeBg === 1 && <Background2 changeBg={changeBg} activeBg={activeBg} /> }
                { activeBg === 2 && <Background3 changeBg={changeBg} activeBg={activeBg} /> }
            </S.Container>

            <S.BottomContainer>
                <ui.SidebarContainer>
                    <ui.ArticleContainer as="article">
                        <h1>Animated CSS Background</h1>

                        <p>
                            With this tool you can quickly create and customize animated CSS backgrounds for your website.
                            It includes a total of three different background generators.
                        </p>

                        <h2>Bokeh effect animation background</h2>

                        <img alt="Bokeh effect animation background screenshot" src="/resources/animated-bg-generator/bg1.jpg" />

                        <p>
                            The first animated CSS background is taken from <a href="https://codepen.io/Mamboleoo/pen/BxMQYQ" target="_blank" rel="noopener noreferrer">Louis Hoebregts Codepen</a>.
                            It consists of blurry bubbles of one or multiple colors moving in circular shapes.
                            You can adjust the speed, the size and the colors of the bubbles that move around. Afterward you can easily copy the HTML and the CSS and insert it anywhere on your website.
                            For each bubble a span is inserted into the dom. Each of them are then positioned randomly. Afterwards they are animated based on the speed variable defined by you.
                        </p>

                        <h2>Pure CSS animation background</h2>

                        <img alt="Pure CSS animation background screenshot" src="/resources/animated-bg-generator/bg2.jpg" />

                        <p>
                            The second one of the animated CSS backgrounds is inspired by <a href="https://codepen.io/mohaiman/pen/MQqMyo" target="_blank" rel="noopener noreferrer">Mohammad Abdul Mohaimans Codepen</a>.
                            This one has spinning rectangles that move up and turn into circles. Here you can adjust the count of the rectangles, the speed, the size and the color as well.
                            In this case every rectangle is added as a list item to an unordered list. They are positioned randomly on the X-Axis and move up after different delays.
                        </p>

                        <h2>Rectangle animate background CSS</h2>

                        <img alt="Rectangle animate background CSS screenshot" src="/resources/animated-bg-generator/bg3.jpg" />

                        <p>
                            The last animated background generator is by <a href="https://codepen.io/BjornRombaut/pen/mOLGgX" target="_blank" rel="noopener noreferrer">Bjorns Codepen</a>.
                            It has cubes that are spinning and growing until they fade. You can adjust the count and the size as well as the color of the cubes.
                            The cubes are positioned randomly on the screen and have different shades of the given background color. In the HTML they are also added as list items.
                        </p>

                        <br />
                    </ui.ArticleContainer>
                    <ui.Sidebar>
                        {/* TODO remove sidebar */}
                    </ui.Sidebar>
                </ui.SidebarContainer>
                <Footer />
            </S.BottomContainer>
        </React.Fragment>
    )
}

export default Demo
