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
                In the beginning the function greets the user with <ui.Code>this.log()</ui.Code>. Afterward, some
                questions for the user of the generator are defined in the constant <ui.Code>prompts</ui.Code>.
            </p>

            <PrevNext postId={postId} isArticle={true} />

            <Comments />
        </ui.ArticleContainer>
    </Layout>
)

export default Post
