import { createSelector } from 'reselect';

const selectGenres = state => state.songs.genres;
const selectSongs = state => state.songs;

export const selectMusicGenres = createSelector([selectGenres], genres =>
  genres ? genres.genres : genres
);

export const selectCurrentSongList = createSelector([selectSongs], songs =>
  songs.currentSongList ? songs.currentSongList.tracks : songs.currentSongList
);
export const selectCurrentSong = createSelector(
  [selectSongs],
  songs => songs.currentSong
);
