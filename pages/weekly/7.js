import React from 'react'
import * as S from '../../styles/weekly'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import meta from '../../content/weekly'

const postId = 7
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
                title="Oh Shit Git!?!"
                description="It's easy to screw up using Git. This website helps you figuring out how to fix your mistakes."
                link="https://ohshitgit.com/"
                image="/weekly/screenshots/ohshitgit.jpg"
            />
            <LinkBox
                title="Colorsinspo"
                description="A cool website around colors - including palettes, tools, gradients, inspiration, tutorials and more."
                link="https://colorsinspo.com/"
                image="https://colorsinspo.com/resources/img/twitter/colorsinspo-twitter-sumary-image.png"
            />
            <LinkBox
                title="Parcel"
                description="A faster alternative to webpack for web application bundling."
                link="https://parceljs.org/"
                image="https://user-images.githubusercontent.com/19409/31321658-f6aed0f2-ac3d-11e7-8100-1587e676e0ec.png"
            />
            <LinkBox
                title="Redux Style Guide"
                description="The new list of recommended patterns, best practices, and suggested approaches for writing Redux applications."
                link="https://redux.js.org/style-guide/style-guide/"
                image="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
            />
            <LinkBox
                title="Beautiful React Hooks"
                description="A collection of React Hooks to speed-up the development."
                link="https://github.com/antonioru/beautiful-react-hooks"
                image="https://raw.githubusercontent.com/antonioru/beautiful-react-hooks/master/usage_example.png"
            />
            <LinkBox
                title="Bot Land"
                description="A fun online strategy game, where you have to build and programm your own bot."
                link="https://bot.land/"
                image="https://bot.land/dist/logo.png"
            />
            <LinkBox
                title="Rhubarb"
                description="A lightweight WebSocket library optimized for multiplayer JS games, which works on WebWorkers with binary data."
                link="https://github.com/oguzeroglu/Rhubarb"
                image="https://raw.githubusercontent.com/oguzeroglu/Rhubarb/master/rhubarb.gif"
            />
            <LinkBox
                title="DarkModeDesign"
                description="A list of resources for designing and building dark mode experiences."
                link="https://darkmodedesign.xyz"
                image="/weekly/screenshots/darkmodedesign.jpg"
            />
            <LinkBox
                title="astuto"
                description="An open source customer feedback tool, helping to collect, manage and prioritize feedback from users."
                link="https://github.com/riggraz/astuto"
                image="https://raw.githubusercontent.com/riggraz/astuto/master/images/logo-and-name.png"
            />

            <SubscribeForm type="weekly" />
        </S.Container>

        <PrevNext postId={postId} />
    </Layout>
)

export default Post