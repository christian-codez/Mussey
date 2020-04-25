import React, { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  toggleFavourite,
  fetchFavourites,
} from '../../redux/actions/songActions';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/reselect/userSelector';
import { selectFavourites } from '../../redux/reselect/songSelector';
import './favouritebutton.styles.css';
const FavouriteButton = ({ fetchFavourites, ...props }) => {
  const { track, currentUser, toggleFavourite, favouriteSongs } = props;
  const [favourite, setSetFavourite] = useState(null);
  const addToFavourite = async () => {
    if (currentUser) {
      await toggleFavourite({ ...track, uid: currentUser.id });
      await fetchFavourites(currentUser.id);
    }
  };
  useEffect(() => {
    setSetFavourite(favouriteSongs);
  }, []);

  useEffect(() => {
    setSetFavourite(favouriteSongs);
  }, [favouriteSongs]);

  const favouriteExists = () => {
    if (favourite) {
      return favourite.find(favourite => favourite.id === track.id)
        ? true
        : false;
    }
  };

  if (track && currentUser) {
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

export default connect(mapStateToProps, { toggleFavourite, fetchFavourites })(
  FavouriteButton
);
