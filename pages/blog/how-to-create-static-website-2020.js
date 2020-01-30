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
}`

const snippet3 = `@import 'variables.scss';

body {
    color: $primary;
}`

const snippet4 = `"css:lint": "stylelint src/scss/*.scss --syntax scss || true",
"build:css": "npm run css:lint && npm run css:scss && npm run css:autoprefixer"`

const snippet5 = `"rules": {
    "block-no-empty": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "declaration-colon-space-after": "always",
    "max-empty-lines": 2
}`


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

            <p>Now you can just open the <ui.Code>index.html</ui.Code> in your browser.</p>

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
                To be able to use all the fancy features of Sass, open the console, navigate to your project directory and type:
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

            <p>
                To keep the scss organized, add a file <ui.Code>_variables.scss</ui.Code> to your <ui.Code>/src/sass</ui.Code> directory.
                The underscore at the beginning of the filename will make the file private and not being compiled. Now you can add some
                variables to this file like this:
            </p>

            <CodeBlock
                language="css"
                value={`$primary: #16a085;`}
            />

            <p>
                To be able to use the variable <ui.Code>$primary</ui.Code>, you need to include  <ui.Code>_variables.scss</ui.Code> in
                your index.scss:
            </p>

            <CodeBlock
                language="css"
                value={snippet3}
            />

            <p>
                Now run <ui.Code>npm run css:scss</ui.Code> again and refresh your browser to see the
                changes (We'll automate this step later). <br />
                Id recomment to create new files (eg. <ui.Code>_someModule.scss</ui.Code>)
                for every part you create, to keep the scss organized. But I won't go into detail about the organization of
                css, as it is a big topic itself.
            </p>

            <h3>Autoprefixer</h3>

            For implementing the autoprefixer we will use the
            npm module <a href="https://www.npmjs.com/package/autoprefixer" target="_blank" rel="noopener">autoprefixer</a>, together
            with <a href="https://www.npmjs.com/package/postcss-cli" target="_blank" rel="noopener">postcss-cli</a>.
            So go ahead and type in your console:

            <p><ui.Code>npm i -D autoprefixer postcss-cli</ui.Code><br/></p>

            <p>Let's add the autoprefixer script to the scripts of your <ui.Code>package.json</ui.Code></p>

            <CodeBlock
                language="json"
                value={'"css:autoprefixer": "postcss -u autoprefixer -r dist/*"'}
            />

            <p>
                This will check your css files in the <ui.Code>dist</ui.Code> directory and add the prefixes for them.
                So you need to run <ui.Code>npm run css:scss</ui.Code> first, to compile your scss into <ui.Code>dist</ui.Code>
                and afterwards run <ui.Code>npm run css:autoprefixer</ui.Code> to add vendor-prefixes to your compiled
                css file. As we don't want to run the scripts one after another, let's add another script to the
                <ui.Code>package.json</ui.Code>, which will run the scripts sequentially.
            </p>

            <CodeBlock
                language="json"
                value={'"build:css": "npm run css:scss && npm run css:autoprefixer"'}
            />

            <h3>Linting</h3>

            <p>
                Finally we'll use <a href="https://www.npmjs.com/package/stylelint" target="_blank" rel="noopener">stylelint</a> to
                make sure we have no errors in our css and to be able to enforce code conventions. <br/>
                Therefore install the npm module styleling:
            </p>

            <p><ui.Code>npm i -D stylelint</ui.Code><br/></p>

            <p>
                Afterwards we can add the script for linting and update our <ui.Code>build:css</ui.Code> to start
                with linting, so we catch errors before the file is compiled.
            </p>

            <CodeBlock
                language="json"
                value={snippet4}
            />

            <p>
                But to make this work we have to add the file <ui.Code>.stylelintrc</ui.Code>. This file will contain
                the rules, which <ui.Code>stylelint</ui.Code> should apply. For more information about the rules you can use
                check the <a href="https://stylelint.io/user-guide/rules" target="_blank" rel="noopener">documentation</a>.
            </p>

            <CodeBlock
                language="json"
                value={snippet5}
            />

            <p>
                Now <ui.Code>npm run build:css</ui.Code> should run successfully again (except if you have errors in your css).
            </p>

            <PrevNext postId={postId} isArticle={true} />
            <Comments />
        </ui.ArticleContainer>
    </Layout>
)

export default Post
