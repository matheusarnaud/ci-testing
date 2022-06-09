// Libraries
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

// Misc
import Routes from 'routes'
import store from 'lib/redux'
import theme from 'lib/styled-components/theme'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
