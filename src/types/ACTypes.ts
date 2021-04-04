import { actions } from "../redux/AC"

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

type PropertiesType<T> = T extends {[key: string]: infer U}? U : never
export type ActionsType = ReturnType<PropertiesType<typeof actions>>

