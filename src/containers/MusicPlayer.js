import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PlayListBannerComponent from '../components/playlist-banner/PlayListBanner';
import PlayListDisplay from '../components/playlist-display/PlayListDisplay';
import LoadingOverlay from '../components/loading-overlay/LoadingOverlay';

const MusicPlayer = props => {
  return (
    <Fragment>
      <PlayListBannerComponent />
      <PlayListDisplay />
    </Fragment>
  );
};

export default MusicPlayer;