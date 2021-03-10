import { 
  AnswerResponseNews, 
  AnswerResponseProfile, 
  constsReduser, 
  FormUsesData, 
  GetNewsSagaType, 
  GetNewsType, 
  GetProfileType, 
  LoginedSagaType, 
  ProfileSagaType, 
  ResetLoginType, 
  SetLoaderType, 
  SetLoginType } from '../types/ACTypes'

export const setLogin = (status: string, email: string): SetLoginType => ({type: constsReduser.LOGIN, status, email})
export const resetLogin = (): ResetLoginType => ({type: constsReduser.RESET_LOGIN})
export const setLoader = (val: boolean): SetLoaderType => ({type: constsReduser.SET_LOADER, val})
export const getNews = (news: AnswerResponseNews): GetNewsType => ({type: constsReduser.GET_NEWS, news})
export const getProfile = (profile: AnswerResponseProfile): GetProfileType => ({type: constsReduser.GET_PROFILE, profile})
export const getNewsSaga = (): GetNewsSagaType => ({type: constsReduser.GET_NEWS_SAGA})
export const loginedSaga = (dataUserForm: FormUsesData): LoginedSagaType => ({type: constsReduser.LOGINED_SAGA, dataUserForm})
export const getProfileSaga = (): ProfileSagaType => ({type: constsReduser.GET_PROFILE_SAGA})

// export const onLogined = (dataUserForm: FormUsesData): ThunkType => async (dispatch) => {
//   try {
//     let response = await authAPI.login(dataUserForm.email, dataUserForm.password)
//     dispatch(setLogin(response.data.status, dataUserForm.email))
//     dispatch(setLoader(false))
//   } catch (error) {
//     dispatch(setLogin('err', dataUserForm.email))
//     dispatch(setLoader(false))
//   }
// }

// export const onGetProfile = (): ThunkType => async (dispatch) => {
//   try {
//     let response = await authAPI.profile()
//     dispatch(getProfile(response.data.data))
//   } catch (error) {
//     console.log(error)
//   }
// }
