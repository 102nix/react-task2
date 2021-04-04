import { authAPI } from '../../api/api'
import { call, put, takeEvery } from 'redux-saga/effects'
import { InewsSaga } from '../../types/SagaTypes'
import { actions } from '../AC'
import { constsReduser } from '../../types/ACTypes'

function* newsWorker (action: InewsSaga) {
  try {
    const response: InewsSaga = yield call (authAPI.getNews)
    yield put (actions.getNews(response.data)) 
  } catch (error) {
    console.log(error)
  }
}

export function* newsWatcher () { 
  yield takeEvery (constsReduser.GET_NEWS_SAGA, newsWorker)
}