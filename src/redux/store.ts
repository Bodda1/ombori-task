import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import usersReducer from 'modules/users/reducer';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});
sagaMiddleware.run(rootSaga);

export default store;
