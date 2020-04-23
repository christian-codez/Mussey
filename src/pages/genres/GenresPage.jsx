import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCurrentSongList } from '../../redux/reselect/songSelector';
import MusicPlayer from '../../containers/music-player/MusicPlayer';
import { fetchSongsAsync } from '../../redux/actions/songActions';
const HomePage = ({ playlists, fetchSongsAsync, ...props }) => {
  const paramsId = props.match.params.id;
  useEffect(() => {
    fetchSongsAsync(`/genres/${paramsId}/tracks/top`);
  }, [playlists]);
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

export default connect(mapStateToProps, { fetchSongsAsync })(HomePage);
