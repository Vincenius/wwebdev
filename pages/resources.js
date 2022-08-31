import React from 'react'
import * as ui from '../ui'
import SubscribeForm from '../components/SubscribeForm'
import Layout from '../components/Layout'
import { generateResources } from '../content/generator'

const Home = () => (
    <Layout title="Free Resources and Tools for your usage">
        <ui.Container>
            <ui.SidebarContainer>
                <ui.SidebarMain>
                    <div id="ezoic-pub-ad-placeholder-103"> </div>
                    <ui.SectionHeadline>Resources and Tools around Web Development</ui.SectionHeadline>
                    { generateResources() }
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
