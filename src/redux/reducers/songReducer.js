import { song_action_types } from '../types';

const INITIAL_STATE = {
  genres: null,
  currentSongList: null,
  currentSong: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case song_action_types.FETCH_GENRES:
      return { ...state, genres: action.payload };
    case song_action_types.FETCH_TRACKS:
      return { ...state, currentSongList: action.payload };
    case song_action_types.SET_CURRENT_TRACK:
      return { ...state, currentSong: action.payload };
    default:
      return state;
  }
};
