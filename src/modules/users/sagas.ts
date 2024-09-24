import { takeLatest, call, put } from 'redux-saga/effects';
import { type AxiosResponse } from 'axios';

import { checkIfAPIResponseIsSuccess } from 'utils/functions/general';
import { type Users } from 'models/users';

import { getUsers } from './api';
import { fetchUsersList, fetchUsersListSuccess, fetchUsersListFail } from './reducer';
import { type FetchUsersListActions } from './saga';

function* fetchUsersListSaga(action: FetchUsersListActions) {
  const { payload } = action;
  const { override, callbackAction } = payload;

  try {
    const response: AxiosResponse<Users> = yield call(getUsers, payload);

    if (checkIfAPIResponseIsSuccess(response.status) === false)
      throw new Error(response.status.toString());

    if (callbackAction) callbackAction(true);
    yield put(fetchUsersListSuccess({ ...response.data.data, override }));
  } catch (error) {
    if (callbackAction) callbackAction();
    yield put(fetchUsersListFail({ override }));
  }
}

function* usersSaga() {
  yield takeLatest(fetchUsersList.type, fetchUsersListSaga);
}

export default usersSaga;
