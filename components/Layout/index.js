import React from 'react'

import "../../ui/global.css"
import '../../ui/code-style/github.css';
import { Head, Header, Footer } from '../'
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
                isArticle={isArticle}
                titleNameFirst={titleNameFirst}
            />
            <Header>
                <h1>{title}</h1>
                { isArticle && <S.SDate><S.Time datetime={d.toISOString()}>{date}</S.Time></S.SDate> }
                { isArticle && updatedAt &&
                    <S.Updated>Updated: <S.Time datetime={ud.toISOString()}>{updatedAt}</S.Time></S.Updated>
                }
            </Header>

            <main>
                { children }
            </main>

            <Footer />
        </S.Container>
    )
}

export default Layout
