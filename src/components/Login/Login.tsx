import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './FormLogin.scss'
import { Input } from '../InputElement/Input'
import { actions } from '../../redux/AC'
//types:
import { AppStateType } from '../../redux/store'
import { FormDataLogin } from '../../types/LoginFormTypes'

export const Login: React.FC = () => {

  const dispatch = useDispatch()
  const logined = useSelector((state: AppStateType) => state.reducer.logined)
  const email = useSelector((state: AppStateType) => state.reducer.email)
  const load = useSelector((state: AppStateType) => state.reducer.load)

  useEffect(() => {
    if (logined === 'ok') {
      localStorage.setItem('login', logined)
      history.push('/profile')
    }
  }, [logined])

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
              email: email,
              password: ''
            }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email').required('Required'),
              password: Yup.string()
                .max(5, 'Nust be 5 characters')
                .required('Required')
            })}
            onSubmit = {(dataForm: FormDataLogin): void => {
              dispatch(actions.setLoader(true))
              dispatch(actions.loginedSaga(dataForm))
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
                  !load &&
                  <button className="btn btn-success">
                    Login
                  </button>
                }
                { 
                  load &&
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
