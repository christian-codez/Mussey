import React from 'react';
import { connect } from 'react-redux';
import { setCurrentSong } from '../../redux/actions/songActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import './trackrow.style.css';

const TrackRowComponent = ({ setCurrentSong, ...props }) => {
  const { artistName, name, playbackSeconds } = props.track;
  const calculateDuration = duration => {
    if (duration < 60) return `00.${duration}s`;

    return `${(duration / 60).toFixed(2)}s`;
  };

  const setCurrentTrack = track => {
    setCurrentSong(track);
  };

  return (
    <tr
      onClick={() => setCurrentTrack(props.track)}
      className='track-item'
      style={{ cursor: 'pointer' }}>
      <th scope='row'>
        <span className='playicon'>
          <FontAwesomeIcon icon={faMusic} />
        </span>
      </th>
      <td>{name}</td>
      <td>{artistName}</td>
      <td>{calculateDuration(playbackSeconds)}</td>
    </tr>
  );
};

export default connect(null, { setCurrentSong })(TrackRowComponent);
