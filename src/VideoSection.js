import React from "react";
import "./VideoSection.css"; // Import styles

const VideoSection = () => {
  return (
    <div className="video-section">
      <iframe
        className="video-iframe"
        src="https://www.youtube-nocookie.com/embed/dNhaFDQIGtQ"
        title="WASTE - Deathcore Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
