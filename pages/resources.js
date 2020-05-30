import React from 'react'
import * as ui from '../ui'
import SubscribeForm from '../components/SubscribeForm'
import Layout from '../components/Layout'
import { generateResources } from '../content/generator'

const Home = () => (
    <Layout title="Free Resources and Tools for your usage">
        <ui.Container>
            <ui.SectionHeadline>Resources and Tools around Web Development</ui.SectionHeadline>
            { generateResources() }
            <SubscribeForm />
        </ui.Container>
    </Layout>
)

export default Home
