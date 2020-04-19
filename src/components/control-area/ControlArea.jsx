import React, { useState, useEffect } from 'react';
import './controlarea.css';
import MusicMeta from '../music-meta/MusicMeta';
import PlayerProgress from '../player-progress/PlayerProgress';
import MusicControl from '../music-controls/MusicControl';
import napsterAPI from '../../napsterConfig/api-config';

const ControlArea = () => {
  const [songs, setSongs] = useState(null);

  const apiKey = 'NTFkNjVmZTktYWJkZC00YjJkLWIxMGMtNjc5NTkyMGNhMzcx';

  useEffect(() => {
    try {
      (async () => {
        // const response = await napsterAPI.get(`/tracks/top?apikey=${apiKey}`);
        // setSongs(response.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
