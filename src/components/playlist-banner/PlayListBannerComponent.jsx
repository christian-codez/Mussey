import React from 'react';
import BackgroundImage from '../../img/default-banner.jpg';
const PlayListBannerComponent = () => {
  return (
    <section
      className='d-flex align-items-center'
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '25%',
        padding: '0 5px',
      }}>
      <span>
        <span className='music-title'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
        </span>
        <span className='music-author'>Nwachukwu Uchenna</span>
      </span>
    </section>
  );
};

export default PlayListBannerComponent;
