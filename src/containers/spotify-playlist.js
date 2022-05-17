import React from 'react';
import './spotify-playlist.css';

const SpotifyPlaylist = () => {

    return(
        <div id="spotify-container">
        <iframe
        src="https://open.spotify.com/embed/playlist/0fjjqKsCgsPaMWYszTgoxo?utm_source=generator&theme=0"
         
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">

        </iframe>
        </div>
    )
}

export default SpotifyPlaylist;