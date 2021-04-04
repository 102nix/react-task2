import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/AC'
import { useHistory } from 'react-router-dom'
import './Profile.scss'
// Png's for <img/>:
import profilePng from '../../imgs/empty_staff.png'
import vk from '../../imgs/vk.png'
import telegram from '../../imgs/telegram.png'
import web from '../../imgs/web.png'
import youtube from '../../imgs/youtube.png'
import twitter from '../../imgs/twitter.png'
import twitch from '../../imgs/twitch.png'
//types: string
import { AppStateType } from '../../redux/store'

export const Profile: React.FC = () => {

  const history = useHistory()

  const dispatch = useDispatch()
  const profile = useSelector((state: AppStateType) => state.reducer.profile)
  // const logined = useSelector((state: AppStateType) => state.reducer.logined)

  const imgSub = [vk, telegram, web, youtube, twitter, twitch]

    useEffect(() => {
      const checkLogin = localStorage.getItem('login') || 'err'
      if (checkLogin !== 'ok') history.push('/')
      dispatch(actions.getProfileSaga())
    }, [])

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-12"><div className="title">Профиль пользователя</div></div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <img className="profile-img" src={profilePng} alt="Card image cap" />
            </div>
            <div className="col-12 col-sm-6">
              <div className="profile-title">Пользователь с <strong>userId</strong>: {profile?.userId}</div>
              <div className="profile-city">Город: <strong>{profile?.city}</strong></div>
              <div>Знание языков: <strong>{profile?.languages[0]}, {profile?.languages[1]}</strong></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="social-title">Социальные сети:</div>
            </div>
            <div className="col-12">
              <div className="social-actions">
                {
                  profile?.social === undefined &&
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
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
          </div>
        </div>
      </div>
    )
}

