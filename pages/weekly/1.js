import React from 'react'
import * as S from '../../styles/weekly'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import meta from '../../content/weekly'

const postId = 1
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
        <S.IntroText>
            <p>
                Today I'm introducing the weekly. This will be a curated list of things I stumbled upon during the previous week.
            </p>
            <p>
                I'm reading through lots of various forums and websites related to web development.
                Starting from now I will save the (for me) most interesting resources, tools and reads and will share them here.
            </p>
            <p>
                If you have somthing, you think I should mention here, let me know: <a href="mailto:info@wweb.dev">info@wweb.dev</a>
            </p>
        </S.IntroText>
        <S.Container>
            <LinkBox
                title="SWR - React Hooks for Remote Data Fetching"
                description="A lightweight library for remote data fetching using React Hooks. It returns the data from cache, then sends the fetch request and finally comes with the up-to-date data again."
                link="https://swr.now.sh/"
                image="https://assets.zeit.co/image/upload/v1572282926/swr/twitter-card.jpg"
            />
            <LinkBox
                title="Colors, fonts and resources for web developers"
                description="Curated library of colors and fonts for Web Developers & Digital Designers and a curated collection of resources."
                link="https://www.colorsandfonts.com/"
                image="https://colorsandfonts.com/images/opengraph.png"
            />
            <LinkBox
                title="Animated CSS Background Generator"
                description="A collection of pure css animated backgrounds with the possibility to customize."
                link="/resources/animated-css-background-generator"
                image="/resources/resources01-small.jpg"
                selfPromoted="self-promotion"
            />
            <LinkBox
                title="Fresh Folk - An illustration library of people and objects"
                description="Each character comes with a range of poses, outfits and skin tones. Create a wide range of scenes with 43 Objects to choose from."
                link="https://fresh-folk.com/"
                image="https://fresh-folk.com/assets/images/card.jpg"
            />
            <LinkBox
                title="Divjoy - The React codebase generator"
                description="A nice templete generator including marketing pages, contact forms, pricing, faq, authentication and routing."
                link="https://divjoy.com/"
                image="https://divjoy.com/static/og-image.png"
            />
            <LinkBox
                title="Postwoman - An API request builder"
                description="A free, fast, and beautiful alternative to Postman."
                link="https://github.com/liyasthomas/postwoman"
                image="https://postwoman.io/logo.jpg"
            />
            <LinkBox
                title="Pika - A new kind of package registry for the modern web."
                description="It handles formatting, configuring, building and publishing every package on the registry, so that individual authors don't have to."
                link="https://www.pika.dev/registry"
                image="https://www.pika.dev/static/img/registry-cover.jpg"
            />
            <LinkBox
                title="Developer Roadmaps"
                description="Step by step guides and paths to learn different tools or technologies."
                link="https://roadmap.sh/roadmaps"
                image="https://roadmap.sh/static/brand.png"
            />
            <LinkBox
                title="Firefox Developer Tools Tips & Tricks"
                description="Curated series of 30 productivity tips and tricks that helps debugging web applications with the Firefox Developer Tools."
                link="https://medium.com/@lakatos/30-tips-tricks-with-the-firefox-developer-tools-2e3f2ca5bc61"
                image="https://miro.medium.com/max/1200/1*eN9nIfutJQUr5kdznmEHDQ.png"
            />
            <LinkBox
                title="Free for developers"
                description="A list of software (SaaS, PaaS, IaaS, etc.) and other offerings that have free tiers for developers."
                link="https://free-for.dev/#/"
            />
            <SubscribeForm type="weekly" />
        </S.Container>

        <PrevNext postId={postId} />
    </Layout>
)

export default Post