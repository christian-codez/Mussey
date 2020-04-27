import React from 'react';
import { connect } from 'react-redux';
import { nextSong } from '../../redux/actions/songActions';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectPlayNext } from '../../redux/reselect/songSelector';
import { createStructuredSelector } from 'reselect';

const NextButton = ({ song, nextSong, showNext }) => {
  return (
    <div
      onClick={() => nextSong()}
      className={` ${!song ? 'disabled' : ''} ${
        !showNext ? 'disabled' : ''
      } next-song pointer-cursor`}>
      <FontAwesomeIcon icon={faForward} />
    </div>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    showNext: selectPlayNext,
  });
export default connect(mapStateToProps, { nextSong })(NextButton);
