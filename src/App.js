import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './Redux/Store'
import Layout from './Layout'
import AppRouter from './Routes'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Layout>
            <AppRouter />
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
