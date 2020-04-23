import { combineReducers } from 'redux';
import songReducer from '../reducers/songReducer';
import userReducer from '../reducers/userReducer';
import playerReducer from '../reducers/playerReducer';
import settingsReducer from '../reducers/settingsReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings'],
};
export const combinedReducers = persistReducer(
  persistConfig,
  combineReducers({
    songs: songReducer,
    user: userReducer,
    player: playerReducer,
    settings: settingsReducer,
  })
);
