import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
            src='https://www.googletagmanager.com/gtag/js?id=UA-162149812-1'
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-162149812-1');
            `}
        </Script>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta property="og:locale" 		content="sk_SK" />
        <meta property="og:type"		content="website" /> 
        <meta property="fb:app_id"		content="895361817967300"/>
        <meta name="theme-color" content="#ffbf80" />
        
				<link rel="manifest" href="/manifest.json" />
		        <meta name="apple-mobile-web-app-status-bar" content="#ffbf80" />

				<link rel="shortcut icon" href="/icons/icon-96x96.png" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="mobile-web-app-capable" content="yes" />
				<link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}