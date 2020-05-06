import { settings_action_types } from '../types';

const INITIAL_STATE = {
  volume: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case settings_action_types.VOLUME_CHANGED:
      return { ...state, volume: action.payload };
    default:
      return state;
  }
};
