import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { previousSong } from '../../redux/actions/songActions';
import { selectPlayPrev } from '../../redux/reselect/songSelector';

const PreviousButton = ({ song, showPrev, previousSong }) => {
  return (
    <Fragment>
      <div
        onClick={() => previousSong()}
        className={` ${!song ? 'disabled' : ''} ${
          !showPrev ? 'disabled' : ''
        } previous-song  pointer-cursor`}>
        <FontAwesomeIcon icon={faBackward} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    showPrev: selectPlayPrev(state),
  };
};

export default connect(mapStateToProps, { previousSong })(PreviousButton);
