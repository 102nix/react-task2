import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FormLogin from './FormLogin'
import { loginedSaga, setLoader } from '../../redux/AC'
//types:
import { AppStateType } from '../../redux/store'
import { LoginStateType, LoginTypes } from '../../types/LoginTypes'
import { FormDataLogin } from '../../types/LoginFormTypes'

const Login: React.FC<LoginTypes> = props => {

  const history = useHistory()
  
  const checkLogin = localStorage.getItem('login') || 'err'
  if (checkLogin === 'ok') history.push('/profile')
  
  const onSubmit = (dataForm: FormDataLogin): void => {
    props.setLoader(true)
    props.loginedSaga(dataForm)
  }

  return (
    <FormLogin 
      onSubmit={onSubmit}  
      logined={props.logined}
      email={props.email}
      load={props.load}
    />
  )
}

const mapStateToProps = (state: AppStateType): LoginStateType => {
  return {
    logined: state.reducer.logined,
    email: state.reducer.email,
    load: state.reducer.load
  }
}

const connector = connect(mapStateToProps, { loginedSaga, setLoader })
export default connector(Login)
