import React from 'react'
import Head from 'next/head'
import "../../ui/global.css"
import "../../ui/fonts.css"

class MyHead extends React.Component {
    render() {
        const {
            title,
            link,
            description,
            image,
            localImage,
            date,
            updatedDate,
            isArticle,
            titleNameFirst,
        } = this.props

        const headTitle = titleNameFirst
            ? `wweb.dev | ${title}`
            : `${title} | wweb.dev`
        const imageLink = localImage ? `https://wweb.dev${image}` : `https://ik.imagekit.io/wwebdev/${image}`

        const structuredData = `
        {
            "@context": "http://schema.org",
            "@type":"Article",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id":"${link}"
            },
            "headline": "${title}",
            "datePublished":"${date}",
            "dateModified":"${updatedDate || date}",
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
                <meta name='description' content='News, Resources and Articles about Web-Development' />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#fff' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#2c3e50' />
                <link rel='apple-touch-icon' sizes='192x192' href='apple-icon.png' />
                <link rel='manifest' href='/manifest.json' />

                { description && <meta name="description" content={description}></meta> }
                <script type="text/javascript" dangerouslySetInnerHTML={{__html:
                    `if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
                        var _paq = window._paq || [];
                        _paq.push(["setDoNotTrack", true]);
                        _paq.push(['trackPageView']);
                        _paq.push(['enableLinkTracking']);
                        (function() {
                            var u="https://analytics.vincentwill.com/";
                            _paq.push(['setTrackerUrl', u+'hokuspokusp']);
                            _paq.push(['setSiteId', '1']);
                            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                            g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'hokuspokusj'; s.parentNode.insertBefore(g,s);
                        })();
                    }`}}>
                </script>
                <style> { 'html, body { margin: 0; overflow-x: hidden; } body svg { width: 32px; }' } </style>

                { isArticle &&
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
                        <script defer src="https://cdn.commento.io/js/commento.js"></script>
                    </React.Fragment>
                }
            </Head>
        )
    }
}

export default MyHead