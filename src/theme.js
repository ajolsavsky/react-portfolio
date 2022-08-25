import { createTheme } from '@mui/material/styles';

const theme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#60a5b4',
    },
    secondary: {
      main: '#e3f6f9',
    },
    background: {
      paper: '#ffffff',
      default: '#e3f6f9',
    },
    button: {
        textDecoration: 'none'
      },
    a: {
        textDecoration: '!none'
    }
  },
});

export default theme;