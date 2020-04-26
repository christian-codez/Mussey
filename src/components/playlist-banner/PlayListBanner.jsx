import React from 'react';
import BackgroundImage from '../../img/default-banner.jpg';
import AuthorMeta from '../author-meta/AuthorMeta';
import './playlistbanner.css';
const PlayListBanner = () => {
  return (
    <section
      className='d-flex align-items-center music-banner'
      style={defaultBgImage}>
      <AuthorMeta />
    </section>
  );
};

const defaultBgImage = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  padding: '0 5px',
  minHeight: '14vh',
};

export default PlayListBanner;
