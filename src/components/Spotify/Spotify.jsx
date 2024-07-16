import React from "react";

export default function Spotify() {
  return (
    <div className="spotify-wrapper">
      <iframe
       title="spotify"
        src="https://open.spotify.com/embed/playlist/07A1Gz6mx4KTu6SoGNUZQC?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
