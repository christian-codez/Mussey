import React, { useState, useEffect, Fragment, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faPlay,
  faPause,
  faSquare,
  faForward,
  faRedo,
  faVolumeDown,
  faVolumeUp,
  faRoad,
} from '@fortawesome/free-solid-svg-icons';
import './musiccontrol.style.css';
import { connect } from 'react-redux';
import {
  selectPlayNext,
  selectPlayPrev,
} from '../../redux/reselect/songSelector';
import { selectPlayerStatus } from '../../redux/reselect/playerSelector';
import {
  startMusic,
  pauseMusic,
  stopMusic,
} from '../../redux/actions/playerActions';
import { nextSong, previousSong } from '../../redux/actions/songActions';

const MusicControl = props => {
  const {
    song,
    startMusic,
    pauseMusic,
    stopMusic,
    playerStatus,
    nextSong,
    previousSong,
    showPrev,
    showNext,
  } = props;

  const sourceRef = React.createRef();
  const trackersliderRef = useRef(null);
  //const audioRef = React.createRef();
  const audioRef = useRef(null);
  let backgroundAudio = document.getElementById('musicaudio');

  useEffect(() => {
    if (song) {
      console.log('Song was switched', song.previewURL);
      stopSong();
      audioRef.current.src = song.previewURL;
      playSong();
    }
  }, [song]);

  function updateTracker() {
    setInterval(() => {
      trackersliderRef.current.value = audioRef.current.currentTime;
    }, 1000);
  }

  const playSong = () => {
    startMusic();
    audioRef.current.play();
    updateTracker();
    audioRef.current.onended = () => stopMusic();
  };

  const pauseSong = () => {
    pauseMusic();
    audioRef.current.pause();
  };

  const stopSong = () => {
    stopMusic();
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const ToggleVolumn = event => {
    backgroundAudio.volume = event.target.value;
    console.log(audioRef.duration);
  };

  if (song) {
    return (
      <Fragment>
        <div className='play-progress d-flex align-items-center justify-content-between'>
          <div className='start-time'>
            <span>0.00</span>
          </div>
          <div className='slider-control'>
            <input
              className='tracking-slider range'
              type='range'
              ref={trackersliderRef}
              id='tracking-slider'
              min='0'
              step='1'
              max='30'
              defaultValue={0}
            />

            <audio
              id='musicaudio'
              style={{ display: 'none' }}
              className='raw-player'
              controls
              ref={audioRef}>
              <source ref={sourceRef} src={song.previewURL} type='audio/mpeg' />
            </audio>
          </div>
          <div className='end-time'>
            <span>0.00</span>
          </div>
        </div>

        <div
          className={` controls d-flex justify-content-between align-items-center  `}>
          <div
            onClick={() => previousSong()}
            className={`${
              !showPrev ? 'disabled' : ''
            } previous-song  pointer-cursor`}>
            <FontAwesomeIcon icon={faBackward} />
          </div>
          {playerStatus === 'pause' || playerStatus === 'stopped' ? (
            <div
              onClick={() => playSong()}
              className='play-pause pointer-cursor'>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          ) : (
            ''
          )}
          {playerStatus === 'play' ? (
            <div
              onClick={() => pauseSong()}
              className='play-pause pointer-cursor'>
              <FontAwesomeIcon icon={faPause} />
            </div>
          ) : (
            ''
          )}
          <div
            onClick={() => nextSong()}
            className={` ${
              !showNext ? 'disabled' : ''
            } next-song pointer-cursor`}>
            <FontAwesomeIcon icon={faForward} />
          </div>
          <div
            onClick={() => stopSong()}
            className={` repeat-song pointer-cursor`}>
            <FontAwesomeIcon icon={faSquare} />
          </div>
          <div className='repeat-song pointer-cursor'>
            <FontAwesomeIcon icon={faRedo} />
          </div>{' '}
          <div className='volume-control d-flex align-items-center justify-content-between'>
            <div className='volumn-down pointer-cursor'>
              <FontAwesomeIcon icon={faVolumeDown} />
            </div>
            <div className='control-gear '>
              <input
                onChange={ToggleVolumn}
                type='range'
                min='0'
                max='1'
                step={0.01}
                defaultValue={'0.5'}
              />
            </div>
            <div className='volumn-up pointer-cursor'>
              <FontAwesomeIcon icon={faVolumeUp} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  return <div>loading</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    playerStatus: selectPlayerStatus(state),
    showNext: selectPlayNext(state),
    showPrev: selectPlayPrev(state),
  };
};

export default connect(mapStateToProps, {
  startMusic,
  pauseMusic,
  stopMusic,
  nextSong,
  previousSong,
})(MusicControl);
