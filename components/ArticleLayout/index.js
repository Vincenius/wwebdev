import React from 'react'
import * as ui from '../../ui' // TODO move to styled?
import Layout from '../Layout'
import Comments from '../Comments'
import Ad from '../Ads/Ad'
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
      <ui.SidebarContainer>
        <ui.ArticleContainer as="article">
          { children }

          <br />
          <SubscribeForm />
          <Comments />

          <PrevNext postId={id} isArticle={true} />
        </ui.ArticleContainer>
        <ui.Sidebar>
            <Ad />
        </ui.Sidebar>
      </ui.SidebarContainer>
    </Layout>
  )
}

export default ArticleLayout
