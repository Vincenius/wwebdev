import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../../components/Layout'
import LinkBox from '../../components/LinkBox'
import PrevNext from '../../components/PrevNext'
import NewsletterLink from '../../components/NewsletterLink'
import Ad from '../../components/Ads/Ad'
import { weeklyData as meta } from '../../content/weekly'
import { generateLinkBoxLoading } from '../../content/generator'
import * as ui from '../../ui'

const Post = ({ weekly }) => {
    const router = useRouter()
    const { pid } = router.query
    const weeklyMeta = meta.find(m => m.id === pid)

    if (!weeklyMeta || !weeklyMeta.date) {
        return <Layout
            isArticle={true}
            title={`Web development resources of the future`}
            link={`https://wweb.dev/weekly/${pid}`}
            image={`/weekly/preview/weekly/1.jpg`}
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
            title={`Weekly Web Development Resources #${pid}`}
            date={weeklyMeta.date}
            link={`https://wweb.dev/weekly/${pid}`}
            image={`/weekly/social/weekly${pid}.jpg`}
            description={weeklyMeta.description}
        >

            {
                !weekly && <ui.GridContainer>
                    { generateLinkBoxLoading(9) }
                </ui.GridContainer>
            }
            { weekly && <ui.GridContainer>
                {
                    weekly.map((item, index) =>
                        <React.Fragment key={`linkbox-${index}`}>
                            <LinkBox
                                // key={`linkbox-${index}`}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                                image={item.image}
                                selfPromoted={item.selfPromoted}
                                sponsored={item.sponsored}
                            />
                            { index === 1 && <div>
                                <Ad />
                                <NewsletterLink />
                            </div>}
                        </React.Fragment>
                    )
                }
            </ui.GridContainer> }

            <ui.ArticleContainer>
                <p>
                    Did you discover or create something you want to see in the next Weekly Web Development Resources?
                </p>
                <p>
                    Submit you article, resource or tool here: <Link href="/weekly/submit">wweb.dev/weekly/submit</Link>
                </p>
            </ui.ArticleContainer>

            <PrevNext postId={pid} />
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { pid = '' } = context.query
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/weekly?id=${pid}`)
    const weekly = await response.json()

    return {
        props: { weekly }, // will be passed to the page component as props
    }
}

export default Post