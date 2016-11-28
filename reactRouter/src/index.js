import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import './index.css';
import NotFound from './NotFound'
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Resume from "./Resume";
import Contact from "./Contact"

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="contact" component={Contact} />
      <Route path="resume" component={Resume} />
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>,
  document.getElementById('root')
);
