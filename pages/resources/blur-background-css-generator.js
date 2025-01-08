import React from 'react'

import meta from '../../content/posts'
import BlurBgGenerator from '../../components/BlurBackgroundGenerator'
import Layout from '../../components/Layout'
import * as ui from '../../ui'

const postMeta = meta.find(m => m.id === 24)

const BlurBackgroundGenerator = () => {
    return <Layout
        isArticle={true}
        hideHeader={true}
        title={postMeta.headline}
        date={postMeta.date}
        updatedAt={postMeta.updatedAt}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image={postMeta.shareImage}
    >
        <ui.Container>
            <BlurBgGenerator />
        </ui.Container>
    </Layout>
}

export default BlurBackgroundGenerator
