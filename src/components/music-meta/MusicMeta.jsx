import React from 'react';
import './musicmeta.css';
import AuthorMeta from '../author-meta/AuthorMeta';
import CustomImage from '../custom-image/CustomImage';
import PlayArt from '../../img/music-playart.jpg';

const MusicMeta = ({ title, artistName }) => {
  if (title) {
    return (
      <div className='music-meta align-items-center d-flex justify-content-start'>
        <div className='music-label'>
          <CustomImage src={PlayArt} className='rounded-circle loading' />
        </div>
        <AuthorMeta title={title} artistName={artistName} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default MusicMeta;
