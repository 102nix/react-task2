export type FormDataLogin = {
  email: string
  password: string
}

export type LoginFormPropsTypes = {
  onSubmit(dataForm: FormDataLogin): void
  logined: null | string
  email: string
  load: boolean
}