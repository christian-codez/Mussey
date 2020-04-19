import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faPlay,
  faForward,
  faRedo,
  faVolumeDown,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';
import './musiccontrol.style.css';
const MusicControl = () => {
  return (
    <div className='controls d-flex justify-content-between align-items-center'>
      <div className='previous-song pointer-cursor'>
        <FontAwesomeIcon icon={faBackward} />
      </div>
      <div className='play-pause pointer-cursor'>
        {' '}
        <FontAwesomeIcon icon={faPlay} />
      </div>
      <div className='next-song pointer-cursor'>
        <FontAwesomeIcon icon={faForward} />
      </div>
      <div className='repeat-song pointer-cursor'>
        <FontAwesomeIcon icon={faRedo} />
      </div>
      <div className='volume-control d-flex align-items-center justify-content-between'>
        <div className='volumn-down pointer-cursor'>
          <FontAwesomeIcon icon={faVolumeDown} />
        </div>
        <div className='control-gear '>
          <input type='range' min='1' max='100' defaultValue={'50'} />
        </div>
        <div className='volumn-up pointer-cursor'>
          <FontAwesomeIcon icon={faVolumeUp} />
        </div>
      </div>
    </div>
  );
};

export default MusicControl;
