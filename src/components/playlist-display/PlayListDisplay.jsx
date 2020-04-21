import React, { useEffect } from 'react';
import TrackRowComponent from '../track-row/TrackRowComponent';
import './playlist-display.style.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentSongList } from '../../redux/reselect/songSelector';
import { fetchSongsAsync } from '../../redux/actions/songActions';
const PlayListDisplay = ({ currentSongLists, fetchSongsAsync, ...props }) => {
  useEffect(() => {
    if (props.history.location.pathname === '/') {
      fetchSongsAsync('/tracks/top');
    } else if (props.history.location.pathname.includes('genres')) {
      fetchSongsAsync(`/genres/${props.match.params.id}/tracks/top`);
    } else if (props.history.location.pathname.includes('playlists')) {
      fetchSongsAsync(`/playlists/${props.match.params.id}/tracks`);
    }
  }, [props.history.location.pathname]);

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
  return {
    currentSongLists: selectCurrentSongList(state),
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchSongsAsync })(PlayListDisplay)
);
