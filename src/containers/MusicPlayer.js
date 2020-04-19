import React, { Fragment } from 'react';
import PlayListBannerComponent from '../components/playlist-banner/PlayListBanner';
import PlayListDisplay from '../components/playlist-display/PlayListDisplay';
const MusicPlayer = props => {
  return (
    <Fragment>
      <PlayListBannerComponent />
      <PlayListDisplay />
    </Fragment>
  );
};

export default MusicPlayer;
