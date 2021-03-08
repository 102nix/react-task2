import {  Action } from 'redux'
import { AxiosResponse } from 'axios'
import { AnswerResponseNews, AnswerResponseProfile, FormUsesData } from './ACTypes'

export interface InewsSaga extends Action {
  getNews() : void
  data: AnswerResponseNews
}

export interface IloginedSaga extends Action {
  data: any
  dataUserForm: FormUsesData
  status: string
  login (email: string, password: string): Promise<AxiosResponse<any>>
}

export interface IprofileSaga extends Action {
  data: any
  getProfile (profile: AnswerResponseProfile): void
}