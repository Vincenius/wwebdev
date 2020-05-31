import React from 'react'
import Layout from '../components/Layout'
import { generateWeekly } from '../content/generator'
import * as ui from '../ui'

const Home = () => (
    <Layout title="Weekly roundup of resources about web development">
        <ui.Container>
            <ui.SectionHeadline>Weekly updates around web development and design</ui.SectionHeadline>
        </ui.Container>
        <ui.GridContainer>
            { generateWeekly() }
        </ui.GridContainer>
    </Layout>
)

export default Home
