import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, IndexLink} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
          <li><Link to="/resume" activeClassName="active">Resume</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
