import React from 'react'

import SubscribeForm from '../../components/SubscribeForm'
import Layout from '../../components/Layout'
import LinkBox from '../../components/LinkBox'
import ImageTextBlock from '../../components/ImageTextBlock'
import RelatedArticle from '../../components/RelatedArticle'
import meta from '../../content/resources'
import * as ui from '../../ui'

const postId = 4
const postMeta = meta.find(m => m.id === postId)

const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        updatedAt={postMeta.updatedAt}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image={postMeta.previewImage}
    >
        <ui.GridContainer>
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
                title="pattern.css"
                description="A cool css library for background patterns, which can be easily applied to all elements."
                link="https://bansal.io/pattern-css"
                image="/resources/creative-backgrounds/patterncss.png"
            />
            <LinkBox
                title="Trianglify"
                description="A generator for low poly triangle patterns."
                link="https://trianglify.io/"
                image="/resources/creative-backgrounds/trianglify.png"
            />
            <LinkBox
                title="Transparent Textures"
                description="A large collection of CSS patterns, which can be filtered and colorized."
                link="https://www.transparenttextures.com/"
                image="/resources/creative-backgrounds/transparent-textures.jpg"
            />
            <LinkBox
                title="SVG Pattern Generator"
                description="A tool to create unique, seamless, royalty-free SVG patterns."
                link="https://doodad.dev/pattern-generator/"
                image="/resources/creative-backgrounds/svg-pattern-generator.jpg"
            />
            <LinkBox
                title="Ambient Canvas Backgrounds"
                description="A bunch of nice backgrounds using the HTML5 Canvas API."
                link="https://tympanus.net/Development/AmbientCanvasBackgrounds/index2.html"
                image="/resources/creative-backgrounds/ambientcanvasbackgrounds.png"
            />
            <LinkBox
                title="Hero Patterns"
                description="Repeatable SVG background patterns by Steve Schoger."
                link="https://www.heropatterns.com/"
                image="/resources/creative-backgrounds/heropatterns.png"
            />
            <LinkBox
                title="css-doodle"
                description="A web component for drawing patterns with CSS."
                link="https://css-doodle.com/"
                image="/resources/creative-backgrounds/css-doodle.jpg"
            />
            <LinkBox
                title="CSS3 Patterns Gallery"
                description="A gallery of CSS patterns, which are also editable right in the browser."
                link="https://leaverou.github.io/css3patterns/"
                image="/resources/creative-backgrounds/css3-pattern-gallery.jpg"
            />
            <LinkBox
                title="particles.js"
                description="A lightweight JavaScript library for a particles background."
                link="https://vincentgarreau.com/particles.js/"
                image="/resources/creative-backgrounds/particlesjs.png"
            />
            <LinkBox
                title="Pattern Generator"
                description="A cool generator for unique, royalty-free, repeatable SVG patterns by John Bartlet."
                link="https://beautifuldingbats.com/pattern-generator/"
                image="/resources/creative-backgrounds/beautifuldingbats.png"
            />
            <LinkBox
                title="The Pattern Library"
                description="A compiled list of beautiful patterns by different designers."
                link="http://thepatternlibrary.com/"
                image="/resources/creative-backgrounds/pattern-library.jpg"
            />
            <LinkBox
                title="SVG Gradient Wave Generator"
                description="A generator for SVG wave patterns."
                link="https://www.outpan.com/app/9aaaf27303/svg-gradient-wave-generator"
                image="/resources/creative-backgrounds/svggradientwavegenerator.png"
            />
            <LinkBox
                title="Subtle Patterns"
                description="A huge list of more than 500 subtle background patterns and textures."
                link="https://www.toptal.com/designers/subtlepatterns/"
                image="/resources/creative-backgrounds/subtle-patterns.jpg"
            />
            <LinkBox
                title="THPACE!"
                description="A pretty space animation out of triangles using canvas."
                link="https://www.braedin.com/Thpace/"
                image="/resources/creative-backgrounds/thpace.jpg"
            />
            <LinkBox
                title="Background Generator"
                description="A cool generator, which also has a small list of backgrounds created with it."
                link="https://background-generator.com/"
                image="/resources/creative-backgrounds/background-generator.jpg"
            />
            <LinkBox
                title="Naker"
                description="Create interactive backgrounds on this website."
                link="https://app.naker.io/back/"
                image="/resources/creative-backgrounds/naker.png"
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
                title="GeoPattern"
                description="A generator for beautiful SVG patterns."
                link="https://btmills.github.io/geopattern/"
                image="/resources/creative-backgrounds/geopattern.jpg"
            />
            <LinkBox
                title="Decorative WebGL Backgrounds"
                description="A collection of shapes created using WebGL."
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
                title="Flat Surface Shader"
                description="A configurable lightning simulation using canvas or SVG polygons."
                link="http://matthew.wagerfield.com/flat-surface-shader/"
                image="/resources/creative-backgrounds/flatsurfaceshader.jpg"
            />
            <LinkBox
                title="Animated Background Headers"
                description="Creative website header animations using Canvas and JavaScript."
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

        </ui.GridContainer>

        <RelatedArticle id={2} type="resource" />
    </Layout>
)

export default Post
