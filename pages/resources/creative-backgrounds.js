import React from 'react'
import { SubscribeForm, Layout, LinkBox } from '../../components'
import meta from '../../content/resources'
import * as S from '../../styles/weekly'

const postId = 4
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

            <SubscribeForm />

        </S.Container>
    </Layout>
)

export default Post
