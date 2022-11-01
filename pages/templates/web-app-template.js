import React from 'react'

import * as ui from '../../ui'
import Layout from '../../components/Layout'
import templateMeta from '../../content/templates'
import Ad from '../../components/Ads/Ad'

const postMeta = templateMeta.find(m => m.id === 3)

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
        <a href="https://web-app-template-six.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>{' '}
        | <a href="https://github.com/Vincenius/web-app-template" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <img src={postMeta.previewImage} alt="screenshot of the blog template" />

      <p>
        This is a simple Next.js template including authentication, storage, and password reset logic.
      </p>

      <b>Features</b>
      <ul>
        <li>Next.js 12</li>
        <li>CSS Modules</li>
        <li>Material UI</li>
        <li>Authentication logic using next-auth/react</li>
        <li>User creation stored in MongoDB</li>
        <li>Reset password logic and email sending with nodemailer</li>
        <li>Responsive Design</li>
      </ul>

      <b>Setup</b>
      <p>For instructions on how to setup everything - check the Readme on the GitHub repository.</p>

      <b>License</b> <br/>
      <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT</a>
    </ui.ArticleContainer>
  </Layout>
)

export default Post
