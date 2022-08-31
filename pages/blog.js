import React from 'react'
import * as ui from '../ui'
import Layout from '../components/Layout'
import SubscribeForm from '../components/SubscribeForm'
import { generateArticles } from '../content/generator'

const Home = () => (
    <Layout title="A Blog about Web-Development">
        <ui.Container>
            <ui.SidebarContainer>
                <ui.SidebarMain>
                    <div id="ezoic-pub-ad-placeholder-103"> </div>
                    <ui.SectionHeadline>Latest Blog Posts around Web Development</ui.SectionHeadline>
                    { generateArticles() }
                    <SubscribeForm />
                </ui.SidebarMain>
                <ui.Sidebar>
                    <div id="ezoic-pub-ad-placeholder-102"> </div>
                </ui.Sidebar>
            </ui.SidebarContainer>
        </ui.Container>
    </Layout>
)

export default Home
