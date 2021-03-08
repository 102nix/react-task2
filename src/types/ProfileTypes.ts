import { AnswerResponseProfile } from "./ACTypes"

export type ProfileStateType = {
  profile: null | AnswerResponseProfile
  logined: null | string
}
export type ProfileDispatchType = {
  getProfileSaga(): void
}
export type ProfileTypes = ProfileStateType & ProfileDispatchType
