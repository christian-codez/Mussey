import { song_action_types } from '../types';

const INITIAL_STATE = {
  genres: null,
  playlists: null,
  currentSongList: null,
  currentSong: null,
  repeat: 'none',
  favourites: null,
  queuedSong: null,
  currentSongList_copy: null,
  searchTerm: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case song_action_types.FETCH_GENRES:
      return { ...state, genres: action.payload };
    case song_action_types.FETCH_PLAYLISTS:
      return { ...state, playlists: action.payload };
    case song_action_types.FETCH_TRACKS:
      return {
        ...state,
        currentSongList: action.payload,
        currentSongList_copy: null,
      };
    case song_action_types.SEARCHING_SONG_STARTED:
      let searchInput = action.payload;

      //At the initial search, current song list into a temp state variable
      state = {
        ...state,
        currentSongList_copy: state.currentSongList_copy
          ? state.currentSongList_copy
          : state.currentSongList,
      };

      //if the searchTerm changes and it is greater than zero
      //reassign the copied over song list above into current son list before searhcing
      if (searchInput !== state.searchTerm && searchInput.length > 0) {
        state = {
          ...state,
          currentSongList: state.currentSongList_copy,
        };
      }

      //if there is a search input
      if (searchInput) {
        const filtered_song = state.currentSongList.tracks.filter(
          song =>
            song.name.toLowerCase().match(action.payload) ||
            song.artistName.toLowerCase().match(action.payload)
        );
        return {
          ...state,
          currentSongList: { tracks: filtered_song },
          searchTerm: action.payload,
        };
      } else {
        return {
          ...state,
          currentSongList: state.currentSongList_copy,
          searchTerm: null,
        };
      }

    case song_action_types.SET_CURRENT_TRACK:
      return { ...state, currentSong: action.payload };
    case song_action_types.REPEAT_CURRENT:
      return { ...state, repeat: 'current' };
    case song_action_types.REPEAT_NO_MUSIC:
      return { ...state, repeat: 'none', queuedSong: null };
    case song_action_types.REPEAT_ALL_MUSIC:
      return { ...state, repeat: 'all', queuedSong: null };
    case song_action_types.FETCH_FAVOURITES:
      return { ...state, favourites: action.payload };
    case song_action_types.ADD_FAVOURITES_TO_CURRENT_SONG_LISTS:
      return {
        ...state,
        currentSongList: action.payload,
        currentSongList_copy: null,
      };
    case song_action_types.SET_REPEAT_QUEUE:
      return { ...state, queuedSong: state.currentSong };
    case song_action_types.REPEAT_CURRENT_DISPATCHED:
      return { ...state, currentSong: state.queuedSong };
    case song_action_types.REPEAT_ALL_DISPATCHED:
      return { ...state, currentSong: state.currentSongList.tracks[0] };
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
