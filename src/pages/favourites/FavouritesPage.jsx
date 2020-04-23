import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectFavourites } from '../../redux/reselect/songSelector';
import { selectCurrentUser } from '../../redux/reselect/userSelector';
import { addFavouritesToPlaylist } from '../../redux/actions/songActions';
import MusicPlayer from '../../containers/music-player/MusicPlayer';

const FavouritePage = ({ playlists, currentUser, addFavouritesToPlaylist }) => {
  useEffect(() => {
    console.log(currentUser);
    if (currentUser) addFavouritesToPlaylist(currentUser.id);
  }, [currentUser]);
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

export default connect(mapStateToProps, { addFavouritesToPlaylist })(
  FavouritePage
);
