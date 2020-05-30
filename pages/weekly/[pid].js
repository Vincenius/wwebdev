import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import SubscribeForm from '../../components/SubscribeForm'
import Layout from '../../components/Layout'
import LinkBox from '../../components/LinkBox'
import PrevNext from '../../components/PrevNext'
import { weeklyData as meta } from '../../content/weekly'
import * as ui from '../../ui'

const Post = () => {
    const router = useRouter()
    const { pid } = router.query
    const weeklyMeta = meta.find(m => m.id === pid)
    const { status, data, error } = useQuery(`weekly-${pid}`, async () => {
        const response = await fetch(`/weekly/data/${pid}.json`)
        return response.json()
    })

    return (
        <Layout
            isArticle={true}
            title={`Web development update ${weeklyMeta.date}`}
            date={weeklyMeta.date}
            link={`https://wweb.dev/weekly/${pid}`}
            image={`/weekly/weekly${pid}.jpg`}
            localImage={true}
            description={weeklyMeta.description}
        >
            { status !== 'loading' && <ui.GridContainer>
                {
                    data.items.map((item, index) =>
                        <LinkBox
                            key={`linkbox-${index}`}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                            image={item.image}
                            selfPromoted={item.selfPromoted}
                        />
                    )
                }
                <SubscribeForm type="weekly" />
            </ui.GridContainer> }

            <PrevNext postId={pid} />
        </Layout>
    )
}

export default Post