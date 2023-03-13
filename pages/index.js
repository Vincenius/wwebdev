import React from 'react'
import Link from 'next/link'
import * as ui from '../ui'
import Layout from '../components/Layout'
import Featured from '../components/Featured'
import NewsletterLink from '../components/NewsletterLink'
import SponsorNinjaWidget from '../components/SponsorNinja'
import Ad from '../components/Ads/Ad'
import { generateWeekly, generateArticleAndResources } from '../content/generator'
import generateStaticFiles from '../utils/generateStaticFiles'

const Home = () => {
  return (
    <Layout
      title="News, Resources and Articles, Templates about Web-Development"
      description="Stay up to date with weekly updates, get resources for your next projects and read articles and tutorials about web development."
      titleNameFirst={true}
    >
      <ui.Container>
        <ui.SidebarContainer>
          <ui.SidebarMain>
            <ui.SectionHeadline>Featured</ui.SectionHeadline>
            <Featured templateIds={[1]} resourceIds={[5,1]}/>

            <ui.SectionHeadline>Latest Articles & Resources</ui.SectionHeadline>

            { generateArticleAndResources(7) }

            <Link href="/blog">
              See blog posts
            </Link>

            <Link href="/resources">
              See all resources
            </Link>
          </ui.SidebarMain>
          <ui.Sidebar>
            <SponsorNinjaWidget />
            <Ad />
            <NewsletterLink />

            <ui.SectionHeadline>Latest News</ui.SectionHeadline>

            <ui.SidebarContent>
              { generateWeekly(6) }

              <Link href="/weekly">
                See all weekly news
              </Link>
            </ui.SidebarContent>
          </ui.Sidebar>
        </ui.SidebarContainer>
      </ui.Container>
    </Layout>
  )
}

export async function getStaticProps(context) {
  console.log('CALLED')
  generateStaticFiles()

  return {
    props: {},
  }
}


export default Home
