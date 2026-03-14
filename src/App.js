// App.js
import React, { useRef, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import SonUpload from './TypeShit/SonUpload';
import MusicPlayer from './MusicPlayer';
import LoadingScreen from './LoadingScreen';
import theme from "./Theme";
import './LoadingScreen.css';

function App() {
  const [loading, setLoading] = useState(true);
  const musicRef = useRef(null);
  const videoRefs = useRef([]);

  const stopAllVideos = () => {
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });
  };

  return (
    <div className="cursor">
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <MuiThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<SonUpload />} />
          </Routes>
          <MusicPlayer ref={musicRef} stopAllVideos={stopAllVideos} />
        </MuiThemeProvider>
      )}
    </div>
  );
}

export default App;
