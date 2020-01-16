import React from 'react'
import * as ui from '../../ui'
import { SubscribeForm, Layout, Comments, PrevNext } from '../../components'
import meta from '../../content/articles'

const postId = 3
const postMeta = meta.find(m => m.id === postId)

const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image="/blog/3-notebook.jpg"
    >
        <ui.ArticleContainer as="article">
            <p>There are tons of note taking apps out there. But which ones are best suitable for developers? In the following I'll introduce three note taking apps for developers with good code support.</p>
            <h3>Notion</h3>
            <ui.BlockLink href="https://www.notion.so/" target="_blank" rel="noopener">
                https://www.notion.so/
            </ui.BlockLink>
            <img src="/blog/3-notion.png" alt="notion screenshot" />
            <br />
            <p>
                + Available for: Mac, Windows, Android, iOS <br />
                + Nice Code editor with a lot of languages <br />
                + Easy to use <br />
                + Cloud-Sync <br />
                + A lot of features and available templates <br />
                <br />
                - Limits on free version
            </p>

            <p>
                From the apps I've reviewed, Notion is the simplest one to use.
                It has a lot of templates and supports a lot of programming languages.
                It also has cloud-sync out of the box and supports all major operating systems.
                The free version has a limeted file upload size of 5mb and is limited to up to 1000 blocks,
                which could be reached after a few month of taking notes.
            </p>

            <h3>Boostnote</h3>
            <ui.BlockLink href="https://boostnote.io/" target="_blank" rel="noopener">
                https://boostnote.io/
            </ui.BlockLink>
            <img src="/blog/3-boostnote.png" alt="boostnote screenshot" />
            <br />
            <p>
                + Available for Mac, Windows, Linux, Android, iOS<br />
                + Open-Source & Free<br />
                + Nice way of organizing snippets<br />
                + Markdown-Editor<br />
                <br />
                - Not in mobile stores<br />
                - Needs 3rd party for sync
            </p>
            <p>
                Boostnote has a really neat way of organizing snippets and is completely free.
                The downside is the need for a 3rd party tool like dropbox for syncing between devices.
                It also supports all major operating systems but is not available on the Google and iOS stores and needs to be installed manually.
            </p>

            <h3>HackMD</h3>
            <ui.BlockLink href="https://hackmd.io/" target="_blank" rel="noopener">
                https://hackmd.io/
            </ui.BlockLink>
            <img src="/blog/3-hackmd.png" alt="hackmd screenshot" />
            <br />
            <p>
                + Available for Mac, Windows & online<br />
                + Lightweight<br />
                + Markdown-Editor<br />
                + Open-Source & Free<br />
                + GitHub / Gist integration<br />
                <br />
                - No mobile apps<br />
                - can't organize notes in notebooks
            </p>
            <p>
                HackMD may not be as beautiful as the other two but has a nice integration with GitHub.
                Organizing is not handled as nicely as in the other two apps but it's free as well and you
                can edit your notes right in the browser without downloading an app.
            </p>
            <h3>Summary:</h3>
            <p>
                <i>Notion</i> is the most intuitive one. But the limitation of blocks for the free version might cause the need to update to a paid version after a few month.
            </p>
            <p>
                <i>Boostnote</i> however is completely free. A little more setup is needed but then you're future proof.
            </p>
            <p>
                <i>HackMD</i> would be the best choice if you don't want to download an app or want a nice GitHub integration.
            </p>
            <br />

            <SubscribeForm />

            <PrevNext postId={postId} isArticle={true} />

            <Comments />
        </ui.ArticleContainer>
    </Layout>
)

export default Post
