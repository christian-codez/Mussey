import { player_action_types } from '../types';

export const startMusic = () => {
  return async dispatch => {
    try {
      dispatch({ type: player_action_types.PLAYER_STARTED });
    } catch (e) {}
  };
};

export const pauseMusic = () => {
  return async dispatch => {
    try {
      dispatch({ type: player_action_types.PLAYER_PAUSED });
    } catch (e) {
      console.log(e);
    }
  };
};

export const stopMusic = () => {
  return async dispatch => {
    try {
      dispatch({ type: player_action_types.PLAYER_STOPPED });
    } catch (e) {}
  };
};
