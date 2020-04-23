import React, { useRef } from 'react';
import {
  faVolumeMute,
  faVolumeDown,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleVolume } from '../../redux/actions/settingsAction';
import { connect } from 'react-redux';
import { selectSettingsVolume } from '../../redux/reselect/settingsSelector';

const VolumeControl = ({ audioRef, song, toggleVolume, volumeLevel }) => {
  const volumeRangeControl = useRef(null);

  const ToggleVolume = event => {
    const { value } = event.target;
    audioRef.current.volume = value;
    toggleVolume(value);
  };

  const increaseVolume = () => {
    let updatedVolume = (parseFloat(volumeLevel) + 0.1).toFixed(1);
    volumeRangeControl.current.value = updatedVolume;
    audioRef.current.volume = updatedVolume;
    toggleVolume(updatedVolume);
  };
  const decreaseVolume = () => {
    let updatedVolume = (parseFloat(volumeLevel) - 0.1).toFixed(1);
    volumeRangeControl.current.value = updatedVolume;
    audioRef.current.volume = updatedVolume;
    toggleVolume(updatedVolume);
  };

  return (
    <div className='volume-control d-flex align-items-center justify-content-between'>
      {volumeLevel >= 0.2 && volumeLevel < 1 ? (
        <div
          onClick={decreaseVolume}
          className={`${
            !song || volumeLevel === '0.1' || volumeLevel < '0.1'
              ? 'disabled'
              : ''
          } volumn-down pointer-cursor`}>
          <FontAwesomeIcon icon={faVolumeDown} />
        </div>
      ) : (
        <div
          onClick={decreaseVolume}
          className={`${
            !song || volumeLevel < '0.1' ? 'disabled' : ''
          } volumn-down pointer-cursor`}>
          <FontAwesomeIcon icon={faVolumeMute} />
        </div>
      )}
      <div className={` ${!song ? 'disabled' : ''} control-gear `}>
        <input
          ref={volumeRangeControl}
          onChange={ToggleVolume}
          type='range'
          min='0'
          max='1'
          className='range'
          step={0.01}
          defaultValue={volumeLevel}
        />
      </div>
      <div
        onClick={increaseVolume}
        className={`${
          !song || volumeLevel === '1.0' ? 'disabled' : ''
        } volumn-up pointer-cursor`}>
        <FontAwesomeIcon icon={faVolumeUp} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    volumeLevel: selectSettingsVolume(state),
  };
};
export default connect(mapStateToProps, { toggleVolume })(VolumeControl);
