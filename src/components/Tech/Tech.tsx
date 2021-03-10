import React from 'react';
import './Tech.scss';

const Tech: React.FC = () => {
  
  return (
    <div className="tech">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tech-title">Используемые технологии</div>
              <div className="tech-text">
                React, React-router-dom, React Function Components.<br/>
                React hooks, React-Typescript.<br/>
                Redux, Redux-saga, React-redux.<br/>
                Formik, Yup.<br/>
                Bootstrap, React-bootstrap, Node-sass, CSS Flexbox<br/>
                LocalStorage<br/>
                Axios.<br/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tech