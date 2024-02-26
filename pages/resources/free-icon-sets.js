import React from 'react'

import Layout from '../../components/Layout'
import LinkBox from '../../components/LinkBox'
import NewsletterLink from '../../components/NewsletterLink'
import Featured from '../../components/Featured'
import Ad from '../../components/Ads/Ad'
import meta from '../../content/posts'
import * as ui from '../../ui'

const postId = 21
const postMeta = meta.find(m => m.id === postId)

const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        updatedAt={postMeta.updatedAt}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image={postMeta.shareImage}
    >
        <ui.GridContainer>
            <LinkBox
                title="Hola SVG"
                description="A set of SVG icons, where you can customize the stroke width, the colors, and more."
                link="https://holasvg.com/icons/"
                image="/resources/free-icon-sets/holasvg.jpg"
            />

            <LinkBox
                title="IconPark"
                description="More than 1,200 icons, which come in four different themes."
                link="https://github.com/bytedance/IconPark"
                image="/resources/free-icon-sets/iconpark.jpg"
            />
            <div>
                <Ad />
            </div>

            <LinkBox
                title="Tabler Icons"
                description="895 Fully customizable free SVG icons."
                link="https://tablericons.com/"
                image="/resources/free-icon-sets/tablericons.jpg"
            />

            <LinkBox
                title="Mono Icons"
                description="A simple, consistent open-source icon set."
                link="https://icons.mono.company/"
                image="/resources/free-icon-sets/monoicons.jpg"
            />

            <LinkBox
                title="Hero Icons"
                description="Hand-crafted SVG icons, by the makers of Tailwind CSS."
                link="https://heroicons.com/"
                image="/resources/free-icon-sets/heroicons.jpg"
            />

            <LinkBox
                title="Teenyicons"
                description="An elegant icon set by Anja van Staden with more than a thousand icons."
                link="https://teenyicons.com/"
                image="/resources/free-icon-sets/teenyicons.jpg"
            />
            <LinkBox
                title="CSS.gg"
                description="700 Open-source CSS, SVG, and Figma UI Icons."
                link="https://css.gg/"
                image="/resources/free-icon-sets/cssgg.jpg"
            />

            <LinkBox
                title="CoreUI Icons"
                description="Free icon set with marks in SVG, Webfont, and raster formats."
                link="https://icons.coreui.io/icons/"
                image="/resources/free-icon-sets/coreuiicons.jpg"
            />

            <LinkBox
                title="Bootstrap Icons"
                description="An icon library by bootstrap."
                link="https://icons.getbootstrap.com/"
                image="/resources/free-icon-sets/bootstrapicons.jpg"
            />

            <LinkBox
                title="Material Icons"
                description="1,100+ Material icons for the usage in React projects."
                link="https://material-ui.com/components/material-icons/"
                image="/resources/free-icon-sets/materialicons.jpg"
            />

            <LinkBox
                title="Font Awesome Icons"
                description="An easy to use icon set with more than 1600 icons."
                link="https://fontawesome.com/icons?d=gallery&m=free"
                image="/resources/free-icon-sets/fontawesome.jpg"
            />

            <LinkBox
                title="Eva Icons"
                description="A pack of more than 480 Open Source icons for common actions and items."
                link="https://akveo.github.io/eva-icons/#/"
                image="/resources/free-icon-sets/evaicons.jpg"
            />

            <LinkBox
                title="Remix Icons"
                description="A set of open-source neutral-style system symbols elaborately crafted for designers and developers."
                link="https://remixicon.com"
                image="/resources/free-icon-sets/remixicon.jpg"
            />

            <LinkBox
                title="Octicons"
                description="The official icon set of GitHub."
                link="https://primer.style/octicons/"
                image="/resources/free-icon-sets/octicons.jpg"
            />

            <LinkBox
                title="Ikonate"
                description="An adaptable set of optimized, customizable, accessible SVG icons Ready to use as images, inline SVGs, or SVG sprites."
                link="https://ikonate.com/"
                image="/resources/free-icon-sets/ikonate.jpg"
            />

            <LinkBox
                title="Feather"
                description="A collection of open source icons, with an emphasis on simplicity, consistency, and readability."
                link="https://feathericons.com/"
                image="/resources/free-icon-sets/feather.jpg"
            />

            <LinkBox
                title="Ionicons"
                description="Icons for the use in web, iOS, Android, and desktop apps with support for SVG and web font."
                link="https://ionicons.com/"
                image="/resources/free-icon-sets/ionicons.jpg"
            />

            <LinkBox
                title="Radix Icons"
                description="A set of 15×15 icons designed by the Modulz team."
                link="https://icons.modulz.app/"
                image="/resources/free-icon-sets/radixicons.jpg"
            />

            <LinkBox
                title="UXWing"
                description="A lot of icons that are free for any personal and commercial use and available as .svg and .png."
                link="https://uxwing.com/"
                image="/resources/free-icon-sets/uxwing.png"
            />

            <LinkBox
                title="Noun Project"
                description="A website to search for over 3 million icons, which can be used for free with attribution."
                link="https://thenounproject.com/"
                image="/resources/free-icon-sets/nounproject.png"
            />

            <LinkBox
                title="Icons8"
                description="A collection of 147,500 free icons in various styles."
                link="https://icons8.com/icons"
                image="/resources/free-icon-sets/icons8.png"
            />
        </ui.GridContainer>

        <ui.Container>
            <ui.Subheadline as="h2">You might also like</ui.Subheadline>
            <Featured postIds={[6, 7, 24]} />
        </ui.Container>
    </Layout>
)

export default Post
