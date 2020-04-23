import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { stopMusic } from '../../redux/actions/playerActions';
import { connect } from 'react-redux';

const StopButton = ({ song, audioRef, stopMusic }) => {
  const stopSong = () => {
    stopMusic();
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.onended = () => {};
  };

  return (
    <div
      onClick={() => stopSong()}
      className={` ${!song ? 'disabled' : ''} repeat-song pointer-cursor`}>
      <FontAwesomeIcon icon={faSquare} />
    </div>
  );
};

export default connect(null, { stopMusic })(StopButton);
