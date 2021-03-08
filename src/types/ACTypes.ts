import { ThunkAction } from "redux-thunk"
import { AppStateType } from "../redux/store"


export enum constsReduser {
  LOGIN = 'LOGIN',
  RESET_LOGIN = 'RESET_LOGIN',
  SET_LOADER = 'SET_LOADER',
  GET_NEWS = 'GET_NEWS',
  GET_PROFILE = 'GET_PROFILE',
  GET_NEWS_SAGA = 'GET_NEWS_SAGA',
  LOGINED_SAGA = 'LOGINED_SAGA',
  PROFILE_SAGA = 'PROFILE_SAGA',
  GET_PROFILE_SAGA = "GET_PROFILE_SAGA"
}

export type FormUsesData = {
  email: string
  password: string
}

export type AnswerResponseNews = {
  status: string
  data: Array<{id: number, title: string, text: string}>
}

export type AnswerResponseProfile = {
  "userId": number
  "city": string,
  "languages": Array<string>,
  "social": Array<{label: string, link: string}> 
}

export type InitialStateType = {
  logined: null | string
  email: string
  load: boolean
  news: null | AnswerResponseNews
  profile: null | AnswerResponseProfile
}

export type ActionsType = SetLoginType | ResetLoginType | SetLoaderType | GetNewsType | GetProfileType

export type SetLoginType = {
  type: constsReduser.LOGIN
  status: string
  email: string
}
export type ResetLoginType = {
  type: constsReduser.RESET_LOGIN
}
export type SetLoaderType = {
  type: constsReduser.SET_LOADER
  val: boolean
}
export type GetNewsType = {
  type: constsReduser.GET_NEWS
  news: AnswerResponseNews
}
export type GetProfileType = {
  type: constsReduser.GET_PROFILE
  profile: AnswerResponseProfile
}
export type GetNewsSagaType = {
  type: constsReduser.GET_NEWS_SAGA
}
export type LoginedSagaType = {
  type: constsReduser.LOGINED_SAGA
  dataUserForm: FormUsesData
}
export type ProfileSagaType ={
  type: constsReduser.GET_PROFILE_SAGA
}

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>