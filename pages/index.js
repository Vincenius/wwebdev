import React from 'react'
import * as ui from '../ui'
import SidebarLayout from '../components/Layout/SidebarLayout'
import { generateArticleAndResources } from '../content/generator'
import generateStaticFiles from '../utils/generateStaticFiles'

const Home = () => {
  return (
    <SidebarLayout
      title="News, Resources and Articles, Templates about Web-Development"
      description="Stay up to date with weekly updates, get resources for your next projects and read articles and tutorials about web development."
      titleNameFirst={true}
    >
      <ui.SectionHeadline>Latest Articles & Tools</ui.SectionHeadline>

      { generateArticleAndResources() }
    </SidebarLayout>
  )
}

export async function getStaticProps(context) {
  generateStaticFiles()

  return {
    props: {},
  }
}


export default Home
