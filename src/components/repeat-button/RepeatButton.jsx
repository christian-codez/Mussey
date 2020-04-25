import React, { Fragment } from 'react';
import { faBan, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {
  repeatCurrentMusic,
  repeatNoMusic,
} from '../../redux/actions/songActions';
import { selectRepeat } from '../../redux/reselect/songSelector';

const RepeatButton = ({ song, repeat, repeatCurrentMusic, repeatNoMusic }) => {
  return (
    <Fragment>
      {repeat === 'none' ? (
        <div
          onClick={() => repeatCurrentMusic(song)}
          className={`${!song ? 'disabled' : ''} repeat-song pointer-cursor`}>
          <FontAwesomeIcon icon={faRedo} />
        </div>
      ) : (
        <div
          onClick={() => repeatNoMusic()}
          className={`${!song ? 'disabled' : ''} repeat-song pointer-cursor`}>
          <FontAwesomeIcon icon={faBan} />
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    repeat: selectRepeat(state),
  };
};

export default connect(mapStateToProps, { repeatCurrentMusic, repeatNoMusic })(
  RepeatButton
);
