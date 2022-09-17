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
            updatedDate,
            isArticle,
            titleNameFirst,
        } = this.props

        const headTitle = titleNameFirst
            ? `wweb.dev | ${title}`
            : `${title} | wweb.dev`
        const imageLink = isArticle
            ? `https://wweb.dev${image}`
            : 'https://wweb.dev/share.png'

        const structuredData = `
        {
            "@context": "http://schema.org",
            "@type":"Article",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id":"${link}"
            },
            "headline": "${title}",
            ${ date && '"datePublished":"${date}",' }
            ${ updatedDate && `"dateModified":"${updatedDate}",` }
            "image": {
                "@type":"ImageObject",
                "url":"${imageLink}",
                "height":646,"width":1300
            },
            "description":"${description}",
            "author": {
                "@type":"Person",
                "name":"Vincent Will"
            },
            "publisher": {
                "@type":"Organization",
                "name":"wweb.dev",
                "logo":{
                    "@type":"ImageObject",
                    "url":"https://ik.imagekit.io/wwebdev/logo_RnCn4cnua.png",
                    "height":64,
                    "width":64
                }
            }
        }`

        return (
            <Head>
                <title>{headTitle}</title>
                <link rel='icon' href='/favicon.ico' type="image/x-icon" />
                <meta charSet="utf-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />                <meta name="description" content={description || title} />
                <meta name="robots" content="index, follow"></meta>

                <meta name='application-name' content='wweb.dev' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content='wweb.dev' />
                <meta name='description' content='News, Resources, Templates and Articles about Web-Development' />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#fff' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#2c3e50' />
                <link rel='apple-touch-icon' sizes='192x192' href='apple-icon.png' />
                <link rel='manifest' href='/manifest.json' />

                { description && <meta name="description" content={description}></meta> }
                <script async defer data-website-id="208d46a4-6fc6-4947-954c-e7940d9b0fe6" src="https://analytics.vincentwill.com/umami.js"></script>
                <script>var ezoicId = 373444;</script>
                <script src="//www.ezojs.com/ezoic/sa.min.js"></script>
                <style> { 'html, body { margin: 0; overflow-x: hidden; } body svg { width: 32px; }' } </style>

                <React.Fragment>
                    <link rel="canonical" href={link} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content={link} />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:creator" content="@wweb_dev" />
                    <meta name="twitter:image" content={imageLink} />
                    <meta property="og:title" content={title} />
                    <meta property="og:image" content={imageLink} />
                    <meta property="og:site_name" content="wweb.dev" />
                    <meta property="og:description" content={description} />
                    <meta property="og:url" content={link} />
                    <meta property="og:type" content="article" />

                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData}} />
                </React.Fragment>
            </Head>
        )
    }
}

export default MyHead
