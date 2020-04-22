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
export const setFavoutiteSong = track => {
  return async dispatch => {
    const favouriteRef = await firestore
      .collection('favourites')
      .doc(`${track.uid}`);

    const favouriteSnapshot = await favouriteRef.get();

    try {
      if (!favouriteSnapshot.exists) {
        await favouriteRef.set({ tracks: [track] });
      } else {
        //use array some to check if that song exists
        const existingFavourites = favouriteSnapshot.data().tracks;
        console.log('existing:', existingFavourites);
        //check if the track already exists
        const result = existingFavourites.find(
          trackItem => trackItem.id === track.id
        );

        let updatedFavourites;

        if (result) {
          updatedFavourites = existingFavourites.filter(
            trackItem => track.id !== trackItem.id
          );
        } else {
          updatedFavourites = [...existingFavourites, track];
        }
        await favouriteRef.update({ tracks: updatedFavourites });
        console.log('Latest: ', updatedFavourites);
        dispatch({
          type: song_action_types.FETCH_FAVOURITES,
          payload: updatedFavourites,
        });
      }
    } catch (error) {
      console.log('User creation error ', error);
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
          payload: favouriteSnapshot.data(),
        });
      }
    } catch (error) {
      console.log('Error fetching favourite songs ', error);
    }
  };
};
