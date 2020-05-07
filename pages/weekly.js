import React from 'react'
import * as S from '../ui/weekly'
import * as ui from '../ui'
import { Layout } from '../components'
import { generateWeekly } from '../content/generator'

const Home = () => (
    <Layout title="Weekly roundup of resources about web development">
        <ui.Container>
            <ui.SectionHeadline>Weekly updates around web development and design</ui.SectionHeadline>
        </ui.Container>
        <S.Container>
            { generateWeekly() }
        </S.Container>
    </Layout>
)

export default Home
