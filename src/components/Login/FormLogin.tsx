import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import './FormLogin.scss'
import { FieldOfLogin } from '../../FormControls/Input'
import { required } from '../../Validators/validate'
import { FormDataLogin, LoginFormPropsTypes } from '../../types/LoginFormTypes'

const FormLog: React.FC<InjectedFormProps<FormDataLogin, LoginFormPropsTypes> & LoginFormPropsTypes> = ({handleSubmit, ...props}) => {

  const history = useHistory()

  useEffect(() => {
    props.initialize({
      email: props.email,
      password: ''
    })
    if (props.logined === 'ok') {
      localStorage.setItem('login', props.logined)
      history.push('/profile')
    }
  }, [props.logined])

  return (
    <div className="container">
      <div className="log-content">
        <div className="row">
          <p className="col-12 title-log">Login:</p>
        </div>
        <div className="row">
          <form className="col-8 log-form" onSubmit={handleSubmit}>
            <div className="from-group">
              <Field
                type="email"
                placeholder="Email" 
                name="email" 
                component={FieldOfLogin} 
                validate={[required]} 
                className="form-control" 
              />
            </div>
            <div className="from-group">
              <Field 
                type="password"
                placeholder="Password" 
                name="password" 
                component={FieldOfLogin} 
                validate={[required]} 
                className="form-control"
                />
            </div>
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
          </form>
        </div>
        
        { props.logined === 'err' &&
          <div className="error-reg">Неверный Login или пароль!</div>
        }
      </div>
    </div>
  )
}
const FormLogin = reduxForm<FormDataLogin, LoginFormPropsTypes>({form: 'Login-form'})(FormLog)
export default FormLogin 