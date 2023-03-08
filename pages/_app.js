import App from 'next/app'
import { Lato } from 'next/font/google'

import "../ui/global.css"
import "../ui/ads.css"

const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900']
})

function MyApp({ Component, pageProps }) {
    return <div className={lato.className}>
        <Component {...pageProps} />
    </div>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
// //
// MyApp.getInitialProps = async (appContext) => {
//     // calls page's `getInitialProps` and fills `appProps.pageProps`
//     const appProps = await App.getInitialProps(appContext);
//     return { ...appProps }
// }

export default MyApp
