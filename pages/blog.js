import React from 'react'
import * as ui from '../ui'
import { Layout } from '../components'
import { generateArticles } from '../content/generator'

const Home = () => (
    <Layout
        title="A Blog about Web-Development"
    >
        <ui.Container>
            { generateArticles() }
        </ui.Container>
    </Layout>
)

export default Home
