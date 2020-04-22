import { createStore, applyMiddleware, compose } from 'redux';
import { combinedReducers } from './reducers/index';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

const middlewares = [thunk];

export const store =
  process.env.NODE_ENV === 'development'
    ? createStore(
        combinedReducers,
        compose(
          applyMiddleware(...middlewares),
          process.env.NODE_ENV === 'development'
            ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
            : ''
        )
      )
    : createStore(combinedReducers, compose(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);
