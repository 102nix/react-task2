import axios from 'axios';

export const authAPI = {
  login (email: string, password: string) {
    const strValue: string = 'application/json'
    return axios.post(`https://mysterious-reef-29460.herokuapp.com/api/v1/validate`, {
      email: email,
      password: password,
      strValue: strValue
    })
  },
  profile() {
    return axios.get(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1`)
  },
  getNews() {
    return axios.get(`https://mysterious-reef-29460.herokuapp.com/api/v1/news`)
  }
}