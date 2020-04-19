import { song_action_types } from '../types';
import napsterAPI from '../../napsterConfig/api-config';

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

export const fetchSongsAsync = endpoint => {
  return async dispatch => {
    try {
      //run an async method to get the genres
      const response = await napsterAPI.get(`${endpoint}?apikey=${apiKey}`);
      console.log(response.data);

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
