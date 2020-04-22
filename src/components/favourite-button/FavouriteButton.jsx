import React, { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { setFavoutiteSong } from '../../redux/actions/songActions';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/reselect/userSelector';
import { selectFavourites } from '../../redux/reselect/songSelector';
import './favouritebutton.styles.css';
const FavouriteButton = ({
  setFavoutiteSong,
  status,
  track,
  currentUser,
  favouriteSongs,
}) => {
  const addToFavourite = () => {
    setFavoutiteSong({ track, uid: currentUser.id });
  };

  useEffect(() => {
    return () => {};
  }, [favouriteSongs]);

  const favouriteExists = () => {
    if (favouriteSongs) {
      return favouriteSongs.find(favourite => favourite.id === track.id)
        ? true
        : false;
    }
  };

  if (track) {
    return (
      <div
        onClick={addToFavourite}
        className={`favourite-action  pointer-cursor  `}>
        <span
          className={` ${
            favouriteExists() ? ' added' : 'not-added'
          } favorite `}>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
    );
  }

  return <Fragment></Fragment>;
};

const mapStateToProps = state => {
  return {
    currentUser: selectCurrentUser(state),
    favouriteSongs: selectFavourites(state),
  };
};

export default connect(mapStateToProps, { setFavoutiteSong })(FavouriteButton);
