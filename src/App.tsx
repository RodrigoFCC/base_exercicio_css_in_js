import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyle from './styles'
import theme from './theme/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>EBAC Jobs</Header>
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
