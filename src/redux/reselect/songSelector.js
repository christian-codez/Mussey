import { createSelector } from 'reselect';

const selectGenres = state => state.songs.genres;
const selectSongs = state => state.songs;

export const selectMusicGenres = createSelector([selectGenres], genres =>
  genres ? genres.genres : genres
);

export const selectMusicPlaylists = createSelector([selectSongs], songs =>
  songs.playlists ? songs.playlists : null
);

export const selectFavourites = createSelector([selectSongs], songs =>
  songs.favourites ? songs.favourites : null
);

export const selectCurrentSongList = createSelector([selectSongs], songs =>
  songs.currentSongList ? songs.currentSongList.tracks : songs.currentSongList
);

export const selectCurrentSong = createSelector(
  [selectSongs],
  songs => songs.currentSong
);

export const selectFirstSong = createSelector([selectSongs], songs =>
  songs.currentSongList ? songs.currentSongList.tracks[0] : null
);

export const selectSongListLength = createSelector([selectSongs], songs =>
  songs.currentSongList ? songs.currentSongList.tracks.length : 0
);

export const selectCurrentSongIndex = createSelector(
  [selectSongs, selectCurrentSong],
  (songs, current) =>
    songs.currentSongList && current
      ? songs.currentSongList.tracks.findIndex(
          track => track.id === current.id
        ) + 1
      : null
);

export const selectPlayNext = createSelector(
  [selectCurrentSongIndex, selectSongListLength],
  (currentTrack, TotalTracks) => (currentTrack < TotalTracks ? true : false)
);

export const selectPlayPrev = createSelector(
  [selectCurrentSongIndex],
  currentTrack => (currentTrack === 1 ? false : true)
);

export const selectRepeat = createSelector(
  [selectSongs],
  songs => songs.repeat
);
