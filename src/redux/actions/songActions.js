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
