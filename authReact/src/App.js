import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, IndexLink, hashHistory} from 'react-router';


class App extends Component {

  _logoutLink() {
    return( <a href="#" onClick={(e)=>{
      e.preventDefault();
      this.props.route.auth.logout();
      hashHistory.push('/');
    }}>logout</a>
  )}

  _loginLink() {
    return( <a href="#" onClick={(e)=>{
      e.preventDefault();
      this.props.route.auth.login();
    }}>
    login
    </a>
  )}

  render() {
    let auth = this.props.route.auth;
    let sessionLink = auth.loggedIn() ? this._logoutLink() : this._loginLink();

    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth
      })
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/todos" activeClassName="active">Todo</Link></li>
          <li>{sessionLink}</li>
        </ul>
        {children}
      </div>
    );
  }
}

export default App;
