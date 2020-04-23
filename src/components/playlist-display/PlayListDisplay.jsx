import React from 'react';
import TrackRowComponent from '../track-row/TrackRowComponent';
import './playlist-display.style.css';

const PlayListDisplay = ({ playlists, ...props }) => {
  return (
    <section className='mussey-playlist scroll'>
      <table className='table table-hover table-dark'>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'>Title</th>
            <th scope='col'>Artist</th>
            <th scope='col'>Duration</th>
          </tr>
        </thead>
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
