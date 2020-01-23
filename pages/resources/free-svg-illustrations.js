import React from 'react'
import { SubscribeForm, Layout, LinkBox } from '../../components'
import meta from '../../content/resources'
import * as S from '../../styles/weekly'

const postId = 2
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
                title="unDraw Illustrations"
                description="An open-source illustrations website, where you can change the colors of the illustrations online before downloading."
                link="https://undraw.co/illustrations"
                image="/blog/5/undraw.jpg"
            />

            <LinkBox
                image="/blog/5/manypixels.jpg"
                title="ManyPixels"
                link="https://www.manypixels.co/gallery/"
                description="ManyPixels offer free svg illustrations with the possibility to customize the color as well."
            />

            <LinkBox
                image="/blog/5/illlustrations.jpg"
                title="illlustrations"
                link="https://illlustrations.co/"
                description="100 beautiful illustrations, designed by Vijay Verma during a 100 days of illustrations challenge."
            />

            <LinkBox
                image="/blog/5/isometric.jpg"
                title="Isometric"
                link="https://isometric.online/"
                description="This website offers a searchable list of nice and free isometric illustrations."
            />

            <LinkBox
                image="/blog/5/glaze.jpg"
                title="Glaze"
                link="https://www.glazestock.com/"
                description="Glaze offers a lot of royalty-free high quality illustrations."
            />

            <LinkBox
                image="/blog/5/lukaszadam.jpg"
                title="Lukasz Adam"
                link="https://lukaszadam.com/illustrations"
                description="Lukasz Adam is an independent web designer and offers a lot of free svg icon sets on his website."
            />

            <LinkBox
                image="/blog/5/humaaans.jpg"
                title="Humaaans"
                link="https://www.humaaans.com"
                description="Humaaans have a variety of different svgs of people. They also offer each element of the humans separately to be able to create your own."
            />

            <LinkBox
                image="/blog/5/woobro.jpg"
                title="Woobro"
                link="https://woobro.design/"
                description="Woobro has some very detailed high-quality svgs for some specific use cases."
            />

            <LinkBox
                image="/blog/5/freshfolk.jpg"
                title="Fresh Folk"
                link="https://fresh-folk.com/"
                description="Similar to Humaaans, Fresh Folk offers people for self composing with a different style."
            />

            <LinkBox
                image="/blog/5/opendoodles.jpg"
                title="Open Doodles"
                link="https://www.opendoodles.com/"
                description="Open Doodles provide a bunch of illustrations in a sketchy style."
            />

            <SubscribeForm />

        </S.Container>
    </Layout>
)

export default Post
