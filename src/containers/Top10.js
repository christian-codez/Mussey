import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PlayListBannerComponent from '../components/playlist-banner/PlayListBanner';
import PlayListDisplay from '../components/playlist-display/PlayListDisplay';

const MusicPlayer = props => {
  console.log(props.match);
  return (
    <Fragment>
      <PlayListBannerComponent />
      <PlayListDisplay />
    </Fragment>
  );
};

export default MusicPlayer;
