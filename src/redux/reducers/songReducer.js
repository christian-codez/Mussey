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
    case song_action_types.NEXT_SONG:
      let nextTrack = state.currentSongList.tracks.findIndex(
        track => track.id === state.currentSong.id
      );
      return {
        ...state,
        currentSong: state.currentSongList.tracks[nextTrack + 1],
      };
    case song_action_types.PREVIOUS_SONG:
      let prevTrack = state.currentSongList.tracks.findIndex(
        track => track.id === state.currentSong.id
      );
      return {
        ...state,
        currentSong: state.currentSongList.tracks[prevTrack - 1],
      };
    default:
      return state;
  }
};
