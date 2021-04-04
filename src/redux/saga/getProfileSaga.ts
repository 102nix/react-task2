import { authAPI } from '../../api/api'
import { call, put, takeEvery } from 'redux-saga/effects'
import { IprofileSaga } from '../../types/SagaTypes'
import { actions } from '../AC'
import { constsReduser } from '../../types/ACTypes'

function* profileWorker () {
  const response: IprofileSaga = yield call (authAPI.profile)
  yield put (actions.getProfile(response.data.data))
}

export function* profileWatcher () {
  yield takeEvery (constsReduser.GET_PROFILE_SAGA, profileWorker)
}