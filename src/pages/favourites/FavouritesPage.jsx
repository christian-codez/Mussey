import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectFavourites } from '../../redux/reselect/songSelector';
import { selectCurrentUser } from '../../redux/reselect/userSelector';
import { addFavouritesToPlaylist } from '../../redux/actions/songActions';
import MusicPlayer from '../../containers/music-player/MusicPlayer';
import { withRouter } from 'react-router-dom';

const FavouritePage = ({
  playlists,
  currentUser,
  history,
  addFavouritesToPlaylist,
}) => {
  useEffect(() => {
    if (currentUser) addFavouritesToPlaylist(currentUser.id);
  }, [currentUser, history.location]);
  return (
    <div>
      <MusicPlayer playlists={playlists} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: selectFavourites(state),
    currentUser: selectCurrentUser(state),
  };
};

export default withRouter(
  connect(mapStateToProps, { addFavouritesToPlaylist })(FavouritePage)
);
