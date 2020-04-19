import React from 'react';
import './authormeta.style.css';
import { connect } from 'react-redux';
import { selectCurrentSong } from '../../redux/reselect/songSelector';

const AuthorMeta = ({ song }) => {
  return (
    <div className='author-meta'>
      <span className='music-title'>{song ? song.name : ''}</span>
      <span className='music-author'>{song ? song.artistName : ''}</span>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    song: selectCurrentSong(state),
  };
};

export default connect(mapStateToProps)(AuthorMeta);
