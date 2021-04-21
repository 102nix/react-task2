import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './Login.scss'
//components:
import { Input } from '../InputElement/Input'
import Loader from '../Loader/Loader'
//AC's:
import { actions } from '../../redux/AC'
//types:
import { AppStateType } from '../../redux/store'
import { FormDataLogin } from '../../types/LoginFormTypes'

export const Login: React.FC = () => {

  const history = useHistory()

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

 
  const checkLogin = localStorage.getItem('login') || 'err'
  if (checkLogin === 'ok') history.push('/profile') 
  
  return (
    <div className="login">
      <p className="title-login">Login:</p>
      <Formik
        initialValues={{
          email: email,
          password: ''
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string()
            .max(5, 'Must be 5 characters')
            .required('Required')
        })}
        onSubmit = {(dataForm: FormDataLogin): void => {
          dispatch(actions.setLoader(true))
          dispatch(actions.loginedSaga(dataForm))
        }}
      >
        <Form>
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
          <div className="actions">
            {
              !load ? ( <button className="btn-login">Login</button> ) : <Loader />  
            }
          </div>
        </Form>
      </Formik>
    </div>
  )
}
