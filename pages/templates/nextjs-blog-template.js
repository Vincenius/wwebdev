import React from 'react'

import * as ui from '../../ui'
import Layout from '../../components/Layout'
import templateMeta from '../../content/templates'
import Ad from '../../components/Ads/Ad'

const postMeta = templateMeta.find(m => m.id === 1)

const Post = () => (
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
      <Ad />
      <p>
        <a href="https://wwebdev-nextjs-blog-template.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>{' '}
        | <a href="https://github.com/wwebdev/nextjs-blog-template" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <img src={postMeta.previewImage} alt="screenshot of the blog template" />

      <p>
        This is a simple blog template to quickly get started with writing.
        It has a clean design and provides a lot of flexibility.
      </p>

      <b>Features</b>
      <ul>
        <li>Next.js 12</li>
        <li>CSS Modules</li>
        <li>Material UI Icons</li>
        <li>Markdown support</li>
        <li>RSS generation</li>
        <li>CSS variables</li>
        <li>Responsive Design</li>
        <li>Best practices and accessibility</li>
      </ul>

      <p>
        <img src="/resources/blog-template-lighthouse.png" alt="lighthouse score 100"/>
      </p>

      <b>License</b> <br/>
      <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT</a>
    </ui.ArticleContainer>
  </Layout>
)

export default Post
