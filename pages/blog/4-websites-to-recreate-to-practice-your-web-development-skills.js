import React from 'react'
import * as ui from '../../ui'
import { SubscribeForm, Layout, Comments, PrevNext } from '../../components'
import meta from '../../content/articles'

const postId = 4
const postMeta = meta.find(m => m.id === postId)

const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image="/blog/4-duckduckgo.png"
    >
        <ui.ArticleContainer as="article">
            <p>
                The best way to learn web development is by practice.
                But when you get started you might feel lost. There are just so many things to learn,
                which makes it hard to choose the right project to get started.
            </p>
            <p>
                In the following I'll share some sites you can recreate to practice some of the basic concepts.
                I'd recommend to start from scratch and to avoid CSS frameworks in the beginning.
                Also try copy it without looking at the source code of the website.
            </p>
            <h2>
                <a href="https://duckduckgo.com/" target="_blank" rel="noopener">
                    DuckDuckGo
                </a>
            </h2>
            <img src="/blog/4-duckduckgo.png" alt="duckduckgo screenshot"/>
            <br />
            <p>
                <i>You'll learn to use:</i><br />
                - Basic CSS <br />
                - Positioning with Flexbox <br />
                - Responsiveness with media queries
            </p>

            <br />
            <h2>
                <a href="https://gridbyexample.com/" target="_blank" rel="noopener">
                    Grid by Example
                </a>
            </h2>
            <img src="/blog/4-gridbyexample.png" alt="Grid by Example screenshot"/>
            <br />
            <p>
                <i>You'll learn to use:</i><br />
                - layouts with CSS Grid
            </p>

            <br />
            <h2>
                <a href="https://pages.github.com/" target="_blank" rel="noopener">
                    GitHub Pages
                </a>
            </h2>
            <img src="/blog/4-github-pages.png" alt="Github Pages screenshot"/>
            <br />
            <p>
                <i>You'll learn:</i><br />
                - more CSS<br />
                - Basic interactivity and effects with Javascript
            </p>
            <br />

            <h2>
                <a href="https://news.ycombinator.com/" target="_blank" rel="noopener">
                    Hacker News
                </a>
            </h2>
            <img src="/blog/4-hacker-news.png" alt="Hacker News screenshot"/>
            <br />
            <p>
                <i>You'll learn how to:</i><br />
                - Fetch data from an API with Ajax<br />
                - Render dynamic data
            </p>

            <SubscribeForm />

            <PrevNext postId={postId} isArticle={true} />

            <Comments />
        </ui.ArticleContainer>
    </Layout>
)

export default Post
