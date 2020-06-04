import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Layout from '../components/Layout'
import * as ui from '../ui'
import { weeklyData } from '../content/weekly'
import { generateWeekly, generateWeeklyContent } from '../content/generator'

const Weekly = () => {
    const [activeTab, setActiveTab] = React.useState(0)
    const handleChange = (event, newValue) => {
        setActiveTab(newValue)
    }

    // TODO move this out of component
    const { status, data, error } = useQuery(`allWeeklies`, async () => {
        const weeklyPromises = weeklyData.map(async w => {
            const response = await fetch(`/weekly/data/${w.id}.json`)
            const result = await response.json()
            return result.items
        })
        const response = await Promise.all(weeklyPromises)
        return response
    })

    return (
        <Layout title="Weekly roundup of resources about web development">
            <ui.Container>
                <ui.SectionHeadline>Weekly updates around web development and design</ui.SectionHeadline>
                    <Tabs
                        value={activeTab}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="by Week" />
                        <Tab label="by Content" />
                    </Tabs>
            </ui.Container>
            <ui.GridContainer>
                { activeTab === 0 && generateWeekly() }
                { activeTab === 1 && status === 'loading' && <div>loading</div> }
                { activeTab === 1 && generateWeeklyContent(data.flat()) }
            </ui.GridContainer>
        </Layout>
    )
}

export default Weekly
