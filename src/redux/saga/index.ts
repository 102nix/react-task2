import { all } from 'redux-saga/effects'
import { newsWatcher } from './getNewsSaga'
import { profileWatcher } from './getProfileSaga'
import { loginedWatcher } from './loginedSaga'

export function* rootWatcher () {
  yield all ([newsWatcher(), loginedWatcher(), profileWatcher()])
}