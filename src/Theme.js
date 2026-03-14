import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c9a227',
      light: '#d4af37',
      dark: '#9a7b1a',
    },
    secondary: {
      main: 'rgba(200, 198, 192, 0.9)',
      light: '#e8e4dc',
      dark: '#8a8782',
    },
    background: {
      default: '#0a0a0c',
      paper: '#12121a',
    },
    text: {
      primary: '#e8e4dc',
      secondary: 'rgba(232, 228, 220, 0.55)',
    },
    success: { main: '#c9a227' },
    error: { main: '#b33a3a' },
  },
  typography: {
    fontFamily: '"JetBrains Mono", "Share Tech Mono", "Orbitron", monospace',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { fontWeight: 700 },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
        },
        containedPrimary: {
          background: '#c9a227',
          color: '#0a0a0c',
          '&:hover': {
            background: '#d4af37',
            boxShadow: '0 0 24px rgba(201, 162, 39, 0.25)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          boxShadow: '0 0 24px rgba(201, 162, 39, 0.06)',
        },
      },
    },
  },
});
