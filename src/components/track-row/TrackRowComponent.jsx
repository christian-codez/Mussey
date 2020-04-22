import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentSong,
  setFavoutiteSong,
} from '../../redux/actions/songActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import './trackrow.style.css';
import { selectCurrentSong } from '../../redux/reselect/songSelector';
import { selectCurrentUser } from '../../redux/reselect/userSelector';

const TrackRowComponent = ({
  setCurrentSong,
  setFavoutiteSong,
  current,
  currentUser,
  ...props
}) => {
  const { artistName, name, playbackSeconds, id } = props.track;

  const calculateDuration = duration => {
    if (duration < 60) return `00.${duration}`;

    return `${(duration / 60).toFixed(2)}`;
  };

  const setCurrentTrack = track => {
    setCurrentSong(track);
  };

  const styleCurrentRow = () => {
    if (current && current.id === id) {
      return 'current-track';
    } else {
      return '';
    }
  };

  return (
    <tr
      onClick={() => setCurrentTrack(props.track)}
      className={`${styleCurrentRow()} track-item`}
      style={{ cursor: 'pointer' }}>
      <th scope='row'>
        <span className='playicon'>
          <FontAwesomeIcon icon={faMusic} />
        </span>
      </th>
      <td>{name}</td>
      <td>{artistName}</td>
      <td>{calculateDuration(playbackSeconds)} </td>
    </tr>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    current: selectCurrentSong(state),
    currentUser: selectCurrentUser(state),
  };
};

export default connect(mapStateToProps, { setCurrentSong, setFavoutiteSong })(
  TrackRowComponent
);
