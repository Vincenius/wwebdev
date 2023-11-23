import React from 'react'

import Head from '../Head'
import Header from '../Header'
import Nav from '../Nav'
import Footer from '../Footer'
import * as S from './styled'

function Layout ({
    title,
    children,
    isArticle,
    hideHeader = false,
    date,
    link,
    image,
    description,
    titleNameFirst,
    updatedAt,
}) {
    const d = date ? new Date(date) : undefined
    const ud = updatedAt ? new Date(updatedAt) : undefined

    return (
        <S.Container>
            <Head
                title={title}
                link={link}
                image={image}
                description={description}
                date={d}
                updatedDate={ud}
                isArticle={isArticle}
                titleNameFirst={titleNameFirst}
            />
            <Nav title={title} isArticle={isArticle} />
            { isArticle && !hideHeader &&
                <Header>
                    <h1>{title}</h1>
                    {d && <S.SDate><S.Time datetime={d.toISOString()}>{date}</S.Time></S.SDate> }
                    { updatedAt &&
                        <S.Updated>Updated: <S.Time datetime={ud.toISOString()}>{updatedAt}</S.Time></S.Updated>
                    }
                </Header>
            }

            <main>
                { children }
            </main>

            <Footer />
        </S.Container>
    )
}

export default Layout
