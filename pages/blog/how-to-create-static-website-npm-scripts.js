import React from 'react'

import * as ui from '../../ui'
import CodeBlock from '../../components/CodeBlock'
import ArticleLayout from '../../components/ArticleLayout'

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
    "description": "this is an example for a static website",
    "main": "index.js",
    "scripts": {
        "test": "echo \\"Error: no test specified\\" && exit 1",
        "css:scss": "node-sass --output-style compressed -o dist src/scss"
    },
    "author": "you",
    "license": "ISC",
    "devDependencies": {
        "node-sass": "^4.13.1"
    }
}`

const snippet3 = `@import 'variables.scss';

body {
    color: $primary;
}`

const snippet4 = `"css:lint": "stylelint src/scss/*.scss  --custom-syntax postcss-scss",
"build:css": "npm run css:lint && npm run css:scss && npm run css:autoprefixer"`

const snippet5 = `"rules": {
    "block-no-empty": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "declaration-colon-space-after": "always",
    "max-empty-lines": 2
}`

const snippet6 = `"build:images": "imagemin src/images/**/* --out-dir=dist/images",
"watch:images": "onchange \\"src/images\\" -- npm run build:images"`

const snippet7 = `"watch": "run-p serve watch:*",
"build": "run-p build:*"`

const snippet8 = `module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}`

const snippet9 = `"build:js": "webpack --mode=production",
"watch:js": "onchange \\"src/js\\" -- webpack --mode=development"`

const snippet10 = `{
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"]
    }
}`

const snippet11 = `/* eslint-disable no-undef */
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    plugins: [new ESLintPlugin()],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};`

const snippet12 = `{
    "input": "src/views/*.html",
    "output": "dist",
    "plugins": {
        "posthtml-modules": {
            "root": "./src/views",
            "initial": true
        },
        "htmlnano": {}
    }
}`

const snippet13 = `"build:html": "posthtml -c posthtml.json",
"watch:html": "onchange \\"src/views\\" -- npm run build:html"`

const snippet14 = `<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" type="text/css" href="/index.css">`

const snippet15 = `<!DOCTYPE html>
<html lang="de">
    <head>
        <title>Static Website Template</title>
        <module href="/components/head.html"></module>
    </head>

    <body>
        <h1>Static Website Template</h1>

        <script src="./bundle.js"></script>
    </body>
</html>`

