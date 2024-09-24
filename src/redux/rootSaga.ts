/** *****************************************************************
* Copyright         : 2024 Abdallah Ibrahim
* File Name         : rootSaga.ts
* Description       : This file forks all sagas to be used in the redux store
*                    
* Revision History  :
* Date				Author    		Comments
* ---------------------------------------------------------------------------
* 24/09/2024		Abdallah Ibrahim		Created.
*
/***************************************************************** */

import { fork } from 'redux-saga/effects';

import usersSaga from 'modules/users/sagas';

function* rootSaga() {
  yield fork(usersSaga);
}

export default rootSaga;
