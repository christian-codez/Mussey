import React from 'react';
import TrackRowComponent from '../track-row/TrackRowComponent';
import './playlist-display.style.css';

const PlayListDisplay = ({ playlists, ...props }) => {
  return (
    <section className='mussey-playlist scroll' id='playlist-section'>
      <table className='table table-hover table-dark'>
        <tbody>
          {playlists &&
            playlists.map(track => (
              <TrackRowComponent key={track.id} track={track} />
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default PlayListDisplay;
