import React from 'react'
import * as ui from '../../ui'
import { CodeBlock, Layout, Comments, PrevNext } from '../../components'
import meta from '../../content/articles'

const postId = 6
const postMeta = meta.find(m => m.id === postId)

const snippet1 = `prompting() {
    // Have Yeoman greet the user.
    this.log(
        yosay(\`Welcome to the slick \${chalk.red('generator-yeoman-demo')} generator!\`)
    );

    const prompts = [
        {
            type: 'confirm',
            name: 'someAnswer',
            message: 'Would you like to enable this option?',
            default: true
        }
    ];

    return this.prompt(prompts).then(props => {
        // To access props later use this.props.someAnswer;
        this.props = props;
    });
}`

const snippet2 = `{
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
}`

const snippet3 = `writing() {
    this.fs.copy(
        this.templatePath('dummyfile.txt'),
        this.destinationPath('dummyfile.txt')
    );
}`

const snippet4 = `this.templatePath('**/*'),
this.destinationPath()`

const snippet5 = `this.fs.copyTpl(
    this.templatePath('**/*'),
    this.destinationPath(),
    { projectName: this.props.projectName }
);`

const snippet6 = `install() {
    this.installDependencies();
}`

const snippet7 = `this.installDependencies({
    npm: false,
    bower: true,
    yarn: true
});`

const snippet8 = `install() {
    if (this.props.installLodash) {
        this.npmInstall(['lodash'], { 'save-dev': true });
    }
}`

const snippet9 = `prompting() {
    // Have Yeoman greet the user.
    this.log(
        yosay(\`Welcome to the slick \${chalk.red('generator-yeoman-demo')} generator!\`)
    );

    const prompts = [
        {
            type: "input",
            name: "name",
            message: "Your project name",
            default: this.appname // Default to current folder name
        },
        {
            type: 'confirm',
            name: 'someAnswer',
            message: 'Would you like to enable this option?',
            default: true
        },
        {
            type: 'confirm',
            name: 'anotherAnswer',
            message: 'Would you like to enable this option too?',
            default: true
        }
    ];

    return this.prompt(prompts).then(props => {
        // To access props later use this.props.someAnswer;
        this.props = props;
    });
}`

