import React, { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './NavbarComponent.scss'
import { actions } from '../../redux/AC' 

export const NavbarMenu: React.FC = () => {

  const [showMenu, setShowMenu] = useState(['header__menu'])
  const [clsBurger, setClsBurger] = useState(['header__burger'])

  const history = useHistory()

  const dispatch = useDispatch()

  const handlerVisibleMenu = () => {
    if (showMenu.indexOf('active') === -1) {
      setShowMenu([...showMenu, 'active'])
      setClsBurger([...clsBurger, 'active'])
    } else {
      setShowMenu([...showMenu.splice(showMenu.indexOf('header__menu'), 1)])
      setClsBurger([...clsBurger.splice(clsBurger.indexOf('header__burger'), 1)])
    }
  }
    
  const handlerExit = () => {
    delete localStorage.login
    dispatch(actions.resetLogin())
    handlerVisibleMenu()
    history.push('/')
  }

  return (
    <div className="header">
      <div className="header__body">
        <div className="header__logo">
          ТЗ по React
        </div>
        <div 
          className={clsBurger.join(" ")} 
          onClick={handlerVisibleMenu}
        >
          <span></span>
        </div>
        <div className={showMenu.join(" ")}>
          <ul className="header__list">
            <li>
              <NavLink exact to="/" onClick={handlerVisibleMenu}>Login</NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={handlerVisibleMenu}>Профиль пользователя</NavLink>
            </li>
            <li>
              <NavLink to="/news" onClick={handlerVisibleMenu}>Новости</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handlerVisibleMenu}>О проекте</NavLink>
            </li>
            <li>
              <NavLink to="/tech" onClick={handlerVisibleMenu}>Технологии</NavLink>
            </li>
            <li>
              <div className="exit" onClick={handlerExit}>Выйти</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