const Post = () => (
    <ArticleLayout id={5}>
        <p>
            Sometimes it makes total sense to build an old fashioned static website.
            It can be not only faster but also simpler than throwing in a full JavaScript framework
            just to build a website with only a few pages. In the following, I'll create
            a template with scss, linting, minifying and more using npm scripts.
        </p>

        <p>
            This not only helps you building a static website. It also helps understanding the
            tools that are used by frameworks and why. So let’s get started.
        </p>

        <p>
            For the finished repository, which can be used as a template go to&nbsp;
            <a href="https://github.com/wwebdev/static-website-template" target="_blank" rel="noopener">
                https://github.com/wwebdev/static-website-template
            </a>
        </p>

        <ul>
            <li><a href="#initialSetup">Initial Setup</a></li>
            <li>
                <a href="#css">The CSS</a>
                <ul>
                    <li><a href="#sass">Sass</a></li>
                    <li><a href="#autoprefixer">Autoprefixer</a></li>
                    <li><a href="#csslinting">Linting</a></li>
                </ul>
            </li>
            <li><a href="#simplifybuild">Simplifying The Build</a></li>
            <li><a href="#images">The Images</a></li>
            <li>
                <a href="#javascript">The JavaScript</a>
                <ul>
                    <li><a href="#webpackbabel">Webpack & Babel</a></li>
                    <li><a href="#jslinting">Linting</a></li>
                </ul>
            </li>
            <li><a href="#html">HTML</a></li>
        </ul>

        <h2 id="initialSetup">Initial Setup</h2>
        <p>
            <b>Requirements:</b><br/>
            Installed node.js / npm
        </p>

        <p>
            First of all, I'll initialize an empty project by opening the console and
            typing <ui.Code>npm init</ui.Code>.<br/>
            Then I create the initial <ui.Code>index.html</ui.Code> in the root directory:
        </p>

        <CodeBlock
            language="markup"
            value={snippet1}
        />

        <p>
            Now you can just open the <ui.Code>index.html</ui.Code> in your browser. <br/>
            This doesn't look very exiting yet - so let's add some styling.
        </p>

        <h2 id="css">The CSS</h2>

        <p>
            For the CSS I will implement
        </p>
        <ul>
            <li>
                <b><a href="https://sass-lang.com/" target="_blank" rel="noopener">Sass</a>:</b> This
                is a preprocessor, which will compile <ui.Code>.scss</ui.Code> files into CSS. With scss
                you can use <i>variables</i>, <i>nesting</i>, <i>partials</i>, <i>modules</i> and more.
                It makes writing CSS a lot easier, clearer and more modular.
            </li>
            <li>
                <b><a href="https://autoprefixer.github.io/" target="_blank" rel="noopener">Autoprefixer</a>:</b> This
                will add <a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener">vendor prefixes</a>, to
                improve the compatibility of your CSS for different browsers.
            </li>
            <li>
                <b><a href="https://stylelint.io/" target="_blank" rel="noopener">Linting</a>:</b> This
                will help to avoid errors in your CSS code and to enforce code conventions.
            </li>
        </ul>

        <h3 id="sass">Sass</h3>

        <p>
            To be able to use all the fancy features of Sass, open the console, navigate to your project directory and type:
        </p>
        <p><ui.Code>npm i -D node-sass</ui.Code><br/></p>
        <p>
            This will install the package <a href="https://www.npmjs.com/package/node-sass" target="_blank" rel="noopener">node-sass</a>,
            into the dev dependencies. It enables us to compile .scss files to CSS.<br/>
            When the installation is done, open the <ui.Code>package.json</ui.Code>
            and add the following script to your scripts:
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

        <p>
            Now you can include the compiled CSS file in the <ui.Code>{`<head>`}</ui.Code>
            of your <ui.Code>index.html</ui.Code>
        </p>

        <CodeBlock
            language="markup"
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
            I'd recommend to create new files (eg. <ui.Code>_someModule.scss</ui.Code>)
            for every part you create, to keep the scss organized. But I won't go into detail about the organization of
            CSS, as it is a big topic itself.
        </p>

        <h3 id="autoprefixer">Autoprefixer</h3>

        For implementing the autoprefixer we will use the
        npm module <a href="https://www.npmjs.com/package/autoprefixer" target="_blank" rel="noopener">autoprefixer</a>, together
        with <a href="https://www.npmjs.com/package/postcss-cli" target="_blank" rel="noopener">postcss-cli</a>.
        So go ahead and type in your console:

        <p><ui.Code>npm i -D autoprefixer postcss-cli</ui.Code><br/></p>

        <p>Then let's add the autoprefixer script to the scripts of your <ui.Code>package.json</ui.Code></p>

        <CodeBlock
            language="json"
            value={'"css:autoprefixer": "postcss -u autoprefixer -r dist/*.css"'}
        />

        <p>
            This will check your CSS files in the <ui.Code>dist</ui.Code> directory and add the prefixes for them.
            So you need to run <ui.Code>npm run css:scss</ui.Code> first, to compile your scss into <ui.Code>dist</ui.Code>
            and afterward run <ui.Code>npm run css:autoprefixer</ui.Code> to add vendor-prefixes to your compiled
            CSS file. As we don't want to run the scripts one after another, let's add another script to the
            <ui.Code>package.json</ui.Code>, which will run the scripts sequentially by connecting the scripts with
            <ui.Code>&&</ui.Code>.
        </p>

        <CodeBlock
            language="json"
            value={'"build:css": "npm run css:scss && npm run css:autoprefixer"'}
        />

        <p>
            By running <ui.Code>npm run build:css</ui.Code>, you will now run firstly <ui.Code>npm run css:scss</ui.Code> and
            afterward <ui.Code>npm run css:autoprefixer</ui.Code>.
        </p>

        <h3 id="csslinting">Linting</h3>

        <p>
            Finally, we'll use <a href="https://www.npmjs.com/package/stylelint" target="_blank" rel="noopener">stylelint</a> to
            make sure we have no errors in our CSS and to be able to enforce code conventions. <br/>
            Therefore install the npm module stylelint together with postcss-scss as we're using scss:
        </p>

        <p><ui.Code>npm i -D stylelint postcss-scss</ui.Code><br/></p>

        <p>
            Before we're able to add the scripts for linting, we have to add the file <ui.Code>.stylelintrc</ui.Code>. This file will contain
            the rules, which <ui.Code>stylelint</ui.Code> should apply. For more information about the rules, you can use
            check the <a href="https://stylelint.io/user-guide/rules" target="_blank" rel="noopener">documentation</a>.
        </p>

        <CodeBlock
            language="json"
            value={snippet5}
        />

        <p>
            Afterward, we can add the script for linting and update our <ui.Code>build:css</ui.Code> to start
            with linting, so we catch errors before the file is compiled.
        </p>

        <CodeBlock
            language="json"
            value={snippet4}
        />

        <p>
            Now <ui.Code>npm run build:css</ui.Code> should execute successfully (except if you have errors in your css).
            Next, I will add some automation, as we don't want to run the script manually everytime we change something.
        </p>

        <h2 id="simplifybuild">Simplifying The Build</h2>

        <p>
            First I'll add a script, which will watch the <ui.Code>/src/scss</ui.Code> directory
            for changes and will run <ui.Code>build:css</ui.Code>, whenever something changes. For that, I will
            use <a href="https://www.npmjs.com/package/onchange" target="_blank" rel="noopener">onchange</a>.
        </p>

        <p><ui.Code>npm i -D onchange</ui.Code><br/></p>

        <p>Now add the script to the <ui.Code>package.json</ui.Code>:</p>

        <CodeBlock
            language="json"
            value={`"watch:css": "onchange \\"src/scss\\" -- npm run build:css"`}
        />

        <p>
            If you now run <ui.Code>npm run watch:css</ui.Code> it should automatically run your <ui.Code>build:css</ui.Code> script
            whenever you change something in an scss file.
            Let's get rid of the manual browser refresh next. For this, we'll
            add <a href="https://www.npmjs.com/package/browser-sync" target="_blank" rel="noopener">browser-sync</a>, to
            auto-refresh the browser. This will run a local server, which also enables us to test directly on other devices.<br/>
            To install it run:
        </p>

        <p><ui.Code>npm i -D browser-sync</ui.Code><br/></p>

        <p>
            Afterward, the corresponding script can be added to the <ui.Code>package.json</ui.Code>
        </p>

        <CodeBlock
            language="json"
            value={`"serve": "browser-sync start --server \\"dist\\" --files \\"dist\\""`}
        />

        <p>
            As this will only watch the <ui.Code>dist</ui.Code> directory, so we need to move our <ui.Code>index.html</ui.Code> there.
            No worries, we'll have a better solution later, when we come to the HTML part :)
        </p>
        <p>
            After moving the <ui.Code>index.html</ui.Code>, we need to update the stylesheet link
            to <ui.Code>href="/index.css"</ui.Code>. If you now run <ui.Code>npm run serve</ui.Code>
            your website should automatically open in the browser and you should see something
            like this in your console:
        </p>

        <img src="/blog/static-website/browser-sync.png" alt="browser sync console output" />

        <p>
            This means you don't need to open the <ui.Code>index.html</ui.Code> to preview your website, but can just visit
            <ui.Code>localhost:3000</ui.Code>. This page will automatically refresh if something in your <ui.Code>dist</ui.Code> directory
            changes. If you want to see your website on other devices, you can do that now by opening the external url on your device.
        </p>

        <p>
            And as a last step for the CSS, I will add a script to run the <ui.Code>watch</ui.Code> script and the browser-sync together. Sadly npm
            doesn't have a native way to run scripts in parallel for all operating systems. (the <ui.Code>&</ui.Code> operator only
            works on UNIX environments). Thus I'll install <a href="https://www.npmjs.com/package/npm-run-all" target="_blank" rel="noopener">npm-run-all</a>.
        </p>

        <p><ui.Code>npm i -D npm-run-all</ui.Code><br/></p>

        <p>
            Afterward, we can add the script to the <ui.Code>package.json</ui.Code>
        </p>

        <CodeBlock
            language="json"
            value={`"watch": "run-p serve watch:css"`}
        />

        <p>
            Now we're already in a good state for developing modern websites. By running
            <ui.Code>npm run watch</ui.Code> we are watching for changes in our directory
            <ui.Code>src/scss</ui.Code> and compile our <ui.Code>scss</ui.Code> into the
            <ui.Code>dist</ui.Code> directory. Also, we have autoprefixing and linting for
            our CSS in place. Additionally, the script is running a development server, which
            automatically refreshes our browser whenever something in <ui.Code>dist</ui.Code>
            changes.
        </p>

        <p>
            Next, we'll have a look at how to add images to our build process.
        </p>

        <h2 id="images">The Images</h2>

        <p>
            The only thing we'll do here is
            adding a script, which will minify the images. This will improve the page speed
            as the images have a reduced file size. To do this, go to your console again and
            install <a href="https://www.npmjs.com/package/imagemin-cli" target="_blank" rel="noopener">imagemin-cli</a>.
        </p>

        <p><ui.Code>npm i -D imagemin-cli</ui.Code><br/></p>

        <p>
            Afterward, we can add the scripts for building and watching the directory
            <ui.Code>src/images</ui.Code>.
        </p>

        <CodeBlock
            language="json"
            value={snippet6}
        />

        <p>
            If you now run <ui.Code>npm run build:images</ui.Code> it will minify all images
            in your directory <ui.Code>src/images</ui.Code> and store them in <ui.Code>dist/images</ui.Code>.
            The watch script will look for changes in <ui.Code>src/images</ui.Code> and will run the build
            script whenever something changes. Now we'll add a build script. This will run all the scripts,
            which start with <ui.Code>build:</ui.Code>. Also let's update the <ui.Code>watch</ui.Code> script
            to run both, the <ui.Code>watch:css</ui.Code> and <ui.Code>watch:images</ui.Code> script.
        </p>

        <CodeBlock
            language="json"
            value={snippet7}
        />

        <p>
            The <ui.Code>*</ui.Code> operator makes the scripts run all other scripts starting with <ui.Code>watch:</ui.Code> or
            <ui.Code>build:</ui.Code>. If you have your <ui.Code>npm run watch</ui.Code> script still running, you need to restart it.
        </p>

        <p>
            Now we're ready to integrate JavaScript on our website.
        </p>

        <h2 id="javascript">The JavaScript</h2>

        <h3 id="webpackbabel">Webpack & Babel</h3>

        <p>
            For JavaScript, I want to be able to use modern syntax without having to worry about browser compatibility. Therefore I'll
            use <a href="https://www.npmjs.com/package/webpack-cli" target="_blank" rel="noopener">webpack</a> together
            with <a href="https://babeljs.io" target="_blank" rel="noopener">babel</a>. So let's install the required
            npm modules:
        </p>

        <p><ui.Code>npm i -D webpack webpack-cli babel-loader @babel/preset-env</ui.Code><br/></p>

        <p>
            Afterward, we need to add a configuration file to make this work. So create a
            file <ui.Code>webpack.config.js</ui.Code> in your project root with the following content:
        </p>

        <CodeBlock
            language="javascript"
            value={snippet8}
        />

        <p>
            Next, let's update the <ui.Code>package.json</ui.Code> with the scripts for our JavaScript
            build.
        </p>

        <CodeBlock
            language="json"
            value={snippet9}
        />

        <p>
            This will use the development mode when we're watching the files and the production mode
            when we run <ui.Code>npm run build</ui.Code>. Now we can add our entry point for the js.
            This will be <ui.Code>src/js/main.js</ui.Code>. I'd recommend keeping the JavaScript modular by
            adding the logic into other files and include them in the <ui.Code>main.js</ui.Code> with the
            import syntax (eg. <ui.Code>import './someModule'</ui.Code>)
        </p>

        <p>
            Of course, we still need to include the bundled JavaScript at right before
            the <ui.Code>{`</body>`}</ui.Code> of our <ui.Code>index.html</ui.Code>.
        </p>

        <CodeBlock
            language="markup"
            value={`<script src="./bundle.js"></script>`}
        />

        <h3 id="jslinting">Linting</h3>

        <p>
            For JavaScript, it makes also sense to include a linter to keep the code more consistent
            and to avoid bugs. To introduce linting I'll
            use <a href="https://www.npmjs.com/package/eslint" target="_blank" rel="noopener">eslint</a>.
        </p>

        <p><ui.Code>npm i -D eslint eslint-webpack-plugin</ui.Code><br/></p>

        <p>
            To enable the linting, we still need to create a configuration file and add the
            module to our webpack configuration. First, let's create the configuration
            file <ui.Code>.eslintrc</ui.Code> in our project root. The following is the default
            configuration - you can, of course, change the rules according to your preferences.
        </p>

        <p>
            If you want to read more about JavaScript linting, I'd recommend reading the blog
            post <a href="https://blog.geographer.fr/eslint-guide" target="_blank" rel="noopener">ESLint configuration and best practices</a>
        </p>

        <CodeBlock
            language="javascript"
            value={snippet10}
        />

        <p>
            Afterward, we the ESLintPlugin to our <ui.Code>webpack.config.js</ui.Code> to check
            eslint before running the <ui.Code>babel-loader</ui.Code>.
        </p>

        <CodeBlock
            language="javascript"
            value={snippet11}
        />

        <p>
            Now our JavaScript is setup to use modern syntax and to check our code for errors and consistency.
            As the last thing, we will add HTML processing to our project.
        </p>

        <h2 id="html">The HTML</h2>

        <p>
            For the HTML I'll introduce <a href="https://www.npmjs.com/package/posthtml" target="_blank" rel="noopener">posthtml</a>, together
            with <a href="https://www.npmjs.com/package/posthtml-modules" target="_blank" rel="noopener">posthtml-modules</a>. This will
            enable us to use HTML partials. This makes most sense if you're building a website
            with multiple pages, to reduce code duplication. Also, we'll
            add <a href="https://www.npmjs.com/package/htmlnano">htmlnano</a> to minify the HTML and
            reduce the file size.
        </p>

        <p><ui.Code>npm i -D posthtml posthtml-cli posthtml-modules htmlnano</ui.Code><br/></p>

        <p>
            Then create the file <ui.Code>posthtml.json</ui.Code> in the project root, which will contain the configuration
            for the posthtml build.
        </p>

        <CodeBlock
            language="json"
            value={snippet12}
        />

        <p>
            This will tell posthtml to render all HTML files from <ui.Code>src/views</ui.Code> into dist.
            Now we only need to move the <ui.Code>index.html</ui.Code> from <ui.Code>dist</ui.Code> to <ui.Code>src/views</ui.Code> and
            update the <ui.Code>package.json</ui.Code> with the last scripts.
        </p>

        <CodeBlock
            language="json"
            value={snippet13}
        />

        <p>
            Now we're able to use split our HTML into modules. For example I'll move the code from the head
            to a new file in <ui.Code>src/views/components/head.html</ui.Code>.
        </p>

        <CodeBlock
            language="markup"
            value={snippet14}
        />

        <p>
            Now we can add this module easily in every file by including
        </p>

        <CodeBlock
            language="markup"
            value={'<module href="/components/head.html"></module>'}
        />

        <p>
            So our final <ui.Code>index.html</ui.Code> for this demo should look like this:
        </p>

        <CodeBlock
            language="markup"
            value={snippet15}
        />

        <p>
            That's it. The final project structure will look like this:
        </p>

        <img src="/blog/static-website/finalstructure.png" alt="final structure of the project" />

        <p>
            The final repository can be found on <a href="https://github.com/wwebdev/static-website-template" target="_blank" rel="noopener">GitHub</a>.
        </p>

        <br />
    </ArticleLayout>
)

export default Post
