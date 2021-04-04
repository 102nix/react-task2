import React from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import './NavbarComponent.scss'
import { actions } from '../../redux/AC' 

export const NavbarMenu: React.FC = () => {
  
  const history = useHistory()

  const dispatch = useDispatch()
  
  const handlerExit = () => {
    delete localStorage.login
    dispatch(actions.resetLogin())
    history.push('/')
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="flex-column">
      <Navbar.Brand>ТЗ по React</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-toggle" />
      <Navbar.Collapse id="basic-toggle">
        <ul>
          <NavLink exact to="/" className="nav-link">Login</NavLink>
          <NavLink to="/profile" className="nav-link">Профиль пользователя</NavLink>
          <NavLink to="/news" className="nav-link">Новости</NavLink>
          <NavLink to="/about" className="nav-link">О проекте</NavLink>
          <NavLink to="/tech" className="nav-link">Технологии</NavLink>
          <div className='btn nav-link' onClick={handlerExit}>Выйти</div>
        </ul> 
      </Navbar.Collapse>
    </Navbar>
  )
}

