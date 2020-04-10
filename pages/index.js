import React from 'react'
import Link from 'next/link'
import * as ui from '../ui'
import { Layout, SubscribeForm } from '../components'
import { generateWeekly, generateArticleAndResources } from '../content/generator'

const Home = () => (
  <Layout
    title="News, Resources and Articles about Web-Development"
    description="Stay up to date with weekly updates, get resources for next project and read articles and tutorials about web development."
    titleNameFirst={true}
  >
    <ui.Container>
      <ui.SidebarContainer>
        <ui.SidebarMain>
          <h2>Latest Articles & Resources</h2>

          { generateArticleAndResources(7) }

          <Link href="/blog"><a>
            See blog posts
          </a></Link>

          <Link href="/resources"><a>
            See all resources
          </a></Link>
        </ui.SidebarMain>
        <ui.Sidebar>
          <h2>Latest News</h2>

          <ui.SidebarContent>
            { generateWeekly(6) }

            <Link href="/weekly"><a>
              See all weekly news
            </a></Link>
          </ui.SidebarContent>
        </ui.Sidebar>
      </ui.SidebarContainer>

      <SubscribeForm />
    </ui.Container>
  </Layout>
)

export default Home
