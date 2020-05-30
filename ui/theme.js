import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1E4D92',
    },
    secondary: {
      main: '#017a8c',
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