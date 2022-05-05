import '../styles/globals.css'
import { useEffect, useState } from 'react'
import LoadingPage from '../components/LoadingPage';
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
    window.scrollTo(0, document.body.clientHeight)
  }, [])
  return (
    <>
      <Head>
        <title>Baraa Baba</title>
        <meta name="google-site-verification" content="Pp6HCNnRnfSMweHewGJ8XIWEwCJ_cGOiDa2aOQAKC7w" />
        <meta author='baraa baba'></meta>
        <meta name="Description" content="Hi my name is Baraa a frontend developer from lebeneon I love
      programming and learning new things all the time and this is my portfilio website" />
        <meta name="description" content="Hi my name is Baraa a frontend developer from lebeneon I love
    programming and learning new things all the time and this is my portfilio website" />
      </Head>
      {!loading ? <Component loading={loading} {...pageProps} /> : <LoadingPage />}
    </>
  )
}

export default MyApp
