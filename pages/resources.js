import React from 'react'
import * as ui from '../ui'
import { ArticlePreview, SubscribeForm, Layout } from '../components'
import { generateResources } from '../content/generator'

const Home = () => (
    <Layout
        title="A Blog about Web-Development"
    >
        <ui.Container>
            { generateResources() }
            <SubscribeForm />
        </ui.Container>
    </Layout>
)

export default Home
