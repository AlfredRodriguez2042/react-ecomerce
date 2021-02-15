import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
      // contrastText: '#53575A'
    },
  },
})

export default theme
