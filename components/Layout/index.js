import React, { useEffect, useState } from 'react'
import CookieConsent from 'react-cookie-consent'

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
    const [hasAdblock, setHasAdblock] = useState(true)
    useEffect(() => {
        if (window.ezstandalone) {
            setHasAdblock(false)
        }
    },[])

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

            { !hasAdblock && <CookieConsent
                enableDeclineButton
                buttonText="I accept"
                onAccept={() => {
                    try {
                        window.ezstandalone.setDisablePersonalizedStatistics(false);
                        window.ezstandalone.setDisablePersonalizedAds(false);
                    } catch (e) {
                        console.log(e)
                    }
                }}>
                <span style={{ fontSize: "14px" }}> This website uses cookies to enhance the user experience.</span>
            </CookieConsent> }
        </S.Container>
    )
}

export default Layout
