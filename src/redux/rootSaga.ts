import { fork } from 'redux-saga/effects';

import usersSaga from 'modules/users/sagas';

function* rootSaga() {
  yield fork(usersSaga);
}

export default rootSaga;
