import { authAPI } from '../../api/api'
import { call, put, takeEvery } from 'redux-saga/effects'
import { IprofileSaga } from '../../types/SagaTypes'
import { getProfile } from '../AC'
import { constsReduser } from '../../types/ACTypes'

function* profileWorker () {
  const response: IprofileSaga = yield call (authAPI.profile)
  yield put (getProfile(response.data.data))
}

export function* profileWatcher () {
  yield takeEvery (constsReduser.GET_PROFILE_SAGA, profileWorker)
}