import { song_action_types } from '../types';
import napsterAPI from '../../napsterConfig/api-config';
import { firestore } from '../../firebase/firebase.util';

const apiKey = 'NTFkNjVmZTktYWJkZC00YjJkLWIxMGMtNjc5NTkyMGNhMzcx';
export const fetchGenresAsync = () => {
  return async dispatch => {
    try {
      //run an async method to get the genres
      const response = await napsterAPI.get(`/genres?apikey=${apiKey}`);
      dispatch({
        type: song_action_types.FETCH_GENRES,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchFavourites = userId => {
  return async dispatch => {
    const favouriteRef = await firestore
      .collection('favourites')
      .doc(`${userId}`);

    const favouriteSnapshot = await favouriteRef.get();
    try {
      if (favouriteSnapshot.exists) {
        dispatch({
          type: song_action_types.FETCH_FAVOURITES,
          payload: favouriteSnapshot.data().tracks,
        });
      }
    } catch (error) {
      console.log('Error fetching favourite songs ', error);
    }
  };
};
export const addFavouritesToPlaylist = userId => {
  return async dispatch => {
    const favouriteRef = await firestore
      .collection('favourites')
      .doc(`${userId}`);
    const favouriteSnapshot = await favouriteRef.get();

    try {
      if (favouriteSnapshot.exists) {
        dispatch({
          type: song_action_types.ADD_FAVOURITES_TO_CURRENT_SONG_LISTS,
          payload: favouriteSnapshot.data(),
        });
      }
    } catch (error) {
      console.log('Error fetching favourite songs ', error);
    }
  };
};

export const toggleFavourite = favouriteTrack => {
  return async dispatch => {
    try {
      const favouriteRef = await firestore
        .collection('favourites')
        .doc(`${favouriteTrack.uid}`);

      const favouriteSnapshot = await favouriteRef.get();
      if (!favouriteSnapshot.exists) {
        await favouriteRef.set({ tracks: [favouriteTrack] });
      } else {
        //use array some to check if that song exists
        const existingFavourites = favouriteSnapshot.data().tracks;

        //check if the track already exists
        const result = existingFavourites.find(
          trackItem => trackItem.id === favouriteTrack.id
        );

        let updatedFavourites;

        if (result) {
          updatedFavourites = existingFavourites.filter(
            trackItem => favouriteTrack.id !== trackItem.id
          );
        } else {
          updatedFavourites = [...existingFavourites, favouriteTrack];
        }
        await favouriteRef.update({ tracks: updatedFavourites });

        dispatch({
          type: song_action_types.TOGGLE_FAVOURITES,
          payload: updatedFavourites,
        });
      }
    } catch (e) {}
  };
};

export const fetchPlayAsync = () => {
  return async dispatch => {
    try {
      //run an async method to get the genres
      const response = await napsterAPI.get(
        `/playlists?apikey=${apiKey}&limit=200`
      );

      dispatch({
        type: song_action_types.FETCH_PLAYLISTS,
        payload: response.data.playlists,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchSongsAsync = endpoint => {
  return async dispatch => {
    try {
      const response = await napsterAPI.get(
        `${endpoint}?apikey=${apiKey}&limit=200`
      );
      dispatch({
        type: song_action_types.FETCH_TRACKS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const setCurrentSong = track => {
  return async dispatch => {
    try {
      dispatch({
        type: song_action_types.SET_CURRENT_TRACK,
        payload: track,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const nextSong = () => {
  return async dispatch => {
    try {
      dispatch({ type: song_action_types.NEXT_SONG });
    } catch (e) {}
  };
};

export const previousSong = () => {
  return async dispatch => {
    try {
      dispatch({ type: song_action_types.PREVIOUS_SONG });
    } catch (e) {}
  };
};

export const repeatCurrentMusic = song => {
  return async dispatch => {
    try {
      dispatch({ type: song_action_types.REPEAT_CURRENT, payload: song });
      dispatch({ type: song_action_types.SET_REPEAT_QUEUE });
    } catch (e) {
      console.log(e);
    }
  };
};
export const repeaAllPlaylist = () => {
  return async dispatch => {
    try {
      dispatch({ type: song_action_types.REPEAT_ALL_MUSIC });
    } catch (e) {
      console.log(e);
    }
  };
};
export const repeatNoMusic = () => {
  return async dispatch => {
    try {
      dispatch({ type: song_action_types.REPEAT_NO_MUSIC });
    } catch (e) {
      console.log(e);
    }
  };
};

export const assignRepeatQueueToCurrentSong = () => {
  return async dispatch => {
    try {
      dispatch({ type: song_action_types.REPEAT_CURRENT_DISPATCHED });
    } catch (e) {
      console.log(e);
    }
  };
};
export const repeatAllSongsInPlaylist = () => {
  return async dispatch => {
    try {
      dispatch({ type: song_action_types.REPEAT_ALL_DISPATCHED });
    } catch (e) {
      console.log(e);
    }
  };
};
