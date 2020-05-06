import React from 'react'

import "../../ui/global.css"
import { Head, Header, Nav, Footer } from '../'
import * as S from './styled'

function Layout ({
    title,
    children,
    isArticle,
    date,
    link,
    image,
    localImage,
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
                localImage={localImage}
                description={description}
                date={d}
                updatedDate={ud}
                isArticle={isArticle}
                titleNameFirst={titleNameFirst}
            />
            <Nav
                title={title}
                isArticle={isArticle} />
            { isArticle && <Header>
                <h1>{title}</h1>
                <S.SDate><S.Time datetime={d.toISOString()}>{date}</S.Time></S.SDate>
                { updatedAt &&
                    <S.Updated>Updated: <S.Time datetime={ud.toISOString()}>{updatedAt}</S.Time></S.Updated>
                }
            </Header> }

            <main>
                { children }
            </main>

            <Footer />
        </S.Container>
    )
}

export default Layout
