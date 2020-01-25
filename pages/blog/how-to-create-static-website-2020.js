import React from 'react'
import * as ui from '../../ui'
import { CodeBlock, Layout, Comments, PrevNext } from '../../components'
import meta from '../../content/articles'

const postId = 5
const postMeta = meta.find(m => m.id === postId)

const snippet1 = `<!DOCTYPE html>
<html lang="de">
    <head>
        <title>Static Website Template</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>

    <body>
        <h1>Static Website Template</h1>
    </body>
</html>`

const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image="/blog/2-react.jpg"
    >
        <ui.ArticleContainer as="article">
            <p>
                Sometimes it makes total sense to build an old fashioned static website.
                It can be faster but also simplier than throwing in a full JavaScript framework
                just to build a quick website with only a few pages. In the following I'll create
                a template with scss, linting, .... using npm scripts.
            </p>

            <p>
                For the finished repository, which can be used as a template go to:&nbsp;
                <a href="https://github.com/Vincenius/static-website-template" target="_blank" rel="noopener">
                    https://github.com/Vincenius/static-website-template
                </a>
            </p>

            <h2>Initial Setup</h2>
            <p>
                <b>Requirements:</b><br/>
                Installed node.js / npm
            </p>

            <p>
                First of all I'll initialize an empty project with <code>npm init</code>.<br/>
                Then I create the initial <code>index.html</code> in the root directory:
            </p>

            <CodeBlock
                language="html"
                value={snippet1}
            />

            <h2>The CSS</h2>

            <p>
                I want to use nesting, variables and all the fancy features
                of <a href="https://sass-lang.com/" target="_blank" rel="noopener">Sass</a> for
                the site. Therefore open the console and type:
            </p>
            <p><code>npm i -D node-sass</code><br/></p>
            <p>
                When the installation is done, open the <code>package.json</code> and add following to the scripts:
            </p>
            <p>
                <code>"css:scss": "node-sass --output-style compressed -o dist src/scss"</code>
            </p>



            <PrevNext postId={postId} isArticle={true} />

            <Comments />
        </ui.ArticleContainer>
    </Layout>
)

export default Post
