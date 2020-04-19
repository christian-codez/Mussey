import React, { useState, useEffect } from 'react';
import './controlarea.css';
import MusicMeta from '../music-meta/MusicMeta';
import PlayerProgress from '../player-progress/PlayerProgress';
import MusicControl from '../music-controls/MusicControl';
import { connect } from 'react-redux';
import { selectCurrentSong } from '../../redux/reselect/songSelector';

const ControlArea = ({ song }) => {
  const { name, artistName } = song ? song : { name: null, artistName: null };
  return (
    <section className='mussey-controlarea'>
      <div className='container'>
        <MusicMeta title={name} artistName={artistName} />
        <MusicControl song={song} />
      </div>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    song: selectCurrentSong(state),
  };
};

export default connect(mapStateToProps, {})(ControlArea);
