import React from 'react';
import './authormeta.style.css';
import { connect } from 'react-redux';
import { selectCurrentSong } from '../../redux/reselect/songSelector';
import { shortenString } from '../../utils/songUtils';

const AuthorMeta = ({ song }) => {
  return (
    <div className='author-meta'>
      <span className='music-title'>
        {song ? shortenString(song.name, 17) : ''}
      </span>
      <span className='music-author'>
        {song ? shortenString(song.artistName, 25) : ''}
      </span>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    song: selectCurrentSong(state),
  };
};

export default connect(mapStateToProps)(AuthorMeta);
