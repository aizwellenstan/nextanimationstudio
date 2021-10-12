import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import GlobalStyle from '../utils/globalStyle'
import Layout from '../components/Layout'

function App({ Component, pageProps }) {
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
