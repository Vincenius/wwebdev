import React from 'react'
import * as ui from '../ui'
import Ad  from '../components/Ads/Ad'
import NewsletterLink from '../components/NewsletterLink'
import Layout from '../components/Layout'
import { generateArticles } from '../content/generator'

const Home = () => {
    return (
        <Layout title="A Blog about Web-Development">
            <ui.Container>
                <ui.SidebarContainer>
                    <ui.SidebarMain>
                        <ui.SectionHeadline>Latest Blog Posts around Web Development</ui.SectionHeadline>
                        { generateArticles() }
                    </ui.SidebarMain>
                    <ui.Sidebar>
                        <Ad />
                        <br /><br />
                        <NewsletterLink />
                    </ui.Sidebar>
                </ui.SidebarContainer>
            </ui.Container>
        </Layout>
    )
}

export default Home
