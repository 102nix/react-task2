import { ActionsType, constsReduser, InitialStateType } from '../types/ACTypes'

let initialState: InitialStateType = {
  logined: null,
  email: '',
  load: false,
  news: null,
  profile: null
}

const reducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case constsReduser.LOGIN:
      return {
        ...state,
        logined: action.status,
        email: action.email
      }
    case constsReduser.RESET_LOGIN:
      return {
        ...state,
        logined: null,
      }
    case constsReduser.SET_LOADER:
      return {
        ...state,
        load: action.val
      }
    case constsReduser.GET_NEWS:
      return {
        ...state,
        news: action.news,
      }
    case constsReduser.GET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    default: return state
  }
}

export default reducer
