import React from "react";
import "./Music.css";

function Music() {
  return (
    <div className="music-container">
      <h2>Listen to WASTE</h2>

      {/* Spotify Embed */}
      <div className="spotify-embed">
        <iframe
          src="https://open.spotify.com/embed/artist/2XuyPcxHeNlK7tOej51mqj"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Player"
        ></iframe>
      </div>

      {/* Spotify Button */}
      <div className="spotify-music">
        <a
          href="https://tinyurl.com/wastespotify"
          target="_blank"
          rel="noopener noreferrer"
          className="apple-button"
        >
          Listen on Spotify
        </a>
      </div>
      
      {/* Apple Music Button */}
      <div className="apple-music">
        <a
          href="https://tinyurl.com/wasteapple"
          target="_blank"
          rel="noopener noreferrer"
          className="apple-button"
        >
          Listen on Apple Music
        </a>
      </div>
    </div>
  );
}

export default Music;
