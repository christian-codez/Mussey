import { player_action_types } from '../types';

const INITIAL_STATE = {
  playerStatus: 'stopped',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case player_action_types.PLAYER_STARTED:
      return { ...state, playerStatus: 'play' };
    case player_action_types.PLAYER_PAUSED:
      return { ...state, playerStatus: 'pause' };
    case player_action_types.PLAYER_STOPPED:
      return { ...state, playerStatus: 'stopped' };
    default:
      return state;
  }
};
