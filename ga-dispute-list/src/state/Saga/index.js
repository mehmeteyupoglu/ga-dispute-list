import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects'
const URL = "https://api.staging.gamerarena.com/disputes/";

function* fetchInfo() {
  const res = yield axios.get(URL).then((response) => response);
  yield put({
    type: 'FETCH_INFO',
    payload: res
  })
}

function* actionWatcher() {
  yield takeLatest('GET_INFO', fetchInfo)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}