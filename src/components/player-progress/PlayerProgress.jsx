import React, { useState, useEffect, Fragment, useRef } from 'react';
import './playerpogress.styles.css';
import { connect } from 'react-redux';
import { selectPlayerStatus } from '../../redux/reselect/playerSelector';
const PlayerProgress = ({ song, audioRef, playerStatus }) => {
  const [timeElapsed, setTimeElapsed] = useState('0.00');
  const trackersliderRef = useRef(null);

  useEffect(() => {
    let intervalId;
    if (playerStatus === 'play') {
      intervalId = setInterval(updateTracker, 1000);
    }
    if (playerStatus === 'stopped') {
      clearInterval(intervalId);
    }
  }, [playerStatus]);

  function updateTracker() {
    let currentTime = audioRef.current.currentTime;
    setTimeElapsed((currentTime / 100).toFixed(2));
    trackersliderRef.current.value = currentTime;
  }

  return (
    <Fragment>
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
      </div>
      <div className={`${!song ? 'disabled' : ''} end-time`}>
        <span>{song ? (song.playbackSeconds / 60).toFixed(2) : '0.00'}</span>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    playerStatus: selectPlayerStatus(state),
  };
};

export default connect(mapStateToProps)(PlayerProgress);
