import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout'
import './App.css'
import AppRouter from './Routes'

function App() {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  )
}

export default App
