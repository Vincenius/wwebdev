import React from 'react'
import * as ui from '../ui'
import Ad  from '../components/Ads/Ad'
import Layout from '../components/Layout'
import SubscribeForm from '../components/SubscribeForm'
import { generateArticles } from '../content/generator'

const Home = () => {
    return (
        <Layout title="A Blog about Web-Development">
            <ui.Container>
                <ui.SidebarContainer>
                    <ui.SidebarMain>
                        <ui.SectionHeadline>Latest Blog Posts around Web Development</ui.SectionHeadline>
                        { generateArticles() }
                        <SubscribeForm />
                    </ui.SidebarMain>
                    <ui.Sidebar>
                        <Ad />
                    </ui.Sidebar>
                </ui.SidebarContainer>
            </ui.Container>
        </Layout>
    )
}

export default Home
