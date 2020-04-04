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
}) {
    const d = date ? new Date(date) : undefined

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
                { isArticle && <p><S.Time datetime={d.toISOString()}>{date}</S.Time></p> }
            </Header>

            <main>
                { children }
            </main>

            <Footer />
        </S.Container>
    )
}

export default Layout
