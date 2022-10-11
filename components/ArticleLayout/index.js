import React from 'react'
import styled from 'styled-components'
import { breakpointLarge } from '../../ui/constants'

import * as ui from '../../ui' // TODO move to styled?
import Layout from '../Layout'
import Comments from '../Comments'
import Ad from '../Ads/Ad'
import PrevNext from '../PrevNext'
import SubscribeForm from '../SubscribeForm'
import meta from '../../content/articles'

const Sidebar = styled(ui.Sidebar)`
  padding: 24px;
  min-width: 348px;
  margin: 0 auto;

  @media (max-width: ${breakpointLarge}) {
    width: auto;
    min-width: 0;
    margin: 0 auto;
  }
`

const SidebarContainer = styled(ui.SidebarContainer)`
  @media (max-width: ${breakpointLarge}) {
    flex-direction: column-reverse;
  }
`

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
      <SidebarContainer>
        <ui.ArticleContainer as="article">
          { children }

          <br />
          <SubscribeForm />
          <Comments />

          <PrevNext postId={id} isArticle={true} />
        </ui.ArticleContainer>
        <Sidebar>
          <Ad />
        </Sidebar>
      </SidebarContainer>
    </Layout>
  )
}

export default ArticleLayout
