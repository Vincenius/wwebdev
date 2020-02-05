import React from 'react'
import * as S from '../../styles/weekly'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import meta from '../../content/weekly'

const postId = 11
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
                title="You Don't Know JS Yet"
                description="The 2nd edition of the book series is out. Definetly woth to check it out."
                link="https://github.com/getify/You-Dont-Know-JS"
                image="https://d2sofvawe08yqg.cloudfront.net/ydkjsy-get-started/hero"
            />

            <LinkBox
                title="Vanilla Web Projects"
                description="A list of 20 projects by Brad Traversy, which are build without frameworks or libraries."
                link="https://github.com/bradtraversy/vanillawebprojects"
                image="https://vanillawebprojects.com/img/showcase-bg.png"
            />

            <LinkBox
                title="ESLint configuration and best practices"
                description="A nice post by Lucas Santoni about the best practices of eslint."
                link="https://blog.geographer.fr/eslint-guide"
                image="/weekly/screenshots/eslintbestpractices.png"
            />

            <LinkBox
                title="24 modern ES6 code snippets to solve practical JS problems"
                description="A cool collection of snippets by Madza on dev.to."
                link="https://dev.to/madarsbiss/20-modern-es6-snippets-to-solve-practical-js-problems-3n83"
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--BNwgWQjz--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/jxfae4q7i6kbewhxzmzh.png"
            />

            <LinkBox
                title="iHateRegex"
                description="A list of commonly used regular expressions - a usefull cheatsheet."
                link="https://ihateregex.io/"
                image="https://ihateregex.io/_nuxt/img/4505636.png"
            />

            <LinkBox
                title="Image Dragging Effects "
                description="A set of cool dragging effects by Mary Lou from Codrops."
                link="https://tympanus.net/codrops/2020/02/03/image-dragging-effects/"
                image="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2020/02/ImageDragging_featured.jpg"
            />

            <LinkBox
                title="Old CSS, new CSS"
                description="A good read about how CSS used to work and where we are now."
                link="https://eev.ee/blog/2020/02/01/old-css-new-css/"
                image="https://eev.ee/media/2020-02-css/html-definitive-guide.png"
            />

            <LinkBox
                title="Scene.js"
                description="An animation library. for creatin animated websites."
                link="https://daybrush.com/scenejs/"
                image="https://camo.githubusercontent.com/1181b993f880616d54cefc3b8ef576513f53a127/68747470733a2f2f64617962727573682e636f6d2f7363656e656a732f696d616765732f636c6170706572626f6172642e706e67"
            />


            <LinkBox
                title="CesiumJS"
                description="An open source JavaScript library for creating 3D globes and maps."
                link="https://cesium.com/cesiumjs/"
                image="https://cesium.com/images/social-card.jpg"
            />

            <LinkBox
                title="React Kawaii"
                description="A library of cute illustrations, which are also easily customisable."
                link="https://react-kawaii.now.sh/"
                image="/weekly/screenshots/reactkawaii.png"
            />

            <LinkBox
                title="Intrinsic Sizing In CSS"
                description="An article by Ahmad Shadeed about extrinsic and intrisic sizing."
                link="https://ishadeed.com/article/intrinsic-sizing-in-css/"
                image="https://ishadeed.com/assets/intrinsic-sizing/intrinsic-todo-3.png"
            />

            <SubscribeForm type="weekly" />
        </S.Container>

        <PrevNext postId={postId} />
    </Layout>
)

export default Post