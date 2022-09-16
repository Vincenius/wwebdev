import React from 'react'
import * as ui from '../ui'
import SubscribeForm from '../components/SubscribeForm'
import Layout from '../components/Layout'
import Ad, { ids } from '../components/Ads/Ad'
import { generateResources } from '../content/generator'

const Home = () => (
    <Layout title="Free Resources and Tools for your usage">
        <ui.Container>
            <ui.SidebarContainer>
                <ui.SidebarMain>
                    <Ad id={ids.topMobile} />
                    <ui.SectionHeadline>Resources and Tools around Web Development</ui.SectionHeadline>
                    { generateResources() }
                    <SubscribeForm />
                </ui.SidebarMain>
                <ui.Sidebar>
                    <Ad id={ids.sidebar} />
                </ui.Sidebar>
            </ui.SidebarContainer>
        </ui.Container>
    </Layout>
)

export default Home
