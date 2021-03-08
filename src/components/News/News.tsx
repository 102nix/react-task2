import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './News.scss'
import { getNewsSaga } from '../../redux/AC'
//types:
import { AppStateType } from '../../redux/store'
import { NewsStateType, NewsTypes } from '../../types/NewsTypes'

 const News: React.FC<NewsTypes> = props => {

   useEffect(() => {
    props.getNewsSaga()
   }, [])
   
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="news">
            <div className="title">Новости</div>
            {
              props.news?.data === undefined &&
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            }
            {
              props.news?.data.map(news => (
                <div key={news.title}>
                  <div className="news-title">{news.title}</div>
                  <div className="new-text">{news.text}</div>
                </div> )
              )        
            }
            <div className="count-news">
              Всего новостей: { props.news?.data.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppStateType): NewsStateType => {
  return {
    news: state.reducer.news
  }
}
const connector = connect(mapStateToProps, { getNewsSaga })
export default connector(News)