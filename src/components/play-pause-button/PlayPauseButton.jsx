import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { previousSong } from '../../redux/actions/songActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import {
  startMusic,
  stopMusic,
  pauseMusic,
} from '../../redux/actions/playerActions';
import { selectPlayerStatus } from '../../redux/reselect/playerSelector';
import { nextSong } from '../../redux/actions/songActions';
import { selectPlayNext } from '../../redux/reselect/songSelector';

const PlayPauseButton = ({
  song,
  playerStatus,
  startMusic,
  stopMusic,
  pauseMusic,
  showNext,
  audioRef,
}) => {
  const playSong = () => {
    startMusic();
    audioRef.current.play();
    audioRef.current.onended = () => {
      if (showNext) return nextSong();
      stopMusic();
    };
  };

  const pauseSong = () => {
    pauseMusic();
    audioRef.current.pause();
    audioRef.current.onpause = () => {};
  };

  return (
    <Fragment>
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
        <div onClick={() => pauseSong()} className='play-pause pointer-cursor'>
          <FontAwesomeIcon icon={faPause} />
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    playerStatus: selectPlayerStatus(state),
    showNext: selectPlayNext(state),
  };
};

export default connect(mapStateToProps, {
  startMusic,
  stopMusic,
  pauseMusic,
})(PlayPauseButton);
