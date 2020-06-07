import React, { useState } from 'react'

import Layout from '../components/Layout'
import WeeklyTabs from '../components/WeeklyTabs'
import * as ui from '../ui'
import { weeklyData } from '../content/weekly'
import { generateWeekly } from '../content/generator'

const Weekly = () => (
    <Layout title="Weekly roundup of resources about web development">
        <ui.Container>
            <ui.SectionHeadline>Weekly updates around web development and design</ui.SectionHeadline>
            <WeeklyTabs activeTab={0} />
        </ui.Container>
        <ui.GridContainer>
            { generateWeekly() }
        </ui.GridContainer>
    </Layout>
)

export default Weekly
