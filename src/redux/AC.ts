import { 
  AnswerResponseNews, 
  AnswerResponseProfile, 
  constsReduser, 
  FormUsesData 
} from '../types/ACTypes'

export const actions = {
  setLogin: (status: string, email: string) => ({type: constsReduser.LOGIN, status, email} as const),
  resetLogin: () => ({type: constsReduser.RESET_LOGIN} as const),
  setLoader: (val: boolean) => ({type: constsReduser.SET_LOADER, val} as const),
  getNews: (news: AnswerResponseNews) => ({type: constsReduser.GET_NEWS, news} as const),
  getProfile: (profile: AnswerResponseProfile) => ({type: constsReduser.GET_PROFILE, profile} as const),
  getNewsSaga: () => ({type: constsReduser.GET_NEWS_SAGA} as const),
  loginedSaga: (dataUserForm: FormUsesData) => ({type: constsReduser.LOGINED_SAGA, dataUserForm} as const),
  getProfileSaga: () => ({type: constsReduser.GET_PROFILE_SAGA} as const)
}


