import { createStore, applyMiddleware, compose } from 'redux';
import { combinedReducers } from './reducers/index';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

const middlewares = [thunk];
const redux_dev_tools =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : null;

console.log(process.env.NODE_ENV);

export const store = createStore(
  combinedReducers,
  compose(applyMiddleware(...middlewares), redux_dev_tools)
);

export const persistor = persistStore(store);
