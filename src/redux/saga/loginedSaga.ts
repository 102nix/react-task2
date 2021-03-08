import { call, put, takeEvery } from 'redux-saga/effects'
import { authAPI } from '../../api/api'
import { constsReduser } from '../../types/ACTypes'
import { IloginedSaga } from '../../types/SagaTypes'
import { setLoader, setLogin } from '../AC';

function* loginedWorker (action: IloginedSaga) {
  try {
    const response: IloginedSaga = yield call (authAPI.login, action.dataUserForm.email, action.dataUserForm.password)
    yield put (setLogin(response.data.status, action.dataUserForm.email))
    yield put (setLoader(false))
  } catch (err) {
    console.log(err)
  }
}

export function* loginedWatcher () {
  yield takeEvery (constsReduser.LOGINED_SAGA, loginedWorker)
}