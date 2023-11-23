import React from 'react'
import * as ui from '../ui'
import SidebarLayout from '../components/Layout/SidebarLayout'
import { generateArticles } from '../content/generator'

const Home = () => {
    return (
        <SidebarLayout title="A Blog about Web-Development">
            <ui.SectionHeadline>Blog posts around web development</ui.SectionHeadline>
            { generateArticles() }
        </SidebarLayout>
    )
}

export default Home
