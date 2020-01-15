import React from 'react'
import * as S from '../styles/weekly'
import { Layout } from '../components'
import { generateWeekly } from '../content/generator'

const Home = () => (
    <Layout
        title="Weekly roundup of resources about web development"
    >
        <S.Container>
            { generateWeekly() }
        </S.Container>
    </Layout>
)

export default Home
