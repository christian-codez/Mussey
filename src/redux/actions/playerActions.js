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

export const repeatCurrentMusic = () => {
  return async dispatch => {
    try {
      dispatch({ type: player_action_types.REPEAT_CURRENT });
    } catch (e) {
      console.log(e);
    }
  };
};
export const repeaAllPlaylist = () => {
  return async dispatch => {
    try {
      dispatch({ type: player_action_types.REPEAT_PLAYLIST });
    } catch (e) {
      console.log(e);
    }
  };
};
export const repeatNoMusic = () => {
  return async dispatch => {
    try {
      dispatch({ type: player_action_types.REPEAT_NO_MUSIC });
    } catch (e) {
      console.log(e);
    }
  };
};
