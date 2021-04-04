import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
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
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="news">
            <div className="title">Новости</div>
            {
              news?.data === undefined &&
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            }
            {
              news?.data.map(n => (
                <div key={n.title}>
                  <div className="news-title">{n.title}</div>
                  <div className="new-text">{n.text}</div>
                </div> )
              )        
            }
            <div className="count-news">
              Всего новостей: { news?.data.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

