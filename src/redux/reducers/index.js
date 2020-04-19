import { combineReducers } from 'redux';
import songReducer from '../reducers/songReducer';
import userReducer from '../reducers/userReducer';

export const combinedReducers = combineReducers({
  songs: songReducer,
  user: userReducer,
});
