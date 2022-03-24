import '../styles/globals.css'
import { useEffect, useState } from 'react'
import LoadingPage from '../components/LoadingPage';
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      {!loading ? <Component loading={loading} {...pageProps} /> : <LoadingPage />}
    </>
  )
}

export default MyApp
