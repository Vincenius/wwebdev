import React from 'react'
import * as ui from '../ui'
import Layout from '../components/Layout'
import SubscribeForm from '../components/SubscribeForm'
import { generateArticles } from '../content/generator'

const Home = () => (
    <Layout title="A Blog about Web-Development">
        <ui.Container>
            <ui.SectionHeadline>Latest Blog Posts around Web Development</ui.SectionHeadline>
            { generateArticles() }
            <SubscribeForm />
        </ui.Container>
    </Layout>
)

export default Home
