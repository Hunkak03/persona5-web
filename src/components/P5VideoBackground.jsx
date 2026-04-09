import React, { useState } from 'react';
import './P5VideoBackground.css';
import bgVideo from '../assets/video-bg.mp4';

const P5VideoBackground = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="video-wrapper">
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="p5-video"
          onError={() => setVideoError(true)}
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      ) : (
        <div className="p5-animated-fallback">
          <div className="fallback-shape shape-1" />
          <div className="fallback-shape shape-2" />
          <div className="fallback-shape shape-3" />
          <div className="fallback-overlay" />
        </div>
      )}
      <div className="video-overlay"></div>
    </div>
  );
};

export default P5VideoBackground;