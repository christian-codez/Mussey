import React, { Fragment, useRef } from 'react';
import FavouriteButton from '../favourite-button/FavouriteButton';
import PlayerProgress from '../player-progress/PlayerProgress';
import PreviousButton from '../previous-button/PreviousButton';
import PlayPauseButton from '../play-pause-button/PlayPauseButton';
import NextButton from '../next-button/NextButton';
import StopButton from '../stop-button/StopButton';
import RepeatButton from '../repeat-button/RepeatButton';
import VolumeControl from '../volume-control/VolumeControl';
import MusicReset from '../music-reset/MusicReset';
import './musiccontrol.style.css';

const MusicControl = ({ song }) => {
  const sourceRef = useRef(null);
  const audioRef = useRef(null);

  return (
    <Fragment>
      <MusicReset song={song} audioRef={audioRef} />
      <audio
        id='musicaudio'
        preload='none'
        style={{ display: 'none' }}
        className='raw-player'
        controls
        ref={audioRef}>
        <source
          ref={sourceRef}
          src={song ? song.previewURL : ''}
          type='audio/mpeg'
        />
      </audio>
      <div className='play-progress d-flex align-items-center justify-content-between'>
        <PlayerProgress song={song} audioRef={audioRef} />
        <FavouriteButton track={song} />
      </div>
      <div className={` controls   `}>
        <div className='row '>
          <div className='col-md-6 col-sm-12 d-flex justify-content-between align-items-center'>
            <PreviousButton song={song} />
            <PlayPauseButton song={song} audioRef={audioRef} />
            <NextButton song={song} />
            <StopButton song={song} audioRef={audioRef} />
            <RepeatButton song={song} />
          </div>
          <div className=' col-md-6 col-sm-12  d-flex justify-content-around align-items-center volume-container'>
            <VolumeControl song={song} audioRef={audioRef} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MusicControl;
