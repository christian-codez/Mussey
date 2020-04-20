import { settings_action_types } from '../types';

export const toggleVolume = volume => {
  return async dispatch => {
    try {
      dispatch({ type: settings_action_types.VOLUME_CHANGED, payload: volume });
    } catch (e) {}
  };
};
