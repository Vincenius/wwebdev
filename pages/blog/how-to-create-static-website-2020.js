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

const snippet2 = `{
    "name": "static-website",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "css:scss": "node-sass --output-style compressed -o dist src/scss"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "node-sass": "^4.13.1"
    }
}
`


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
                It can be not only faster, but also simplier than throwing in a full JavaScript framework
                just to build a website with only a few pages. In the following I'll create
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
                First of all I'll initialize an empty project with <ui.Code>npm init</ui.Code>.<br/>
                Then I create the initial <ui.Code>index.html</ui.Code> in the root directory:
            </p>

            <CodeBlock
                language="html"
                value={snippet1}
            />

            <h2>The CSS</h2>

            <p>
                For the CSS I will implement
            </p>
            <ul>
                <li>
                    <b><a href="https://sass-lang.com/" target="_blank" rel="noopener">Sass</a>:</b> This
                    is a preprocessor, which will compile <ui.Code>.scss</ui.Code> files into css. With scss
                    you can use <i>variables</i>, <i>nesting</i>, <i>partials</i>, <i>modules</i> and more.
                    It makes writing css a lot easier, clearer and more modular.
                </li>
                <li>
                    <b><a href="https://autoprefixer.github.io/" target="_blank" rel="noopener">Autoprefixer</a>:</b> This
                    will add vendor prefixes, to improve the compability of your css for different browsers.
                </li>
                <li>
                    <b><a href="https://stylelint.io/" target="_blank" rel="noopener">Linting</a>:</b> This
                    will help avoiding errors in your css code and to enforce code conventions.
                </li>
            </ul>

            <h3>Sass</h3>

            <p>
                To be able to use all the fancy features of Sass, open the console and type:
            </p>
            <p><ui.Code>npm i -D node-sass</ui.Code><br/></p>
            <p>
                This will install the package <a href="https://www.npmjs.com/package/node-sass" target="_blank" rel="noopener">node-sass</a>,
                into the dev dependencies. It enables us to compile .scss files to css.<br/>
                When the installation is done, open the <ui.Code>package.json</ui.Code>
                and add following script to your scripts:
            </p>
            <CodeBlock
                language="json"
                value={`"css:scss": "node-sass --output-style compressed -o dist src/scss"`}
            />
            <p>
                This will compile your scss from <ui.Code>/src/scss</ui.Code> into <ui.Code>/dist</ui.Code>.
                Additionally the <ui.Code>--output-style compressed</ui.Code> will remove all line-breaks
                and whitespaces to reduce the file size.<br />
                Now your <ui.Code>package.json</ui.Code> should then look like this:
            </p>
            <CodeBlock
                language="json"
                value={snippet2}
            />
            <p>
                Now create the directory <ui.Code>src</ui.Code> and inside of src <ui.Code>scss</ui.Code>.
                Then you can create your first <ui.Code>.scss</ui.Code> file. I will name it <ui.Code>index.scss</ui.Code>
            </p>
            <p>
                If you now run <ui.Code>npm run css:scss</ui.Code> in your console, it will compile your file
                into the <ui.Code>dist</ui.Code> folder. Your project structure should then look like this:
            </p>

            <img src="/blog/static-website/dirStructure1.png" alt="structure of the project" />

            <p>Now you can include the compiled css file in the <ui.Code>{`<head>`}</ui.Code>
            of your <ui.Code>index.html</ui.Code></p>

            <CodeBlock
                language="html"
                value={`<link rel="stylesheet" type="text/css" href="dist/index.css">`}
            />

            next TODO scss file inclusion in main file

            <PrevNext postId={postId} isArticle={true} />

            <Comments />
        </ui.ArticleContainer>
    </Layout>
)

export default Post
