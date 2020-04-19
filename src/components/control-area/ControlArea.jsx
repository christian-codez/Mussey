import React, { useState, useEffect } from 'react';
import './controlarea.css';
import MusicMeta from '../music-meta/MusicMeta';
import PlayerProgress from '../player-progress/PlayerProgress';
import MusicControl from '../music-controls/MusicControl';

const ControlArea = () => {
  return (
    <section className='mussey-controlarea'>
      <div className='container'>
        <MusicMeta />
        <PlayerProgress />
        <MusicControl />
      </div>
    </section>
  );
};

export default ControlArea;
