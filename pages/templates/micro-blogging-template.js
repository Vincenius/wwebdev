import React from 'react'

import * as ui from '../../ui'
import Layout from '../../components/Layout'
import templateMeta from '../../content/templates'
import Ad from '../../components/Ads/Ad'

const postMeta = templateMeta.find(m => m.id === 2)

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
        <a href="https://modest-blog.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>{' '}
        | <a href="https://github.com/Vincenius/modest" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <img src={postMeta.previewImage} alt="screenshot of the twitter-like blog template" />

      <p>
        This is a micro-blogging template to quickly create a twitter-like blog.
        You can write in markdown and upload images and videos.
      </p>

      <p>
        During my travels, I created a small blog to inform my friends and family about what I'm up to.
        Now I've turned it into a template.
      </p>

      <b>Features</b>
      <ul>
        <li>Next.js 12</li>
        <li>CSS Modules</li>
        <li>Material UI</li>
        <li>Markdown support</li>
        <li>Responsive Design</li>
        <li>AWS Hosting (S3 & DynamoDB)</li>
      </ul>

      <b>Setup</b>
      <p>For instructions on how to setup AWS - check the Readme on the GitHub repository.</p>

      <b>License</b> <br/>
      <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT</a>
    </ui.ArticleContainer>
  </Layout>
)

export default Post
