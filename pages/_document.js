import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Muhamad Irpan Yasin — Professional Portfolio. Multi-disciplinary expert in Sales, Finance, Data Analysis & Tax Management." />
        <meta property="og:title" content="Muhamad Irpan Yasin — Professional Portfolio" />
        <meta property="og:description" content="15+ years experience in Sales, Finance, Data Analysis & Tax Management." />
        <meta property="og:image" content="/irvan.jpg" />
        <meta name="theme-color" content="#050508" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
