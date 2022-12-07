import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Newsletter from '../components/Footer/Newsletter'
import WeeklyTabs from '../components/WeeklyTabs'
import * as ui from '../ui'
import { darkGrey, lightGrey } from '../ui/constants'
import { generateWeekly } from '../content/generator'

const NewsletterContainer = styled.div`
    background: ${darkGrey};
    color: ${lightGrey};
    font-size: 14px;
    margin-bottom: 50px;
    border-radius: 10px;
`

const Weekly = () => (
    <Layout
        title="Weekly roundup of resources about web development"
        description="Stay up-to-date on the latest and greatest tools in web development. We scour the internet to bring you the most fascinating and useful links in the world of web development."
        hideNewsletter={true}
    >
        <ui.Container>
            <ui.SectionHeadline>Weekly Web Development Newsletter</ui.SectionHeadline>

            <p style={{ fontSize: '20px' }}>
                Stay up-to-date on the latest and greatest tools in web development!<br/>
                We scour the internet to bring you the most fascinating and useful links in the world of web development.<br/>
            </p>

            <p>Don't miss the next update. Drop your email below and get it straight in your inbox.</p>

            <NewsletterContainer>
                <Newsletter type="inline" />
            </NewsletterContainer>

            {/* <WeeklyTabs activeTab={0} /> */}
            <ui.SectionHeadline>Read it first</ui.SectionHeadline>
        </ui.Container>
        <ui.GridContainer>
            { generateWeekly() }
        </ui.GridContainer>
    </Layout>
)

export default Weekly