const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image={postMeta.previewImage}
    >
        <ui.ArticleContainer as="article">
            <p>
                I found myself often copy pasting code from other projects when starting new projects.
                This is why I created a Yeoman generator, which setups
                a <a href="https://github.com/Vincenius/generator-next-styled-components" target="blank" rel="noopener noreferrer">nextjs project with styled components</a>,
                as this is one of my most commonly used base structures.
            </p>
            <img src="/blog/yeoman/demo.gif" alt="yeoman generator demonstration" />

            <h2>Creating your own generator</h2>
            <p>
                In this post I'll explain how Yeoman works and how you can setup your own generator.
                First of all you'll have to globally install <a href="https://yeoman.io/" target="blank" rel="noopener noreferrer">Yeoman </a> and
                the <a href="https://github.com/yeoman/generator-generator" target="blank" rel="noopener noreferrer">generator-generator</a> from
                Yeoman, which helps setting up new generators.
            </p>
            <CodeBlock value="npm install -g yo generator-generator" />
            <p>
                Now you can scaffold your generator by typing <ui.Code>yo generator</ui.Code> and
                going through the wizard. Afterward, the structure of your project should look like this:
            </p>
            <ui.SmallImage src="/blog/yeoman/structure.png" alt="yeoman generator structure" />
            <p>
                To be able to test your generator locally, you'll have to symlink a
                global module to your local file by going into your generated directory and typing:
            </p>
            <CodeBlock value="npm link" />
            <p>
                Now you'll be able to run your generator by typing <ui.Code>yo name-of-your-generator</ui.Code>.
                I'd recommend to open a new workspace for that, so you're not messing up your generator project.
            </p>
            <p>
                The interesting part of the generator is happening inside <ui.Code>generators/app/</ui.Code>.
                Let's have a look at the <ui.Code>index.js</ui.Code> in the app folder first. The exported class
                includes three functions: <ui.Code>prompting()</ui.Code>, <ui.Code>writing()</ui.Code> and <ui.Code>install()</ui.Code>
            </p>

            <h3>prompting()</h3>

            <CodeBlock
                language="javascript"
                value={snippet1}
            />

            <p>
                In the beginning the function greets the user with <ui.Code>this.log()</ui.Code>. Afterward, the
                questions for the user of the generator are defined in the constant <ui.Code>prompts</ui.Code>.
                At the end the answers to these prompts are stored in <ui.Code>this.props</ui.Code>.
            </p>
            <p>
                To add prompts for the user, you just need to extend the <ui.Code>prompts</ui.Code> array. A question
                for the name of the project would look like this:
            </p>

            <CodeBlock
                language="javascript"
                value={snippet2}
            />

            <p>
                For more information about user interactions check
                the <a href="https://yeoman.io/authoring/user-interactions.html" target="blank" rel="noopener noreferrer">Yeoman documentation</a>.
            </p>

            <h3>writing()</h3>

            <CodeBlock
                language="javascript"
                value={snippet3}
            />

            <p>
                This is where the magic happens. This default code takes the file <ui.Code>dummyfile.txt</ui.Code> from
                the directory <ui.Code>generators/app/templates</ui.Code> and copies it to the directory from where the
                the generator is called. If you want to just copy all files from the <ui.Code>templates</ui.Code> folder
                you can also use wildcard selectors:
            </p>

            <CodeBlock
                language="javascript"
                value={snippet4}
            />

            <p>
                Of course we also want to make use of the prompts the user answered. Therefore we have to change
                the <ui.Code>this.fs.copy</ui.Code> function to <ui.Code>this.fs.copyTpl</ui.Code> and pass the
                prop to the function:
            </p>

            <CodeBlock
                language="javascript"
                value={snippet5}
            />

            <p>
                For the filesystem Yeoman is using
                the <a href="https://github.com/sboudrias/mem-fs-editor" target="blank" rel="noopener noreferrer">mem-fs-editor</a>,
                so check their documentation if you want to know more details. As templating engine Yeoman is
                using <a href="https://github.com/mde/ejs" target="blank" rel="noopener noreferrer">ejs</a>. So to make use of the
                passed variable you can include it in your files (eg. dummyfile.txt) with following syntax:
            </p>

            <CodeBlock
                language="html"
                value="Welcome to your project: <%= projectName %>"
            />

            <h3>install()</h3>
            <CodeBlock
                language="javascript"
                value={snippet6}
            />

            <p>
                This will run npm and bower install by default. But you can also pass parameter to specify what should be called.
            </p>

            <CodeBlock
                language="javascript"
                value={snippet7}
            />

            <p>
                It is also possible to install specific packages programatically by
                using <ui.Code>npmInstall()</ui.Code> or <ui.Code>yarnInstall()</ui.Code>. This makes most sense
                in combination with a check for what the user selected in the <ui.Code>prompting()</ui.Code> function:
            </p>

            <CodeBlock
                language="javascript"
                value={snippet8}
            />

            <h2>Handling user options</h2>
            <p>
                Let's have a look on how to work with user input. For that I'll add two demo options to
                the <ui.Code>prompting()</ui.Code> function:
            </p>

            <CodeBlock
                language="javascript"
                value={snippet9}
            />

            <p>
                Now we'll have <ui.Code>this.props.someAnswer</ui.Code> and <ui.Code>this.props.anotherAnswer</ui.Code> available
                in our <ui.Code>writing()</ui.Code> function.
            </p>

            <h3>Overwriting files</h3>
            TODO

            <h3>Appending files</h3>
            TODO

            <h2>Publishing your generator to the npm registry</h2>
            TODO

            <PrevNext postId={postId} isArticle={true} />

            <Comments />
        </ui.ArticleContainer>
    </Layout>
)

export default Post
