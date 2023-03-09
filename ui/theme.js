import { createTheme } from '@mui/material/styles';
import { lightBlue, blue } from './constants'

const theme = createTheme({
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
})

export default theme;