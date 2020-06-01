import { createMuiTheme } from '@material-ui/core/styles'
import { lightBlue, blue } from './constants'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue,
    },
    secondary: {
      main: lightBlue,
    },
    error: {
      main: '#ff7043',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;