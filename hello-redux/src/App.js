import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';

import DecrementButton from './DecrementButton'
import IncrementButton from './IncrementButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Counter: {this.props.counter}</h2>
        </div>
        <p className="App-intro">
          <IncrementButton>+</IncrementButton>
          <DecrementButton>-</DecrementButton>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, null)(App);
