// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0ea5e9', // primary-500 de tu Tailwind
      light: '#38bdf8', // primary-400
      dark: '#0369a1', // primary-700
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#334155', // secondary-700
      light: '#64748b', // secondary-500
      dark: '#0d1321', // secondary-900
      contrastText: '#ffffff',
    },
    // Agrega otros colores según necesites
  },
});

export default theme;