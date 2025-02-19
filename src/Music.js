import React from "react";
import "./Music.css";
import album1 from "./Assets/PFNART.jpeg";
import album2 from "./Assets/INBLOOMART.jpg";
import album3 from "./Assets/INDECAYART.jpg";
import album4 from "./Assets/COHART.jpg";

function Music() {
  return (
    <div className="music-container">
      <h2>Listen to WASTE</h2>

      {/* Album Covers */}
      <div className="album-covers">
        <img src={album2} alt="Middle Album" className="album-img" />
        <img src={album3} alt="Old Album" className="album-img" />
        <img src={album1} alt="Newest Album" className="album-img" />
        <img src={album4} alt="Oldest Album" className="album-img" />
      </div>

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
      <div className="music-buttons">
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
    </div>
  );
}

export default Music;
