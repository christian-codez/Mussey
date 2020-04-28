import React, { Fragment } from 'react';
import AuthorMeta from '../author-meta/AuthorMeta';
import CustomImage from '../custom-image/CustomImage';
import PlayArt from '../../img/music-playart.jpg';
import './musicmeta.css';
import { selectPlayerStatus } from '../../redux/reselect/playerSelector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const MusicMeta = ({ title, artistName, playerStatus }) => {
  if (title) {
    return (
      <div className='music-meta align-items-center d-flex justify-content-start'>
        <div className='music-label'>
          <CustomImage
            src={PlayArt}
            className={`rounded-circle playart ${
              playerStatus === 'play' ? 'spin ' : ''
            } `}
          />
        </div>
        <AuthorMeta title={title} artistName={artistName} />
      </div>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

const mapStateToProps = () =>
  createStructuredSelector({
    playerStatus: selectPlayerStatus,
  });

export default connect(mapStateToProps, null)(MusicMeta);
