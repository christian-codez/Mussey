import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  selectFavourites,
  selectCurrentSongList,
} from '../redux/reselect/songSelector';
import { withRouter } from 'react-router-dom';
export const MyContext = React.createContext();

const MyProvider = ({ favourite, currentSongLists, ...props }) => {
  const [favouriteTracks, setFavouriteTracks] = useState(null);
  const [playlists, setPlaylist] = useState(null);
  const path = props.history.location.pathname;

  useEffect(() => {
    setFavouriteTracks(favourite);
  }, [favourite]);

  useEffect(() => {
    setPlaylist(currentSongLists);
  }, [currentSongLists]);

  console.log(playlists);

  return (
    <MyContext.Provider
      value={{
        favourite: favouriteTracks,
        playlists: playlists,
      }}>
      {props.children}
    </MyContext.Provider>
  );
};

const mapStateToProps = (state, ownProps) => {
  const path = ownProps.history.location.pathname;

  return {
    favourite: selectFavourites(state),
    currentSongLists: selectCurrentSongList(state),
  };
};

export default withRouter(connect(mapStateToProps)(MyProvider));
