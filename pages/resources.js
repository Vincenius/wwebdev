import React from 'react'
import * as ui from '../ui'
import Layout from '../components/Layout'
import Ad from '../components/Ads/Ad'
import NewsletterLink from '../components/NewsletterLink'
import SponsorNinjaWidget from '../components/SponsorNinja'
import { generateResources } from '../content/generator'

const Home = () => (
    <Layout title="Free Resources and Tools for your usage">
        <ui.Container>
            <ui.SidebarContainer>
                <ui.SidebarMain>
                    <ui.SectionHeadline>Resources and Tools around Web Development</ui.SectionHeadline>
                    { generateResources() }
                </ui.SidebarMain>
                <ui.Sidebar>
                    <SponsorNinjaWidget />
                    <Ad />
                    <NewsletterLink />
                </ui.Sidebar>
            </ui.SidebarContainer>
        </ui.Container>
    </Layout>
)

export default Home
