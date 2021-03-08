import { combineReducers, createStore, applyMiddleware } from 'redux'
import reducer from './rootReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from './saga/index'

const sagaMiddleware = createSagaMiddleware()

let rootReducer = combineReducers({
  reducer,
  form: formReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const storage = createStore(rootReducer, applyMiddleware(thunkMiddleware, sagaMiddleware))

sagaMiddleware.run(rootWatcher)


export default storage