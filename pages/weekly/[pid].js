import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import SubscribeForm from '../../components/SubscribeForm'
import Layout from '../../components/Layout'
import LinkBox from '../../components/LinkBox'
import PrevNext from '../../components/PrevNext'
import { weeklyData as meta } from '../../content/weekly'
import { generateLinkBoxLoading } from '../../content/generator'
import * as ui from '../../ui'

const Post = () => {
    const router = useRouter()
    const { pid } = router.query
    const weeklyMeta = meta.find(m => m.id === pid)
    const { status, data, error } = useQuery(`weekly-${pid}`, async () => {
        const json = { weekly: pid }
        const stringified = JSON.stringify(json)
        const query = encodeURI(stringified)
        const response = await fetch(`https://vyx7vatlne.execute-api.eu-central-1.amazonaws.com/prod?q=${query}`)
        return response.json()
    })

    if (!weeklyMeta || !weeklyMeta.date) {
        return <Layout
            isArticle={true}
            title={`Web development update of the future`}
            link={`https://wweb.dev/weekly/${pid}`}
            image={`/weekly/preview/weekly/1.jpg`}
            localImage={true}
            description="This weekly does not exist yet"
        >
            <ui.Container>
                This weekly does not exist yet...
            </ui.Container>
        </Layout>
    }

    return (
        <Layout
            isArticle={true}
            title={`Web development update ${weeklyMeta.date}`}
            date={weeklyMeta.date}
            link={`https://wweb.dev/weekly/${pid}`}
            image={`/weekly/preview/weekly${pid}.jpg`}
            localImage={true}
            description={weeklyMeta.description}
        >

            {
                !data && <ui.GridContainer>
                    { generateLinkBoxLoading(9) }
                </ui.GridContainer>
            }
            { data && <ui.GridContainer>
                {
                    data.map((item, index) =>
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
                <SubscribeForm type="weekly" isSmall={true} />
            </ui.GridContainer> }

            <PrevNext postId={pid} />
        </Layout>
    )
}

export default Post