import App from 'next/app'
import * as Sentry from '@sentry/browser'

// Sentry.init({dsn: "https://ed1be4917ab6402993d53089c71aad96@sentry.io/2012376"})

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps }
}

export default MyApp
