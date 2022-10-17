import React, { useState } from 'react'
import CssSeparatorGenerator from '../../components/CssSeparatorGenerator'
import Layout from '../../components/Layout'
import meta from '../../content/resources'

const postMeta = meta.find(m => m.id === 5)

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
            image={postMeta.previewImage}
        >
            <CssSeparatorGenerator />
        </Layout>
    )
}

export default Demo
