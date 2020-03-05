import React from 'react'
import * as ui from '../../ui'
import { CodeBlock, Layout, Comments, PrevNext } from '../../components'
import meta from '../../content/articles'

const postId = 6
const postMeta = meta.find(m => m.id === postId)

const snippet1 = ``

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
                as this is one of my most common base structures.
            </p>
            <p>
                In this post I'll explain how Yeoman works and how you can setup your own generator.
                First of all you'll have to install Yeoman and the <ui.Code>generator-generator</ui.Code> from
                Yeoman, which helps setting up new generators.
            </p>
            <p>
                <ui.Code>npm install -g yo generator-generator</ui.Code>
            </p>
            <p>
                Now you can scaffold your generator by typing <ui.Code>yo generator</ui.Code> and
                going through the wizard.
            </p>
            <p>
                To be able to test your generator locally, you'll have to install your project dependencies
                and symlink a global module to your local file by typing:
            </p>
            <p>
                <ui.Code>npm link</ui.Code>
            </p>
            <p>
                Now you'll be able to run your generator by typing <ui.Code>yo name</ui.Code>.
                I'd recommend to open a new workspace for that, so you're not messing up your generator project.
            </p>


            <CodeBlock
                language="javascript"
                value={snippet1}
            />

            <PrevNext postId={postId} isArticle={true} />

            <Comments />
        </ui.ArticleContainer>
    </Layout>
)

export default Post
