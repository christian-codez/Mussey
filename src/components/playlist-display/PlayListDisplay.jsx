import React from 'react';
import TrackRowComponent from '../track-row/TrackRowComponent';
const PlayListDisplay = () => {
  return (
    <section className='mussey-playlist scroll'>
      <table class='table table-hover table-dark'>
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
