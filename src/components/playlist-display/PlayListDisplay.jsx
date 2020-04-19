import React from 'react';
import TrackRowComponent from '../track-row/TrackRowComponent';
import './playlist-display.style.css';
const PlayListDisplay = () => {
  return (
    <section className='mussey-playlist scroll'>
      <table className='table table-hover table-dark'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Title</th>
            <th scope='col'>Artist</th>
            <th scope='col'>Album</th>
            <th scope='col'>Duration</th>
          </tr>
        </thead>
        <tbody>
          <TrackRowComponent />
          <TrackRowComponent />
          <TrackRowComponent />
          <TrackRowComponent />
          <TrackRowComponent />
          <TrackRowComponent />
          <TrackRowComponent />
          <TrackRowComponent />
          <TrackRowComponent />
          <TrackRowComponent />
          <TrackRowComponent />
          <TrackRowComponent />
          <TrackRowComponent />
          <TrackRowComponent />
        </tbody>
      </table>
    </section>
  );
};

export default PlayListDisplay;
