import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import GlobalStyle from '../utils/globalStyle'
import Layout from '../components/Layout'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      // console.log(`App is changing to ${url} ${shallow ? 'with' : 'without'} shallow routing ${offsetTop}`)
      const mainPath = '/ourworks'

      if (url.includes(mainPath)) {
        const isMainPath = url.split(mainPath)[1] === '' ? true : false
        // console.log('isMainPath:', isMainPath, 'shallow:', shallow)

        if (!isMainPath && !shallow) {
          // go to work subpage
          // console.log('go to work subpage')
          const offsetTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
          const sessionObj = JSON.parse(sessionStorage.getItem('pathType'))
          const obj = Object.assign({}, sessionObj, { type: 'forward', pageY: offsetTop })
          sessionStorage.setItem('pathType', JSON.stringify(obj))
        } else {
          // back to work list page
          // console.log('back to work list page')
          const sessionObj = JSON.parse(sessionStorage.getItem('pathType'))
          const obj = Object.assign({}, sessionObj, { type: 'back' })
          sessionStorage.setItem('pathType', JSON.stringify(obj))
        }
      } else {
        sessionStorage.removeItem('pathType')
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
