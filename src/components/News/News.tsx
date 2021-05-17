import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './News.scss'
import { actions } from '../../redux/AC'
//types:
import { AppStateType } from '../../redux/store'

export const News: React.FC = () => {

  const dispatch = useDispatch()

  const news = useSelector((state: AppStateType) => state.reducer.news)

   useEffect(() => {
    dispatch(actions.getNewsSaga())
   }, [])
   
  return (
    <div className="news">
      <div className="news__title">Новости</div>
      {
        news?.data === undefined &&
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
      {
        news?.data.map(n => (
          <div key={n.title} className="news__container">
            <div className="news__container-title">{n.title}</div>
            <div className="news__container-text-news">{n.text}</div>
          </div> )
        )        
      }
      <div className="news__count">
        Всего новостей: { news?.data.length}
      </div>
    </div>
  )
}

