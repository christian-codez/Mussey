import React from 'react';
import './controlarea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faPlay,
  faForward,
  faRedo,
  faVolumeDown,
  faVolumeUp,
  faPlayCircle,
  faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';

const ControlArea = () => {
  return (
    <section className='mussey-controlarea'>
      <div className='container'>
        <div className='music-details align-items-center d-flex justify-content-start'>
          <div className='music-label'>
            <img
              src='https://www.w3schools.com/bootstrap4/newyork.jpg'
              class='rounded-circle'
              alt='Cinque Terre'
            />
          </div>
          <div>
            <span className='music-title'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className='music-author'>Nwachukwu Uchenna</span>
          </div>
        </div>
        <div className='play-progress d-flex align-items-center justify-content-between'>
          <div className='start-time'>
            <span>0.00</span>
          </div>
          <div className='slider-control'>
            <input
              class='tracking-slider range'
              type='range'
              min='0'
              value='0'
              step='1'
              max='216'
            />
          </div>
          <div className='end-time'>
            <span>0.00</span>
          </div>
        </div>
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
              <input type='range' min='1' max='100' value='50' />
            </div>
            <div className='volumn-up pointer-cursor'>
              <FontAwesomeIcon icon={faVolumeUp} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlArea;
