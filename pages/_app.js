import '../styles/globals.css'
import { useEffect, useState } from 'react'
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    window.scrollTo(0, document.body.clientHeight)
  }, []);
  return (
    <>
      {!loading ? <Component {...pageProps} /> : <p>loading...</p>}
    </>
  )
}

export default MyApp
