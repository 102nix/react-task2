import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './FormLogin.scss'
import { Input } from '../InputElement/Input'
import { loginedSaga, setLoader } from '../../redux/AC'
//types:
import { AppStateType } from '../../redux/store'
import { LoginStateType, LoginTypes } from '../../types/LoginTypes'
import { FormDataLogin } from '../../types/LoginFormTypes'

const Login: React.FC<LoginTypes> = props => {

  useEffect(() => {
    if (props.logined === 'ok') {
      localStorage.setItem('login', props.logined)
      history.push('/profile')
    }
  }, [props.logined])

  const history = useHistory()
  
  const checkLogin = localStorage.getItem('login') || 'err'
  if (checkLogin === 'ok') history.push('/profile')
  
  return (
    <div className="container">
      <div className="log-content">
        <div className="row">
          <p className="col-12 title-log">Login:</p>
        </div>
        <div className="row">
          <Formik
            initialValues={{
              email: props.email,
              password: ''
            }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email').required('Required'),
              password: Yup.string()
                .max(5, 'Nust be 5 characters')
                .required('Required')
            })}
            onSubmit = {(dataForm: FormDataLogin): void => {
              console.log('data Submit',dataForm)
              props.setLoader(true)
              props.loginedSaga(dataForm)
            }}
          >
            <Form className="col-8 log-form">
              <Input
                label="Email"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
              />
              <Input
                label="Password"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />
              <div className="add-action">
                {
                  !props.load &&
                  <button className="btn btn-success">
                    Login
                  </button>
                }
                { 
                  props.load &&
                  <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Logining...
                  </button>
                } 
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
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
