import React, { Fragment, useEffect } from 'react';
import { startMusic, stopMusic } from '../../redux/actions/playerActions';
import { connect } from 'react-redux';
const MusicReset = ({ song, audioRef, startMusic, stopMusic }) => {
  useEffect(() => {
    if (song) {
      resetPlayer();
    }
  }, [song]);

  useEffect(() => {
    stopSong();
  }, []);

  const resetPlayer = () => {
    stopSong();
    audioRef.current.src = song.previewURL;
    playSong();
  };

  const playSong = () => {
    startMusic();
    audioRef.current.play();
  };

  const stopSong = () => {
    stopMusic();
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return <Fragment></Fragment>;
};

export default connect(null, {
  startMusic,
  stopMusic,
})(MusicReset);
