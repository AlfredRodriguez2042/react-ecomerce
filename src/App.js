import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './Routes'
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  Switch,
  ThemeProvider,
} from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles({
  mode: {
    position: 'absolute',
    right: '24px',
    top: '12.5px',
  },
})

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const classes = useStyles()

  const handleDark = () => {
    setDarkMode(!darkMode)
  }
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Switch
            className={classes.mode}
            size="small"
            checked={darkMode}
            onChange={handleDark}
          />
          <AppRouter />
        </Router>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
