/** *****************************************************************
* Copyright         : 2024 Abdallah Ibrahim
* File Name         : store.ts
* Description       : This file contains the initialization of the redux store
*                    
* Revision History  :
* Date				Author    		Comments
* ---------------------------------------------------------------------------
* 24/09/2024		Abdallah Ibrahim		Created.
*
/***************************************************************** */

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
