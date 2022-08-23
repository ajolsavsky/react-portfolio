import { createTheme } from '@mui/material/styles';

const theme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#60a5b4',
    },
    secondary: {
      main: '#b46f60',
    },
    background: {
      paper: '#ffffff',
      default: '#e3f6f9',
    },
  },
});

export default theme;