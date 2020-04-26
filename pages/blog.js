import React from 'react'
import * as ui from '../ui'
import { Layout, SubscribeForm } from '../components'
import { generateArticles } from '../content/generator'

const Home = () => (
    <Layout title="A Blog about Web-Development">
        <ui.Container>
            <h2>Latest Blog Posts</h2>
            { generateArticles() }
            <SubscribeForm />
        </ui.Container>
    </Layout>
)

export default Home
