import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import Layout from './Layout'
import AppRouter from './Routes'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
