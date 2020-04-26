import React from 'react';
import AuthorMeta from '../author-meta/AuthorMeta';
import CustomImage from '../custom-image/CustomImage';
import PlayArt from '../../img/music-playart.jpg';
import './musicmeta.css';
import { selectPlayerStatus } from '../../redux/reselect/playerSelector';
import { connect } from 'react-redux';

const MusicMeta = ({ title, artistName, playerStatus }) => {
  if (title) {
    return (
      <div className='music-meta align-items-center d-flex justify-content-start'>
        <div className='music-label'>
          <CustomImage
            src={PlayArt}
            className={`rounded-circle playart ${
              playerStatus === 'play' ? 'loading' : ''
            } `}
          />
        </div>
        <AuthorMeta title={title} artistName={artistName} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    playerStatus: selectPlayerStatus(state),
  };
};

export default connect(mapStateToProps, null)(MusicMeta);
