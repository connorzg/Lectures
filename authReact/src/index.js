import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './App';
import Home from './Home';
import Todos from './Todos'
import AuthService from './utils/AuthService'
import './index.css';

const auth = new AuthService('hEbMPdgCeruBufyJJiTKCkomgagGSs0g','trailerparkmedia.auth0.com')

const requireAuth = (nextState, replace) => {
  console.log('requireAuth');
  if (!auth.loggedIn()) {
    replace({
      pathname: '/'
    })
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} auth={auth}>
      <IndexRoute component={Home} />
      <Route path="/todos" component={Todos} onEnter={requireAuth} />
      <Route path="/access_token=:token" component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
);
