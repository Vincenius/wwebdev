import React from 'react'
import * as S from '../../styles/weekly'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import meta from '../../content/weekly'

const postId = 10
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
                title="Hoard.fyi"
                description="A large list of tools and resources for web developers and designers."
                link="https://hoard.fyi/"
                image="https://hoard.fyi/wp-content/uploads/2019/10/cropped-hoard.fyi_-5.png"
            />
            <LinkBox
                title="Screen Size Map"
                description="An interactive map of the most popular screen sizes."
                link="https://www.screensizemap.com/"
                image="https://screensizemap.com/img/open-graph/og-square.png"
            />
            <LinkBox
                title="Mirage JS"
                description="An API mocking library to help you build your frontend without having the backend."
                link="https://miragejs.com/"
                image="https://miragejs.com/static/121685b2895428a7030b3ec4e6d86d73/06961/media-card.png"
            />
            <LinkBox
                title="Awesome Stock Resources"
                description="A huge list of stock resources, including photography, videos, fonts icons and more."
                link="https://github.com/neutraltone/awesome-stock-resources"
                image="https://raw.githubusercontent.com/neutraltone/awesome-stock-resources/master/img/splash.jpg"
            />
            <LinkBox
                title="Vuer"
                description="A simple GitHub profile viewing tool, made by Cade Kyanston with Vue, Chart.js and Bulma."
                link="https://vuer.now.sh/"
                image="https://vuer.now.sh/img/snapshot.png"
            />
            <LinkBox
                title="React Libraries"
                description="A curated database of popular React libraries."
                link="https://reactlibraries.com/"
                image="https://reactlibraries.com/_next/static/images/react-libraries-logo-icon-only-f0880ce847aac1d0a394fd14657a1e34.png"
            />
            <LinkBox
                title="Rough.js"
                description="A small graphics library for drawing sketchy images with canvas or svg."
                link="https://github.com/pshihn/rough"
                image="https://camo.githubusercontent.com/321c5ec903de912560670ba0fb8d6b7705a2a4e5/68747470733a2f2f726f7567686a732e636f6d2f696d616765732f6361705f64656d6f2e706e67"
            />
            <LinkBox
                title="IsometricSass"
                description="A sass library for isometric animations."
                link="https://morgancaron.github.io/IsometricSass/"
                image="https://raw.githubusercontent.com/MorganCaron/IsometricSass/master/screenshot.png"
            />
            <LinkBox
                title="The Complete Freelance Web Developer Guide"
                description="A detailed article by Luke Ciciliano how to make money through freelancing."
                link="https://www.freecodecamp.org/news/freelance-web-developer-guide/"
                image="https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/Hit-with-money.jpg"
            />
            <LinkBox
                title="Dark Reader"
                description="A chorme and firefox extension to add a dark mode to any website."
                link="https://github.com/darkreader/darkreader"
                image="https://camo.githubusercontent.com/619d18806e7578dc4bb675e7a847ff8d42364294/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f74544a4949494171664a57796d71504d394c416d69766c31316b576d462d58584c4142756573344f77666a4f45445f6e74734a5a644c5930565447305846435730575f7759536c6c37513d773634302d683430302d65333635"
            />
            <LinkBox
                title="Introducing Yarn 2"
                description="An article by Maël Nison about the release of the new yarn version."
                link="https://dev.to/arcanis/introducing-yarn-2-4eh1"
                image="https://dev.to/social_previews/article/227676.png"
            />

            <SubscribeForm type="weekly" />
        </S.Container>

        <PrevNext postId={postId} />
    </Layout>
)

export default Post