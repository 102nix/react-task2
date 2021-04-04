import React from 'react';
import './About.scss';

export const About: React.FC = () => {
  
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-title">О проекте</div>
              <div className="about-text">
                Данный проект это ТЗ для React-разработчика.<br/>
                Приложение использует простой «бэк» расположенный на heroku.<br/>
                Необходимо выполнить:<br/>
                Создать форму для входа - 2 поля: email + пароль.<br/>
                По нажатию на «Login» уходит POST запрос.<br/>
                Адрес и метод для запроса: POST https://mysterious-reef-29460.herokuapp.com/api/v1/validate.<br/>
                Корректные данные: <strong>email = 'max@test.com', password = '12345'</strong>.<br/>
                В случае успеха — пользователя нужно редиректить на страницу профиля, на которой будет нужно получить
                подробную информацию о пользователе.<br/>
                Если введены некорректные данные - вывести на экран сообщение с ошибкой.<br/>
                После получения такого ответа, необходимо очистить из формы поле пароля (email не трогать).<br/>
                На странице профиля необходимо сделать GET запрос, и получить подробную информацию о пользователе:<br/>
                GET https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/:id.<br/>
                Полученные данные, положить в стор, и отрисовать на странице.<br/>
                На странице, нужно вывести новости в формате «заголовок» + «текст».<br/>
                Внизу страницы — «всего новостей ХХ».<br/>
                GET https://mysterious-reef-29460.herokuapp.com/api/v1/news.<br/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
