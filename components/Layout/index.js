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
    description,
}) {
    const d = date ? new Date(date) : undefined

    return (
        <S.Container className="content">
            <Head
                title={title}
                link={link}
                image={image}
                description={description}
                date={d}
                isArticle={isArticle}
            />
            <Header>
                <h1>{title}</h1>
                { isArticle && <p><S.Time datetime={d.toISOString()}>{date}</S.Time> by Vincent Will</p> }
            </Header>

            <main>
                { children }
            </main>

            <Footer />
        </S.Container>
    )
}

export default Layout
