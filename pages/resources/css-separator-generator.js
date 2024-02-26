import React from 'react'
import CssSeparatorGenerator from '../../components/CssSeparatorGenerator'
import Layout from '../../components/Layout'
import meta from '../../content/posts'

const postMeta = meta.find(m => m.id === 10)

const Demo = () => {
    return (
        <Layout
            isArticle={true}
            hideHeader={true}
            title={postMeta.headline}
            date={postMeta.date}
            updatedAt={postMeta.updatedAt}
            link={`https://wweb.dev${postMeta.link}`}
            description={postMeta.description}
            image={postMeta.shareImage}
        >
            <CssSeparatorGenerator />
        </Layout>
    )
}

export default Demo
