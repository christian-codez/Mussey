import React, { useState, useEffect, Fragment, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faPlay,
  faPause,
  faSquare,
  faForward,
  faRedo,
  faVolumeMute,
  faVolumeDown,
  faVolumeUp,
  faBan,
} from '@fortawesome/free-solid-svg-icons';
import './musiccontrol.style.css';
import { connect } from 'react-redux';
import {
  selectPlayNext,
  selectPlayPrev,
} from '../../redux/reselect/songSelector';
import {
  selectPlayerStatus,
  selectRepeat,
} from '../../redux/reselect/playerSelector';
import { selectSettingsVolume } from '../../redux/reselect/settingsSelector';
import { toggleVolume } from '../../redux/actions/settingsAction';
import {
  startMusic,
  pauseMusic,
  stopMusic,
  repeatCurrentMusic,
  repeatNoMusic,
} from '../../redux/actions/playerActions';
import {
  nextSong,
  previousSong,
  setCurrentSong,
} from '../../redux/actions/songActions';

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
    repeatCurrentMusic,
    toggleVolume,
    volumeLevel,
    repeatNoMusic,
    repeat,
  } = props;

  const [timeElapsed, setTimeElapsed] = useState('0.00');
  const sourceRef = useRef(null);
  const trackersliderRef = useRef(null);
  const audioRef = useRef(null);
  const volumeRangeControl = useRef(null);

  useEffect(() => {
    if (song) {
      stopSong();
      audioRef.current.src = song.previewURL;
      playSong();
    }
  }, [song]);

  function updateTracker() {
    setTimeElapsed((audioRef.current.currentTime / 100).toFixed(2));
    trackersliderRef.current.value = audioRef.current.currentTime;
  }

  const playSong = () => {
    startMusic();
    audioRef.current.play();
    let tracker = setInterval(updateTracker, 1000);

    audioRef.current.onended = () => {
      if (showNext) return nextSong();
      stopMusic();
    };
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

  const ToggleVolume = event => {
    const { value } = event.target;
    audioRef.current.volume = value;
    toggleVolume(value);
  };

  const increaseVolume = () => {
    let newV = (parseFloat(volumeLevel) + 0.1).toFixed(1);
    volumeRangeControl.current.value = newV;
    console.log(newV);
    toggleVolume(newV);
  };
  const decreaseVolume = () => {
    let newV = (parseFloat(volumeLevel) - 0.1).toFixed(1);
    volumeRangeControl.current.value = newV;
    console.log(newV);
    toggleVolume(newV);
  };

  //if (song) {
  return (
    <Fragment>
      <div className='play-progress d-flex align-items-center justify-content-between'>
        <div className={`${!song ? 'disabled' : ''} start-time`}>
          <span>{timeElapsed}</span>
        </div>
        <div className={`${!song ? 'disabled' : ''} slider-control`}>
          <input
            className='tracking-slider range'
            type='range'
            ref={trackersliderRef}
            id='tracking-slider'
            min='0'
            step='1'
            max={song ? song.playbackSeconds : ''}
            defaultValue={0}
          />

          <audio
            id='musicaudio'
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
        </div>
        <div className={`${!song ? 'disabled' : ''} end-time`}>
          <span>{song ? (song.playbackSeconds / 60).toFixed(2) : '0.00'}</span>
        </div>
      </div>

      <div
        className={` controls d-flex justify-content-between align-items-center  `}>
        <div
          onClick={() => previousSong()}
          className={` ${!song ? 'disabled' : ''} ${
            !showPrev ? 'disabled' : ''
          } previous-song  pointer-cursor`}>
          <FontAwesomeIcon icon={faBackward} />
        </div>
        {playerStatus === 'pause' || playerStatus === 'stopped' ? (
          <div
            onClick={() => playSong()}
            className={`${!song ? 'disabled' : ''} play-pause pointer-cursor`}>
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
          className={` ${!song ? 'disabled' : ''} ${
            !showNext ? 'disabled' : ''
          } next-song pointer-cursor`}>
          <FontAwesomeIcon icon={faForward} />
        </div>
        <div
          onClick={() => stopSong()}
          className={` ${!song ? 'disabled' : ''} repeat-song pointer-cursor`}>
          <FontAwesomeIcon icon={faSquare} />
        </div>
        {repeat === 'none' ? (
          <div
            onClick={() => repeatCurrentMusic()}
            className={`${!song ? 'disabled' : ''} repeat-song pointer-cursor`}>
            <FontAwesomeIcon icon={faRedo} />
          </div>
        ) : (
          <div
            onClick={() => repeatNoMusic()}
            className={`${!song ? 'disabled' : ''} repeat-song pointer-cursor`}>
            <FontAwesomeIcon icon={faBan} />
          </div>
        )}

        <div className='volume-control d-flex align-items-center justify-content-between'>
          {volumeLevel >= 0.2 && volumeLevel < 1 ? (
            <div
              onClick={decreaseVolume}
              className={`${
                !song || volumeLevel === '0.1' || volumeLevel < '0.1'
                  ? 'disabled'
                  : ''
              } volumn-down pointer-cursor`}>
              <FontAwesomeIcon icon={faVolumeDown} />
            </div>
          ) : (
            <div
              onClick={decreaseVolume}
              className={`${
                !song || volumeLevel < '0.1' ? 'disabled' : ''
              } volumn-down pointer-cursor`}>
              <FontAwesomeIcon icon={faVolumeMute} />
            </div>
          )}
          <div className={` ${!song ? 'disabled' : ''} control-gear `}>
            <input
              ref={volumeRangeControl}
              onChange={ToggleVolume}
              type='range'
              min='0'
              max='1'
              className='range'
              step={0.01}
              defaultValue={volumeLevel}
            />
          </div>
          <div
            onClick={increaseVolume}
            className={`${
              !song || volumeLevel === '1.0' ? 'disabled' : ''
            } volumn-up pointer-cursor`}>
            <FontAwesomeIcon icon={faVolumeUp} />
          </div>
        </div>
      </div>
    </Fragment>
  );
  // }

  //return <div>loading</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    playerStatus: selectPlayerStatus(state),
    showNext: selectPlayNext(state),
    showPrev: selectPlayPrev(state),
    repeat: selectRepeat(state),
    volumeLevel: selectSettingsVolume(state),
  };
};

export default connect(mapStateToProps, {
  startMusic,
  pauseMusic,
  stopMusic,
  nextSong,
  previousSong,
  repeatCurrentMusic,
  repeatNoMusic,
  setCurrentSong,
  toggleVolume,
})(MusicControl);
