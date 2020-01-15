import React from 'react'
import * as ui from '../ui'
import { Layout } from '../components'
import { generateWeekly, generateArticleAndResources } from '../content/generator'

const Home = () => (
  <Layout
    title="News, Resources and Articles about Web-Development"
  >
    <ui.Container>
      <ui.SidebarContainer>
        <div>
          <h2>Latest Articles & Resources</h2>

          { generateArticleAndResources() }
        </div>
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
    </ui.Container>
  </Layout>
)

export default Home
