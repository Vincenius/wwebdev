import React from 'react'
import { SubscribeForm, Layout, LinkBox, ImageTextBlock, RelatedArticle } from '../../components'
import meta from '../../content/resources'
import * as S from '../../styles/weekly'
import * as ui from '../../ui'

const postId = 4
const postMeta = meta.find(m => m.id === postId)

const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image={postMeta.previewImage}
    >
        <S.Container>
            <LinkBox
                title="SVG Backgrounds"
                description="A list of easy customizable SVG backgrounds."
                link="https://www.svgbackgrounds.com/"
                image="/resources/creative-backgrounds/svgbackgrounds.png"
            />
            <LinkBox
                title="Gradient Magic"
                description="A huge collection of SVG pattern backgrounds by Steve Schoger."
                link="https://www.gradientmagic.com/"
                image="/resources/creative-backgrounds/gradientmagic.png"
            />
            <LinkBox
                title="Trianglify"
                description="A generator for low poly triangle patterns."
                link="https://trianglify.io/"
                image="/resources/creative-backgrounds/trianglify.png"
            />
            <LinkBox
                title="Ambient Canvas Backgrounds"
                description="A bunch of nice backgrounds using the HTML5 Canvas API."
                link="https://tympanus.net/Development/AmbientCanvasBackgrounds/index2.html"
                image="/resources/creative-backgrounds/ambientcanvasbackgrounds.png"
            />
            <LinkBox
                title="particles.js"
                description="A lightweight JavaScript library for a particles background."
                link="https://vincentgarreau.com/particles.js/"
                image="/resources/creative-backgrounds/particlesjs.png"
            />
            <LinkBox
                title="SVG Gradient Wave Generator"
                description="A generator for SVG wave patterns."
                link="https://www.outpan.com/app/9aaaf27303/svg-gradient-wave-generator"
                image="/resources/creative-backgrounds/svggradientwavegenerator.png"
            />
            <LinkBox
                title="Vanta.js"
                description="Animated WebGL backgrounds with the possibility to customize."
                link="https://www.vantajs.com/"
                image="/resources/creative-backgrounds/vantajs.png"
            />
            <LinkBox
                title="Gradient Backgrounds"
                description="A website, which combines the most popular gradient collections."
                link="https://cssgradient.io/gradient-backgrounds/"
                image="/resources/creative-backgrounds/cssgradient.png"
            />
            <LinkBox
                title="Decorative WebGL Backgrounds"
                description="A collection of shapes created using WebGL"
                link="https://tympanus.net/Development/DecorativeBackgrounds/index.html"
                image="/resources/creative-backgrounds/webglbackgrounds.png"
            />
            <LinkBox
                title="CSS Waves"
                description="A smoothly animated wave with pure CSS."
                link="https://csspoints.com/css-wave-effect-responsive-design/"
                image="/resources/creative-backgrounds/gradientwave-csspoints.png"
            />
            <LinkBox
                title="CSS Gradient Animator"
                description="A site to create beautiful animated gradients for use on your website."
                link="https://www.gradient-animator.com/"
                image="/resources/creative-backgrounds/gradientanimator.png"
            />
            <LinkBox
                title="Animated Background Headers"
                description="Creative website header animations using Canvas and JavaScript-"
                link="https://tympanus.net/Development/AnimatedHeaderBackgrounds/index3.html"
                image="/resources/creative-backgrounds/animatedbackgroundheaders.png"
            />
            <LinkBox
                title="Animated CSS Background Generator"
                description="A collection of pure css animated backgrounds with the possibility to customize."
                link="/resources/animated-css-background-generator"
                image="/resources/resources01-small.jpg"
                selfPromoted="from wweb.dev"
            />

            <SubscribeForm />

        </S.Container>

        <RelatedArticle id={2} type="resource" />
    </Layout>
)

export default Post
