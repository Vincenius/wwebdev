import React from 'react'
import * as ui from '../../ui'
import { CodeBlock, Layout, Comments, PrevNext, SubscribeForm } from '../../components'
import meta from '../../content/articles'

const postId = 8
const postMeta = meta.find(m => m.id === postId)

const Post = () => (
  <Layout
      isArticle={true}
      title={postMeta.headline}
      date={postMeta.date}
      updatedAt={postMeta.updatedAt}
      link={`https://wweb.dev${postMeta.link}`}
      description={postMeta.description}
      image={postMeta.previewImage}
  >
    <ui.ArticleContainer as="article">
      <p>
        When I got started in web development, I never knew where to start when creating a new website.
        I was overwhelmed by possibilities as if I was looking at a blank canvas and didn't know what to draw.
      </p>
      <p>
        Over time I came up with a process that helped me not only getting started. It also helped to make
        the websites more user-friendly and better looking.
      </p>
      <p>
        In this post, I want to share this process.
      </p>

      <h2>The Preparation</h2>
      <p>
        As a first thing, I force myself to close the code editor, as I'm always tempted to
        just dive into coding right away.
      </p>
      <p>
        Then I start to think of the purpose of the website. Do I want to inform the visitor about something?
        Do I want them to sign up on some newsletter or is it something totally different?
      </p>
      <p>
        Now having this in mind, I'll think of what people most probably visit this site for. This can be
        things like <b>business hours</b>, <b>pricing</b>, <b>follow-up links</b>, or any other kind of <b>information</b>.
      </p>
      <p>
        Afterward, I write down what I want to say on my website. This doesn't have to be the final version of your texts.
        Normally I spend time in the end to polish copywriting.
      </p>
      <p>
        The most important part here is to bring your content into a structure that makes sense.
        Use <b>lists</b>, <b>tables</b>, <b>paragraphs</b>, <b>quotes</b> and more.
      </p>
      <p>
        Now having your content structured you can get started on making it look good.
      </p>

      <h2>The Design</h2>
      <p>
        Often I already have ideas for the specific elements in my mind. But it sure helps to check
        out <a href="https://wweb.dev/resources/websites-for-inspiration" target="_blank" rel="noopener noreferrer">other websites for inspiration</a>.
      </p>
      <p>
        I don't look at the whole website for inspiration. Instead I look at the specific structures, I came up with when I wrote
        down the content. This way I don't force my content into some template, which doesn't really match.
        This could look like this:
      </p>

      <img
        alt="example of how a list gets transformed into a design"
        src="/blog/craft-websites-example.jpg"
      />

      <p>
        Then I take a paper and draw the structure of my site by roughly sketching the elements I have in mind
        or that I've found on my research.
      </p>
      <p>
        Afterwards, it depends on the scope of the project if I convert this drawing into a proper design by
        using design tools like Figma, Sketch, or Adobe XD. Usually I skip this step as I mostly work on small
        private projects.
      </p>

      <h2>The Coding</h2>

      <p>Then the (for me) fun part can begin: coding the website.</p>
      <p>
        First of all I decide if I want to go with a design library or want to create everything from scratch.
        This depends on the design/draft, created in the previous step.
      </p>
      <p>
        I rarely finish the whole website in one take. That's why I always leave <i>TODOs</i> and refactoring
        comments in the code or in the README, while I'm in the flow of coding.
      </p>
      <p>
        This helps to get back into the project when you don't feel motivated.
        Just pick up a small refactoring instead and you'll often
        end up coding more than you originally planned to.
      </p>
      <p>
        I normally start with the desktop version and do the mobile version afterward.
        But that's just my personal preference. Just do what feels more comfortable for you.
      </p>

      <h2>Finalizing it</h2>

      <p>
        When I'm happy with the result I always verify that:
      </p>
      <ul>
        <li>
          the website is fast
          with <a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener noreferrer">Lighthouse</a> or <a href="https://developers.google.com/speed/pagespeed/insights/"  target="_blank" rel="noopener noreferrer">Pagespeed Insights</a>
        </li>
        <li>
          the website is accessible with <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">WAVE</a>
        </li>
        <li>
          that the website has proper SEO with <a href="https://www.seoptimer.com/" target="_blank" rel="noopener noreferrer">Seoptimer</a>
        </li>
      </ul>

    </ui.ArticleContainer>
  </Layout>
)

export default Post
