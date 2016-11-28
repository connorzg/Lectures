import React, {Component} from 'react';

export default class Loginbutton extends Component {

  _handleClick(e) {
    e.preventDefault();
    this.props.firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
  }

  render() {
    return <button onClick={(e) => this._handleClick(e)}>Logout</button>
  }
}
