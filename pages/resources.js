import React from 'react'
import * as ui from '../ui'
import SidebarLayout from '../components/Layout/SidebarLayout'
import { generateResources } from '../content/generator'

const Home = () => (
    <SidebarLayout title="Free Resources and Tools for your usage">
        <ui.SectionHeadline>Resources and Tools around Web Development</ui.SectionHeadline>
        { generateResources() }
    </SidebarLayout>
)

export default Home
