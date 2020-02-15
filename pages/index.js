import React from 'react'
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

          <a href="/blog">
            See blog posts
          </a>

          <a href="/resources">
            See all resources
          </a>
        </ui.SidebarMain>
        <ui.Sidebar>
          <h2>Latest News</h2>

          <ui.SidebarContent>
            { generateWeekly(6) }

            <a href="/weekly">
              See all weekly news
            </a>
          </ui.SidebarContent>
        </ui.Sidebar>
      </ui.SidebarContainer>

      <SubscribeForm />
    </ui.Container>
  </Layout>
)

export default Home
