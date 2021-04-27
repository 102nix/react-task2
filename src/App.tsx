import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
//components:
import { NavbarMenu } from './components/NavbarComponent/NavbarComponent'
import { Login } from './components/Login/Login'
import { Profile } from './components/Profile/Profile'
import { News } from './components/News/News'
import { About } from './components/About/About'
import { Tech } from './components/Tech/Tech'

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <Login /> } />
          <Route path="/profile" render={() => <Profile /> } />
          <Route path="/news" render={() => <News /> } />
          <Route path="/about" render={() => <About /> } />
          <Route path="/tech" render={() => <Tech /> } />
        </Switch>
      </div>
    </div>
  );
}

export default App;
