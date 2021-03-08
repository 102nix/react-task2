import { FormDataLogin } from "./LoginFormTypes"

export type LoginStateType = {
  logined: null | string
  email: string
  load: boolean
}
export type LoginDispatcType = {
  loginedSaga(dataForm: FormDataLogin): void
  setLoader(val: boolean): void
}
export type LoginTypes = LoginStateType & LoginDispatcType