import React from 'react'
import { useRouter } from 'next/router'
import * as S from '../../styles/weekly'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import { weeklyData as meta } from '../../content/weekly'

const Post = () => {
    const router = useRouter()
    const { pid } = router.query
    const postMeta = meta.find(m => m.id === pid)

    if (!postMeta) {
        return <div></div>
    } else {
        return (
            <Layout
                isArticle={true}
                title={`Web development update ${postMeta.date}`}
                date={postMeta.date}
                link={`https://wweb.dev/weekly/${pid}`}
                image={`/weekly/weekly${pid}.jpg`}
                localImage={true}
                description={postMeta.description}
            >
                {postMeta.introText &&
                    <S.IntroText>
                        {postMeta.introText}
                    </S.IntroText>
                }

                <S.Container>
                    {
                        postMeta.items.map((item, index) =>
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
                </S.Container>

                <PrevNext postId={pid} />
            </Layout>
        )
    }

}

export default Post