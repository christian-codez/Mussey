import { combineReducers } from 'redux';
import songReducer from '../reducers/songReducer';
import userReducer from '../reducers/userReducer';
import playerReducer from '../reducers/playerReducer';

export const combinedReducers = combineReducers({
  songs: songReducer,
  user: userReducer,
  player: playerReducer,
});
