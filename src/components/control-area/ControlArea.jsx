import React from 'react';
import { connect } from 'react-redux';
import MusicMeta from '../music-meta/MusicMeta';
import MusicControl from '../music-controls/MusicControl';
import { selectCurrentSong } from '../../redux/reselect/songSelector';
import './controlarea.css';

const ControlArea = ({ song }) => {
  const { name, artistName } = song ? song : { name: null, artistName: null };
  return (
    <section className='mussey-controlarea'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <MusicMeta title={name} artistName={artistName} />
            <MusicControl song={song} />
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    song: selectCurrentSong(state),
  };
};

export default connect(mapStateToProps, null)(ControlArea);
