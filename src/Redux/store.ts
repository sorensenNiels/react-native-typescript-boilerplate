import AsyncStorage from '@react-native-async-storage/async-storage';
import RootReducer from '@Redux/Reducers';
import {applyMiddleware, compose, createStore, Middleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

declare const window: any;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

// Create Store
export const configureStore = (preloadedState: object) => {
  const middlewares: Middleware[] = [thunk];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger({}));
  }

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composed = [applyMiddleware(...middlewares)];

  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(...composed)
  );
  persistStore(store);

  return store;
};
