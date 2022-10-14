import React from 'react'
import Link from 'next/link'
import * as ui from '../ui'
import Layout from '../components/Layout'
import SubscribeForm from '../components/SubscribeForm'
import Featured from '../components/Featured'
import Ad from '../components/Ads/Ad'
import { generateWeekly, generateArticleAndResources } from '../content/generator'

const Home = () => (
  <Layout
    title="News, Resources and Articles, Templates about Web-Development"
    description="Stay up to date with weekly updates, get resources for your next projects abd read articles and tutorials about web development."
    titleNameFirst={true}
  >
    <ui.Container>
      <ui.SidebarContainer>
        <ui.SidebarMain>
          <ui.SectionHeadline>Featured</ui.SectionHeadline>
          <Featured />

          <ui.SectionHeadline>Latest Articles & Resources</ui.SectionHeadline>

          { generateArticleAndResources(7) }

          <Link href="/blog"><a>
            See blog posts
          </a></Link>

          <Link href="/resources"><a>
            See all resources
          </a></Link>
        </ui.SidebarMain>
        <ui.Sidebar>
          <ui.SectionHeadline>Latest News</ui.SectionHeadline>

          <Ad />
          <br />

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
