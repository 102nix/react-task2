import { AnswerResponseNews } from "./ACTypes"

export type NewsStateType = {
  news: null | AnswerResponseNews
}
export type NewsDispatchType = {
  getNewsSaga(): void
}
export type NewsTypes = NewsStateType & NewsDispatchType