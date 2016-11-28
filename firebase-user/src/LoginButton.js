import React, {Component} from 'react';

export default class Loginbutton extends Component {

  _handleClick(e) {
    e.preventDefault();
    let provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider);
  }

  render() {
    return <button onClick={(e) => this._handleClick(e)}>Login</button>
  }
}
