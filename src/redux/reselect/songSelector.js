import { createSelector } from 'reselect';

const selectGenres = state => state.songs.genres;

export const selectMusicGenres = createSelector([selectGenres], genres =>
  genres ? genres.genres : genres
);
