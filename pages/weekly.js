import React from 'react'
import * as S from '../styles/weekly'
import * as ui from '../ui'
import { Layout } from '../components'
import { generateWeekly } from '../content/generator'

const Home = () => (
    <Layout title="Weekly roundup of resources about web development">
        <ui.Container>
            <h2>Weekly updates around web development and design</h2>
        </ui.Container>
        <S.Container>
            { generateWeekly() }
        </S.Container>
    </Layout>
)

export default Home
