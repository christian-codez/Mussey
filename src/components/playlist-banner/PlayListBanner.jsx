import React from 'react';
import BackgroundImage from '../../img/default-banner.jpg';
import AuthorMeta from '../author-meta/AuthorMeta';
const PlayListBanner = () => {
  return (
    <section className='d-flex align-items-center' style={defaultBgImage}>
      <AuthorMeta />
    </section>
  );
};

const defaultBgImage = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '25%',
  padding: '0 5px',
};

export default PlayListBanner;
