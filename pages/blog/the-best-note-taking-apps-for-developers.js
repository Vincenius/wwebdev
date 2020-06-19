import React from 'react'
import * as ui from '../../ui'
import CodeBlock from '../../components/CodeBlock'
import ArticleLayout from '../../components/ArticleLayout'

const Post = () => (
    <ArticleLayout id={3}>
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
        </p>

        <p>
            From the apps I've reviewed, Notion is the simplest one to use.
            It has a lot of templates and supports a lot of programming languages.
            It also has cloud-sync out of the box and supports all major operating systems.
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


        <h3>Milanote</h3>
        <ui.BlockLink href="https://milanote.com/" target="_blank" rel="noopener">
            https://milanote.com/
        </ui.BlockLink>
        <img src="/blog/3-milanote.jpg" alt="milanote screenshot" />
        <br />
        <p>
            + Available for Mac, Windows, Android, iOS & online<br />
            + Nice visual editor<br />
            + Easy to link and nest notes<br />
            + Cloud-Sync <br />
            + Team collaboration on notes <br />
            <br />
            - Limited to 100 elements & 10 files on free plan
        </p>
        <p>
            Milanote has a cool visual approach to taking notes and is very intuitive to use.
            It's possible to upload files and even preview them in the editor. It shines when it comes to linking and nesting notes.
            They also offer the possibility to collaborate on notes with your team.
            It has Apps for all major systems and is also usable in the browser.
            The downside is the limit of 100 elements on the free version.
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
            <i>Notion</i> is the most intuitive one. Since 2020 they removed the biggest limits on their free plan, which makes it a great choice.
        </p>
        <p>
            <i>Boostnote</i> however is completely free and open source but a little more setup is needed.
        </p>
        <p>
            <i>Milanote</i> has a more visual approach but is limited to 100 elements on the free plan. It can be great for project specific notes.
        </p>
        <p>
            <i>HackMD</i> would be the best choice if you don't want to download an app or want a nice GitHub integration.
        </p>
        <br />
    </ArticleLayout>
)

export default Post
