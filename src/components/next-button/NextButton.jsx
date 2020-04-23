import React from 'react';
import { connect } from 'react-redux';
import { nextSong } from '../../redux/actions/songActions';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectPlayNext } from '../../redux/reselect/songSelector';

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

const mapStateToProps = state => {
  return {
    showNext: selectPlayNext(state),
  };
};
export default connect(mapStateToProps, { nextSong })(NextButton);
