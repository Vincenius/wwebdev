import React from 'react'
import * as ui from '../../ui'
import { SubscribeForm, Layout, ImageTextBlock, PrevNext, Comments } from '../../components'
import meta from '../../content/articles'

const postId = 5
const postMeta = meta.find(m => m.id === postId)

const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image="/blog/5/preview.png"
    >
        <ui.ArticleContainer as="article">
            <p>Spice up your next project with beautiful illustrations from these ten websites:</p>

            <ImageTextBlock
                image="/blog/5/undraw.jpg"
                title="unDraw Illustrations"
                link="https://undraw.co/illustrations"
                description="An open-source illustrations website, where you can change the colors of the illustrations online before downloading."
            />

            <ImageTextBlock
                image="/blog/5/manypixels.jpg"
                title="ManyPixels"
                link="https://www.manypixels.co/gallery/"
                description="ManyPixels offer free svg illustrations with the possibility to customize the color as well."
            />

            <ImageTextBlock
                image="/blog/5/illlustrations.jpg"
                title="illlustrations"
                link="https://illlustrations.co/"
                description="100 beautiful illustrations, designed by Vijay Verma during a 100 days of illustrations challenge."
            />

            <ImageTextBlock
                image="/blog/5/isometric.jpg"
                title="Isometric"
                link="https://isometric.online/"
                description="This website offers a searchable list of nice and free isometric illustrations."
            />

            <ImageTextBlock
                image="/blog/5/glaze.jpg"
                title="Glaze"
                link="https://www.glazestock.com/"
                description="Glaze offers a lot of royalty-free high quality illustrations."
            />

            <ImageTextBlock
                image="/blog/5/lukaszadam.jpg"
                title="Lukasz Adam"
                link="https://lukaszadam.com/illustrations"
                description="Lukasz Adam is an independent web designer and offers a lot of free svg icon sets on his website."
            />

            <ImageTextBlock
                image="/blog/5/humaaans.jpg"
                title="Humaaans"
                link="https://www.humaaans.com"
                description="Humaaans have a variety of different svgs of people. They also offer each element of the humans separately to be able to create your own."
            />

            <ImageTextBlock
                image="/blog/5/woobro.jpg"
                title="Woobro"
                link="https://woobro.design/"
                description="Woobro has some very detailed high-quality svgs for some specific use cases."
            />

            <ImageTextBlock
                image="/blog/5/freshfolk.jpg"
                title="Fresh Folk"
                link="https://fresh-folk.com/"
                description="Similar to Humaaans, Fresh Folk offers people for self composing with a different style."
            />

            <ImageTextBlock
                image="/blog/5/opendoodles.jpg"
                title="Open Doodles"
                link="https://www.opendoodles.com/"
                description="Open Doodles provide a bunch of illustrations in a sketchy style."
            />

            <hr />

            <SubscribeForm />

            <PrevNext postId={postId} isArticle={true} />

            <Comments />
        </ui.ArticleContainer>
    </Layout>
)

export default Post
