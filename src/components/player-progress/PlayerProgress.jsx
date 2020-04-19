import React, { useState, useEffect } from 'react';
import './playerpogress.styles.css';
const PlayerProgress = () => {
  return (
    <div className='play-progress d-flex align-items-center justify-content-between'>
      <div className='start-time'>
        <span>0.00</span>
      </div>
      <div className='slider-control'>
        <input
          className='tracking-slider range'
          type='range'
          min='0'
          step='1'
          max='216'
        />
      </div>
      <div className='end-time'>
        <span>0.00</span>
      </div>
    </div>
  );
};

export default PlayerProgress;
