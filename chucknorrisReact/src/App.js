import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: '',
      prevJokes: [],
      isFetching: false
    }
  }

  componentDidMount() {
    this._getRandomJoke();

  }

  _handleClick(e) {
    e.preventDefault();
    this._getRandomJoke();
    let oldJoke = this.state.joke
    let prevJokes = this.state.prevJokes;
    prevJokes.push(oldJoke);
    this.setState({
      prevJokes: prevJokes
    })
  }

  _getRandomJoke() {
    this.setState({
      isFetching: true
    })
    axios.get('https://api.icndb.com/jokes/random').then((data) => {
      let newJoke = data.data.value.joke;
      this.setState({
        joke: newJoke,
        isFetching: false
      })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.isFetching ? 'Loading....' : this.state.joke}</h1>
        <button onClick={ (e) => this._handleClick(e) }>Get another joke</button>
        <h3>Prev jokes</h3>
        <ul>
          {this.state.prevJokes.map((joke, i) => {
            return <li key={i}>{joke}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
