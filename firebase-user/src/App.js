import React, {Component} from 'react';
import firebase from './utils/firebase';
import _ from 'lodash';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log('logged in:', user);
        this.setState({ user });
      } else {
        // No user is signed in.
        this.setState({ user: {} })
        console.log('not logged in');
      }
    });
  }

  _sessionButton() {
    let sessionButton;
    if (_.isEmpty(this.state.user)) {
      return <LoginButton firebase={firebase} />
    } else {
      return <LogoutButton firebase={firebase} />
    }
  }

  render() {
    return (
      <div className="App">
        {this._sessionButton()}
        <h1>Hello {this.state.user.displayName}</h1>
      </div>
    );
  }
}

export default App;
