import React from 'react'

import Layout from '../components/Layout'
import * as ui from '../ui'

const Weekly = () => (
    <Layout
        title="Weekly roundup of resources about web development"
        description="Stay up-to-date on the latest and greatest tools in web development. We scour the internet to bring you the most fascinating and useful links in the world of web development."
    >
        <ui.Container>
            <ui.SectionHeadline>Weekly Web Development Newsletter</ui.SectionHeadline>

            <p>
                Update 2023-08-16: The weekly webdev newsletter moved to a separate page.<br/><br/>

                Browse all 1600+ resources I've collected over the past 4 years on

                <h3><a href="https://webdev.town">WebDev Town</a></h3>
            </p>
        </ui.Container>
    </Layout>
)

export default Weekly
