import React from 'react';
import { connect } from 'react-redux';
import { setCurrentSong } from '../../redux/actions/songActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faHeart,
  faHeartbeat,
} from '@fortawesome/free-solid-svg-icons';
import './trackrow.style.css';
import { selectCurrentSong } from '../../redux/reselect/songSelector';

const TrackRowComponent = ({ setCurrentSong, current, ...props }) => {
  const { artistName, name, playbackSeconds, id } = props.track;

  const currentId = current ? current.id : null;

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
  // ${currentSong.id === id ? 'yes' : ''}
  return (
    <tr
      onClick={() => setCurrentTrack(props.track)}
      className={`${styleCurrentRow()} track-item`}
      style={{ cursor: 'pointer' }}>
      <th scope='row' className='music-icon'>
        <span className='playicon'>
          <FontAwesomeIcon icon={faMusic} />
        </span>
      </th>
      <td>
        {name} ({artistName})
      </td>

      <td className='music-duration'>{calculateDuration(playbackSeconds)} </td>
    </tr>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    current: selectCurrentSong(state),
  };
};

export default connect(mapStateToProps, { setCurrentSong })(TrackRowComponent);
