import React from 'react'
import * as ui from '../../ui'
import SidebarLayout from '../Layout/SidebarLayout'
import Comments from '../Comments'
import PrevNext from '../PrevNext'
import meta from '../../content/posts'

const ArticleLayout = ({ id, children }) => {
  const postMeta = meta.find(m => m.id === id)

  return (
    <SidebarLayout
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        updatedAt={postMeta.updatedAt}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image={postMeta.shareImage}
    >
      <ui.ArticleContainer as="article">
        { children }

        <Comments />

        <PrevNext postId={id} isArticle={true} />
      </ui.ArticleContainer>
    </SidebarLayout>
  )
}

export default ArticleLayout
