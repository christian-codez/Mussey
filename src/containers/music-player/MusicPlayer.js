import React, { Fragment } from 'react';
import PlayListBannerComponent from '../../components/playlist-banner/PlayListBanner';
import PlayListDisplay from '../../components/playlist-display/PlayListDisplay';

const MusicPlayer = ({ playlists, ...props }) => {
  return (
    <Fragment>
      <PlayListBannerComponent />
      <PlayListDisplay playlists={playlists} />
    </Fragment>
  );
};

export default MusicPlayer;
