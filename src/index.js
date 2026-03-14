import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';

import original from 'react95/dist/themes/original';
import { ThemeProvider } from 'styled-components';

// ✅ Import MusicProvider
import { MusicProvider } from './MusicContext';

AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={original}>
    <BrowserRouter>
      {/* ✅ MusicProvider wraps the entire app so audio never resets */}
      <MusicProvider>
        <App />
      </MusicProvider>
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
