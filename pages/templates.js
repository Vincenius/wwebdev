import React from 'react'
import * as ui from '../ui'
import SubscribeForm from '../components/SubscribeForm'
import Layout from '../components/Layout'
import LinkBox from '../components/LinkBox'
import templates from '../content/templates'

const Templates = () => (
    <Layout title="Templates">
        <ui.Container>
            <ui.SectionHeadline>Templates</ui.SectionHeadline>
        </ui.Container>

        <ui.GridContainer columns={2}>
            { templates.map((item, index) => <LinkBox
                fullHeight
                key={`linkbox-${index}`}
                title={item.headline}
                description={item.description}
                link={item.link}
                image={item.previewImage}
                isExternal={false}
            />)}

            <SubscribeForm isSmall={true} />
        </ui.GridContainer>
    </Layout>
)

export default Templates
