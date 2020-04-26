import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  previousSong,
  assignRepeatQueueToCurrentSong,
  repeatAllSongsInPlaylist,
  nextSong,
} from '../../redux/actions/songActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import {
  startMusic,
  stopMusic,
  pauseMusic,
} from '../../redux/actions/playerActions';
import { selectPlayerStatus } from '../../redux/reselect/playerSelector';
import { selectPlayNext } from '../../redux/reselect/songSelector';

const PlayPauseButton = ({
  song,
  playerStatus,
  startMusic,
  pauseMusic,
  audioRef,
  stopMusic,
  nextSong,
  showNext,
  repeat,
  repeatAllSongsInPlaylist,
}) => {
  const playSong = () => {
    startMusic();
    audioRef.current.play();
  };

  useEffect(() => {
    audioRef.current.onended = () => {
      stopMusic();
      if (showNext && repeat !== 'current') {
        nextSong();
      } else if (!showNext && repeat === 'all') {
        repeatAllSongsInPlaylist();
      } else if (repeat === 'current') {
        assignRepeatQueueToCurrentSong();
        playSong();
      }
    };
  }, [repeat]);

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
    repeat: state.songs.repeat,
  };
};

export default connect(mapStateToProps, {
  startMusic,
  stopMusic,
  pauseMusic,
  nextSong,
  repeatAllSongsInPlaylist,
})(PlayPauseButton);
