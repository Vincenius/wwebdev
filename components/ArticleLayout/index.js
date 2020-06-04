import React from 'react'
import * as ui from '../../ui' // TODO move to styled?
import CodeBlock from '../CodeBlock'
import Layout from '../Layout'
import Comments from '../Comments'
import PrevNext from '../PrevNext'
import SubscribeForm from '../SubscribeForm'
import meta from '../../content/articles'

const ArticleLayout = ({ id, children }) => {
  const postMeta = meta.find(m => m.id === id)

  return (
    <Layout
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        updatedAt={postMeta.updatedAt}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image={postMeta.previewImage}
    >
        <ui.ArticleContainer as="article">
            { children }

            <br />
            <SubscribeForm />
            <Comments />

            <PrevNext postId={id} isArticle={true} />
        </ui.ArticleContainer>
    </Layout>
  )
}

export default ArticleLayout
