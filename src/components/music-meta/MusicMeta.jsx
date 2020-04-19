import React from 'react';
import './musicmeta.css';
import AuthorMeta from '../author-meta/AuthorMeta';
import CustomImage from '../custom-image/CustomImage';
const MusicMeta = () => {
  return (
    <div className='music-meta align-items-center d-flex justify-content-start'>
      <div className='music-label'>
        <CustomImage />
      </div>
      <AuthorMeta />
    </div>
  );
};

export default MusicMeta;
