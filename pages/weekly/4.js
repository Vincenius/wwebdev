import React from 'react'
import * as S from '../../styles/weekly'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import meta from '../../content/weekly'

const postId = 4
const postMeta = meta.find(m => m.id === postId)

const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.title}
        date={postMeta.date}
        link={postMeta.link}
        image={postMeta.image}
        description={postMeta.description}
    >
        <S.IntroText>
            Hello people, it's time for the next weekly update.<br/>
            As always feel free to share feedback and resources I should check out for the next weekly, by passing me an email:&nbsp;
            <a href="mailto:info@vincentwill.com">info@vincentwill.com</a> :)
        </S.IntroText>
        <S.Container>
            <LinkBox
                title="Nedux"
                description="A simplified version of redux. You don't have to create actions & reduces, just the store."
                link="https://github.com/lucasmrdt/nedux"
                image="/weekly/screenshots/nedux.jpg"
            />
            <LinkBox
                title="How to Use New CSS “:is()” for Easy Element Targeting"
                description='A nice article by tutspoint, about the usage of the new CSS ":is()".'
                link="https://webdesign.tutsplus.com/articles/new-css-is-for-easy-element-targeting--cms-34223"
                image="https://cms-assets.tutsplus.com/uploads/users/30/posts/34223/image/is.jpg"
            />
            <LinkBox
                title="Challenging projects every programmer should try"
                description="A list of projects to get started, when you're learning a new programming language or framework."
                link="https://web.eecs.utk.edu/~azh/blog/challengingprojects.html"
                image="https://web.eecs.utk.edu/~azh/blog/images/peaybasic.png"
            />
            <LinkBox
                title="Things end users care about but programmers don't"
                description='A list if things that end users would often like to see.'
                link="https://instadeq.com/blog/posts/things-end-users-care-about-but-programmers-dont/"
                image="/weekly/screenshots/enduserscare.jpg"
            />
            <LinkBox
                title="musicForProgramming"
                description='57 hours of non disturbing music to help you concentrate.'
                link="https://musicforprogramming.net/"
                image="/weekly/screenshots/musicforprogramming.jpg"
            />
            <LinkBox
                title="20 ways to become a better Node.js developer in 2020"
                description='A good read by Yoni Goldberg skills, technologies and considerations for Node.js in 2020.'
                link="https://medium.com/@me_37286/20-ways-to-become-a-better-node-js-developer-in-2020-d6bd73fcf424"
                image="https://miro.medium.com/max/2114/1*PYBhcIuCopivLOiBBvG0cw.png"
            />
            <LinkBox
                title="No to Chrome"
                description="They are raising awareness of how Google is shaping the internet, your present and future for its own ends."
                link="https://notochrome.org/"
                image="https://notochrome.org/wp-content/NTC-twitter-blue-big-1200x676.jpg"
            />
            <LinkBox
                title="Ten Websites For Free SVG Illustrations"
                description="A list of websites for free SVG icons, I've gather thoughout the years."
                link="https://vincentwill.com/blog/ten-websites-for-free-svg-illustrations"
                image="https://vincentwill.com/blog/5/preview.png"
                selfPromoted="New Blogpost"
            />
            <SubscribeForm type="weekly" />
        </S.Container>

        <PrevNext postId={postId} />
    </Layout>
)

export default Post