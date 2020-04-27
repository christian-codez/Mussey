import React, { Fragment } from 'react';
import { faBan, faRedo, faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {
  repeatCurrentMusic,
  repeatNoMusic,
  repeaAllPlaylist,
} from '../../redux/actions/songActions';
import { selectRepeat } from '../../redux/reselect/songSelector';
import './repeatbutton.css';
import { createStructuredSelector } from 'reselect';

const RepeatButton = ({
  song,
  repeat,
  repeatCurrentMusic,
  repeaAllPlaylist,
  repeatNoMusic,
}) => {
  return (
    <Fragment>
      {repeat === 'none' ? (
        <div
          onClick={() => repeatCurrentMusic(song)}
          className={`${!song ? 'disabled' : ''} repeat-song pointer-cursor`}>
          <FontAwesomeIcon icon={faBan} />
          <span className='repeat-desc'>Repeat {repeat}</span>
        </div>
      ) : (
        ''
      )}
      {repeat === 'current' ? (
        <div
          onClick={() => repeaAllPlaylist()}
          className={`${!song ? 'disabled' : ''} repeat-song pointer-cursor`}>
          <FontAwesomeIcon className='active' icon={faRedo} />
          <span className='repeat-desc-active'>Repeat {repeat}</span>
        </div>
      ) : (
        ''
      )}{' '}
      {repeat === 'all' ? (
        <div
          onClick={() => repeatNoMusic()}
          className={`${!song ? 'disabled' : ''} repeat-song pointer-cursor`}>
          <FontAwesomeIcon className='active' icon={faHistory} />
          <span className='repeat-desc-active'>Repeat {repeat}</span>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    repeat: selectRepeat,
  });

export default connect(mapStateToProps, {
  repeatCurrentMusic,
  repeaAllPlaylist,
  repeatNoMusic,
})(RepeatButton);
