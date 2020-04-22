import React, { useEffect } from 'react';
import TrackRowComponent from '../track-row/TrackRowComponent';
import './playlist-display.style.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  selectCurrentSongList,
  selectFavourites,
} from '../../redux/reselect/songSelector';
import { fetchSongsAsync } from '../../redux/actions/songActions';
import { selectCurrentUser } from '../../redux/reselect/userSelector';
import { fetchFavourites } from '../../redux/actions/songActions';

const PlayListDisplay = ({
  currentSongLists,
  favouriteSongs,
  currentUser,
  fetchFavourites,
  fetchSongsAsync,
  selectFavourites,
  ...props
}) => {
  const pathname = props.history.location.pathname;
  useEffect(() => {
    if (currentUser) fetchFavourites(currentUser.id);

    if (props.history.location.pathname === '/') {
      fetchSongsAsync('/tracks/top');
    } else if (pathname.includes('genres')) {
      fetchSongsAsync(`/genres/${props.match.params.id}/tracks/top`);
    } else if (pathname.includes('playlists')) {
      fetchSongsAsync(`/playlists/${props.match.params.id}/tracks`);
    } else if (pathname.includes('playlists')) {
      fetchSongsAsync(`/playlists/${props.match.params.id}/tracks`);
    } else if (pathname.includes('favourites')) {
      if (currentUser) fetchFavourites(currentUser.id);
    }
  }, [pathname]);

  useEffect(() => {
    console.log('user');
    if (currentUser) fetchFavourites(currentUser.id);
  }, [currentUser]);

  return (
    <section className='mussey-playlist scroll'>
      <table className='table table-hover table-dark'>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'>Title</th>
            <th scope='col'>Artist</th>
            <th scope='col'>Duration</th>
          </tr>
        </thead>
        <tbody>
          {currentSongLists &&
            currentSongLists.map(track => (
              <TrackRowComponent key={track.id} track={track} />
            ))}
        </tbody>
      </table>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => {
  const path = ownProps.history.location.pathname;
  return {
    currentSongLists: path.includes('favourites')
      ? selectFavourites(state)
      : selectCurrentSongList(state),
    currentUser: selectCurrentUser(state),
    favouriteSongs: selectFavourites(state),
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchSongsAsync, fetchFavourites })(
    PlayListDisplay
  )
);
