import { song_action_types } from '../types';

const INITIAL_STATE = {
  genres: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case song_action_types.FETCH_GENRES:
      return { ...state, genres: action.payload };
    default:
      return state;
  }
};
