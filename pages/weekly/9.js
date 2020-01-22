import React from 'react'
import * as S from '../../styles/weekly'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import meta from '../../content/weekly'

const postId = 9
const postMeta = meta.find(m => m.id === postId)

const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.title}
        date={postMeta.date}
        link={postMeta.link}
        image={postMeta.image}
        description={postMeta.description}
    >
        <S.Container>
            <LinkBox
                title="Hero Patterns"
                description="A cool collection of repeatable SVG pattern backgrounds by Steve Schoger."
                link="https://www.heropatterns.com"
                image="https://www.heropatterns.com/img/twitter-preview.png"
            />
            <LinkBox
                title="Tiny Helpers"
                description="A collection of free tools for web developers."
                link="https://tiny-helpers.dev"
                image="https://tiny-helpers.dev/large-media-image.jpg"
            />
            <LinkBox
                title="GoatCounter"
                description="Simple, open source and privacy aware web statistics."
                link="https://www.goatcounter.com"
                image="https://gc.zgo.at/screenshot.png"
            />
            <LinkBox
                title="is-website-vulnerable"
                description="A cli tool to find vulnerabilities in your website npm wouldn't find."
                link="https://github.com/lirantal/is-website-vulnerable"
                image="https://raw.githubusercontent.com/lirantal/is-website-vulnerable/master/.github/is-website-vulnerable-logo.png"
            />
            <LinkBox
                title="JamTemplates"
                description="A curated collection of free Gatsby templates."
                link="https://jamtemplates.com/"
                image="https://jamtemplates.com/static/social-300826671967cbacd95e5e63623d190f.jpg"
            />
            <LinkBox
                title="CSS Gradient Animator"
                description="A website to generate an animated gradient background."
                link="https://www.gradient-animator.com/"
                image="https://www.gradient-animator.com/img/screen.png"
            />
            <LinkBox
                title="ImageHues"
                description="Get generated color palettes from random images."
                link="https://imagehues.com/"
                image="https://ph-files.imgix.net/7d42e9a0-9d69-4393-a1aa-de02bf832680?"
            />
            <LinkBox
                title="30 seconds of code"
                description="A collection of short code snippets for JavaScript, CSS, Python and React."
                link="https://www.30secondsofcode.org/"
                image="https://www.30secondsofcode.org/static/logo-cb53e02c026a68cd4a2574f40168073c.png"
            />
            <LinkBox
                title="Proton Native"
                description="Create cross-platform desktop applications with React syntax."
                link="https://proton-native.js.org/#/"
                image="https://camo.githubusercontent.com/c730125da08fdf1e78595c891449933616e566d5/687474703a2f2f70726f746f6e6e61746976652d616635312e6b7863646e2e636f6d2f696d616765732f6c6f676f5f626c61636b2e7376673f"
            />
            <LinkBox
                title="Next.js 9.2"
                description="Read about the latest release of Next.js and it's new features."
                link="https://nextjs.org/blog/next-9-2"
                image="https://nextjs.org/static/blog/next-9-2/twitter-card.png"
            />

            <SubscribeForm type="weekly" />
        </S.Container>

        <PrevNext postId={postId} />
    </Layout>
)

export default Post