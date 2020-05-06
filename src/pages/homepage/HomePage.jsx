import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCurrentSongList } from '../../redux/reselect/songSelector';
import MusicPlayer from '../../containers/music-player/MusicPlayer';
import { fetchSongsAsync } from '../../redux/actions/songActions';
import { withRouter } from 'react-router-dom';
const HomePage = ({ playlists, history, fetchSongsAsync }) => {
  useEffect(() => {
    fetchSongsAsync('/tracks/top');
  }, [history.location]);

  return (
    <div>
      <MusicPlayer playlists={playlists} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: selectCurrentSongList(state),
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchSongsAsync })(HomePage)
);
