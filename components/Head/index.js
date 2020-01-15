import React from 'react'
import Head from 'next/head'

class MyHead extends React.Component {
    render() {
        const {
            title,
            link,
            description,
            image,
            date,
            isArticle,
        } = this.props

        return (
            <Head>
                <title>{title} | wweb.dev</title>
                <link rel='icon' href='/favicon.ico' type="image/x-icon" />
                <meta charSet="utf-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="robots" content="index, follow"></meta>
                { description && <meta name="description" content={description}></meta> }
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <script type="text/javascript" src="/analytics.js"></script>
                <script type="text/javascript" src="https://analytics.vincentwill.com/hokuspokusj"></script>
                <style> { 'html, body { margin: 0; }' } </style>

                { isArticle &&
                    <React.Fragment>
                        <script async defer src="https://cdn.commento.io/js/commento.js"></script>
                        <link rel="canonical" href={link} />
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:site" content={link} />
                        <meta name="twitter:title" content={title} />
                        <meta name="twitter:description" content={description} />
                        <meta name="twitter:creator" content="@VincentWill4" />
                        <meta name="twitter:image" content={`https://vincentwill.com${image}`} />

                        <meta name="description" content={description} />
                        <meta property="og:title" content={title} />
                        <meta property="og:image" content={`https://vincentwill.com${image}`} />
                        <meta property="og:site_name" content="Vincent Will - Blog" />
                        <meta property="og:description" content={description} />
                        <meta property="og:url" content={link} />
                        <meta property="og:type" content="article" />

                        <script type="application/ld+json">
                            {`
                                '@context': "http://schema.org",
                                "@type":"Article",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id":"${link}"
                                },
                                "headline": "${title}",
                                "datePublished":"${date}",
                                "image": {
                                    "@type":"ImageObject",
                                    "url":"https://vincentwill.com${image}",
                                    "height":646,"width":1300
                                },
                                "description":"${description}",
                                "author": {
                                    "@type":"Person",
                                    "name":"Vincent Will"
                                },
                                "publisher": {
                                    "@type":"Organization",
                                    "name":"Vincent Will",
                                    "logo":{
                                        "@type":"ImageObject",
                                        "url":"https://vincentwill.com/images/blog/logo.png",
                                        "height":64,
                                        "width":64
                                    }
                                }
                            `}
                        </script>
                    </React.Fragment>
                }
            </Head>
        )
    }
}

export default MyHead