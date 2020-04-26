import { song_action_types } from '../types';

const INITIAL_STATE = {
  genres: null,
  playlists: null,
  currentSongList: null,
  currentSong: null,
  repeat: 'none',
  favourites: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case song_action_types.FETCH_GENRES:
      return { ...state, genres: action.payload };
    case song_action_types.FETCH_PLAYLISTS:
      return { ...state, playlists: action.payload };
    case song_action_types.FETCH_TRACKS:
      return { ...state, currentSongList: action.payload };
    case song_action_types.SET_CURRENT_TRACK:
      return { ...state, currentSong: action.payload };
    case song_action_types.REPEAT_CURRENT:
      return { ...state, repeat: 'current' };
    case song_action_types.REPEAT_NO_MUSIC:
      return { ...state, repeat: 'none' };
    case song_action_types.FETCH_FAVOURITES:
      return { ...state, favourites: action.payload };
    case song_action_types.ADD_FAVOURITES_TO_CURRENT_SONG_LISTS:
      return { ...state, currentSongList: action.payload };
    case song_action_types.NEXT_SONG:
      let nextTrack = state.currentSongList.tracks.findIndex(
        track => track.id === state.currentSong.id
      );

      if (nextTrack + 1 === state.currentSongList.tracks.length)
        return { ...state };
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
