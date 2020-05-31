import React from 'react'

import SubscribeForm from '../../components/SubscribeForm'
import Layout from '../../components/Layout'
import LinkBox from '../../components/LinkBox'
import ImageTextBlock from '../../components/ImageTextBlock'
import RelatedArticle from '../../components/RelatedArticle'
import meta from '../../content/resources'
import * as ui from '../../ui'

const postId = 6
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
                title="Dribbble Colors"
                description="Explore designs on Dribbble by color. This is really useful if you're looking for matching color inspiration."
                link="https://dribbble.com/colors"
                image="/resources/inspiration-websites/dribbble.jpg"
            />

            <LinkBox
                title="Pages"
                description="A collaborative list of various pages around the web, which is moslty focused on SaaS pages."
                link="https://www.pages.xyz/"
                image="/resources/inspiration-websites/pages.jpg"
            />

            <LinkBox
                title="Land-book"
                description="A design gallery with carefully collected websites. It is sortable by landings, portfolios, blogs, stores, and others."
                link="https://land-book.com/"
                image="/resources/inspiration-websites/land-book.jpg"
            />

            <LinkBox
                title="Landingfolio"
                description="A website, which has landing page design inspiration, templates, resources and more. It can be filtered by category, color, and device."
                link="https://www.landingfolio.com/"
                image="/resources/inspiration-websites/landingfolio.jpg"
            />

            <LinkBox
                title="Interfaces"
                description="Brand-focused collection of UI design examples. Sorted by categories like 404 pages, pricing pages, form pages and more."
                link="https://interfaces.convertux.com/"
                image="/resources/inspiration-websites/interfaces.jpg"
            />

            <LinkBox
                title="Muzli Search"
                description="A search engine for design inspiration. The search works with colors, keywords or style."
                link="https://search.muz.li/"
                image="/resources/inspiration-websites/muzli.jpg"
            />

            <LinkBox
                title="Awwwards"
                description="Website Awards that for the best developers, designers and web agencies in the world."
                link="https://www.awwwards.com/"
                image="/resources/inspiration-websites/awwwards.jpg"
            />

            <LinkBox
                title="Creative Portfolios"
                description="A small curation of creative portfolios made by designers & developers."
                link="https://www.creative-portfolios.com/"
                image="/resources/inspiration-websites/creative-portfolios.jpg"
            />

            <LinkBox
                title="Webdesign Inspiration"
                description="Hand-picked web design inspiration, chosen among different styles and industries. It can be filtered by desktop, mobile and tablet sites."
                link="https://www.webdesign-inspiration.com/"
                image="/resources/inspiration-websites/webdesign-inspiration.jpg"
            />

            <LinkBox
                title="CodeMyUI"
                description="Web Design & UI Inspiration with Code Snippets, which is focused on specific elements."
                link="https://codemyui.com/"
                image="/resources/inspiration-websites/codemyui.jpg"
            />

            <LinkBox
                title="CSS Awards"
                description="An inspiration gallery, with high quality of CSS websites from around the world."
                link="https://www.cssawards.net/"
                image="/resources/inspiration-websites/cssawards.jpg"
            />

            <LinkBox
                title="Web Dev Resources"
                description="A collection of hand-picked resources for front-end web developers."
                link="https://webdevresources.info/inspiration"
                image="/resources/inspiration-websites/webdevresources.jpg"
            />

            <LinkBox
                title="Collect UI"
                description="A huge list of hand-picked inspirational websites, which is updated daily."
                link="https://collectui.com/"
                image="/resources/inspiration-websites/collect-ui.jpg"
            />

            <LinkBox
                title="One Page Love"
                description="A website design gallery showcasing single page websites, templates, and resources."
                link="https://onepagelove.com/"
                image="/resources/inspiration-websites/onepagelove.jpg"
            />

            <LinkBox
                title="UI Movement"
                description="A daily updated list for UI design inspiration, which can be filtered by specific elements."
                link="https://uimovement.com/"
                image="/resources/inspiration-websites/ui-movement.jpg"
            />

            <LinkBox
                title="Httpster"
                description="An inspiration resource showcasing websites made by people from all over the world."
                link="https://httpster.net"
                image="/resources/inspiration-websites/httpster.jpg"
            />

            <LinkBox
                title="CSS Design Awards"
                description="A panel of websites from 200+ international web designers and developers."
                link="https://www.cssdesignawards.com/"
                image="/resources/inspiration-websites/cssdesignawards.jpg"
            />

            <LinkBox
                title="DesignMunk"
                description="A list of hand-picked landing page inspirations from around the web."
                link="https://designmunk.com/"
                image="/resources/inspiration-websites/designmunk.jpg"
            />

            <LinkBox
                title="scrnshts"
                description="A hand-picked collection of app store design screenshots."
                link="https://scrnshts.club/"
                image="/resources/inspiration-websites/scrnshts.jpg"
            />

            <LinkBox
                title="SaaS Pages"
                description="A collection of landing pages with a focus on copywriting and design. It can be filtered by blocks like hero, navbar, cta and more."
                link="https://saaspages.xyz/"
                image="/resources/inspiration-websites/saaspages.jpg"
            />

            <LinkBox
                title="Design Systems Repo"
                description="A frequently updated collection of Design System examples, articles, tools and talks."
                link="https://designsystemsrepo.com/"
                image="/resources/inspiration-websites/designsystemsrepo.jpg"
            />

            <LinkBox
                title="Hyperpixel"
                description="A curated list of landing pages, sortable by landing pages and pricing pages."
                link="https://hyperpixel.io/"
                image="/resources/inspiration-websites/hyperpixel.jpg"
            />

            <LinkBox
                title="SaaS Landing Page"
                description="A list of landing page examples created by SaaS companies."
                link="https://saaslandingpage.com/"
                image="/resources/inspiration-websites/saaslandingpage.jpg"
            />

            <SubscribeForm />

        </ui.GridContainer>

        <RelatedArticle id={4} type="resource" />
    </Layout>
)

export default Post
