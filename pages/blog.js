import React from 'react'
import * as ui from '../ui'
import Ad, { ids } from '../components/Ads/Ad'
import Layout from '../components/Layout'
import SubscribeForm from '../components/SubscribeForm'
import { generateArticles } from '../content/generator'

const Home = () => {
    return (
        <Layout title="A Blog about Web-Development">
            <ui.Container>
                <ui.SidebarContainer>
                    <ui.SidebarMain>
                        <Ad id={ids.topMobile} />
                        <ui.SectionHeadline>Latest Blog Posts around Web Development</ui.SectionHeadline>
                        { generateArticles() }
                        <SubscribeForm />
                    </ui.SidebarMain>
                    <ui.Sidebar>
                        <Ad id={ids.sidebar} />
                        <Ad id={ids.sidebarMiddle} />
                        <Ad id={ids.sidebarBottom} />
                    </ui.Sidebar>
                </ui.SidebarContainer>
            </ui.Container>
        </Layout>
    )
}

export default Home
