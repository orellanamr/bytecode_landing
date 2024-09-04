import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#F4F4F4',
    },
    text: {
      primary: '#040404',
    },
    primary: {
      main: '#DDF247',
    },
  },
  typography: {
    fontFamily: 'Source Code Pro, monospace',
    button: {
      fontFamily: 'Aeonik, sans-serif',
      color: '#040404',
    },
  },
});

export default theme;
