import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { motion } from "framer-motion";
import "./MusicPlayer.css";
import son from "./son.mp3";

const MusicPlayer = forwardRef(({ stopAllVideos }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const audioRef = useRef(null);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          // ✅ When music starts, stop all videos
          if (stopAllVideos) stopAllVideos();
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay blocked:", err);
        });
    }
  };

  // Expose functions to parent (pause/resume)
  useImperativeHandle(ref, () => ({
    pauseMusic() {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    },
    resumeMusic() {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    },
  }));

  // Format mm:ss
  const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(formatTime(audio.currentTime));
    };

    audio.addEventListener("timeupdate", updateTime);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src={son}></audio>

      {isMobile ? (
        <button className="mobile-music-btn" onClick={togglePlayPause}>
          Music {isPlaying ? "⏸" : "▶"}
        </button>
      ) : (
        <motion.div
          className="music-player"
          onClick={() => setIsMinimized(!isMinimized)}
          animate={{
            width: isMinimized ? "160px" : "196px",
            height: isMinimized ? "50px" : "336px",
            borderRadius: isMinimized ? "50px" : "25px",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {isMinimized ? (
            <div className="minimized"> Music</div>
          ) : (
            <>
              <div className="screen">
                <div className="top-bar">
                  <span>{currentTime}</span>
                  <div className="battery">
                    <div className="battery-level"></div>
                  </div>
                </div>

                <div className="screen-content">
                  <div className="note-icon">♪</div>
                  <div className="title">Music</div>
                  <div className="menu">
                    <span>♪</span>
                    <span>📁</span>
                    <span>⚙</span>
                    <span>🔔</span>
                    <span>⋯</span>
                  </div>
                </div>
              </div>

              <div className="controls">
                <div className="circle">
                  <button
                    className="center-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlayPause();
                    }}
                  >
                    {isPlaying ? "⏸" : "▶"}
                  </button>
                </div>
                <div className="vol-label">VOL</div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </>
  );
});

export default MusicPlayer;
