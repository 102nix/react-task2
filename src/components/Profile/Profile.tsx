import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/AC'
import { useHistory } from 'react-router-dom'
import './Profile.scss'
// Png's for <img/>:
import profilePng from '../../imgs/empty_staff.png'
//types: string
import { AppStateType } from '../../redux/store'
import { imgSub } from '../../DataForComponents/DataForProfile'
import Loader from '../Loader/Loader'

export const Profile: React.FC = () => {

  const history = useHistory()

  const dispatch = useDispatch()

  const profile = useSelector((state: AppStateType) => state.reducer.profile)

    useEffect(() => {
      const checkLogin = localStorage.getItem('login') || 'err'
      if (checkLogin !== 'ok') history.push('/')
      dispatch(actions.getProfileSaga())
    }, [])

    return (
      <div className="profile">
        <div className="profile__title">Профиль пользователя</div>
        <div className="profile__img">
          <img src={profilePng} alt="Card image cap" />
        </div>
        <div className="profile__info">
          <div className="profile__title">Пользователь с <span>userId</span>: {profile?.userId}</div>
          <div className="profile__city">Город: <strong>{profile?.city}</strong></div>
          <div>Знание языков: <strong>{profile?.languages[0]}, {profile?.languages[1]}</strong></div>
        </div>
        <div className="profile__social-title">Социальные сети:</div>
        <div className="profile__social-actions">
          {
            profile?.social === undefined &&
            <Loader />
          }
          {
            profile?.social.map((soc, i) => (
              <a 
                className="soc-img" 
                key={soc.label} 
                href={soc.link} 
                about-blank
              >
                <img src={imgSub[i]} alt={soc.label}/>
              </a> )
            )
          }
        </div>
      </div>
    )
}

