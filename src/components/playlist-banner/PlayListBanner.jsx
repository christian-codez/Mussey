import React, { Fragment } from 'react';
import BackgroundImage from '../../img/default-banner.jpg';
import AuthorMeta from '../author-meta/AuthorMeta';
import './playlistbanner.css';
import SearchField from '../search-field/SearchField';
const PlayListBanner = () => {
  return (
    <Fragment>
      <section
        className='d-flex align-items-center music-banner'
        style={defaultBgImage}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <AuthorMeta />
            </div>
            <div className='col-md-5'>
              <SearchField />
            </div>
          </div>
        </div>
      </section>
      <section className='mobile-search-section'>
        <SearchField />
      </section>
    </Fragment>
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
