import React, { Component } from 'react';
import './App.css';

class JokeContainer extends Component {
  constructor() {
    super();
    this.state = {
      jokes: ["What happens to a frog's car when it breaks down? It gets toad away.", "Q: What did the duck say when he bought lipstick? A: Put it on my bill.", "Q: How do you count cows? A: With a cowculator."]
    }
    this._addJoke = this._addJoke.bind(this);
  }
  _addJoke(newJoke) {
    let currentJokes = this.state.jokes
    currentJokes.push(newJoke);
    this.setState({
      jokes: currentJokes
    })
  }
  render() {
    console.log('jokes', this.state.jokes);
    return(
      <div>
        <JokeForm addJoke={this._addJoke}/>
        <Jokelist jokes={this.state.jokes}/>
      </div>
    )
  }
}

class JokeForm extends Component {
  _handleSubmit(e) {
    e.preventDefault();
    let newJoke = this.refs.newJokeText.value;
    this.props.addJoke(newJoke);
    console.log(newJoke);
  }
  render() {
    return(
      <form onSubmit={(e) => this._handleSubmit(e)}>
        <input type='text' ref='newJokeText'/>
        <input type='submit' value='add new joke'/>
      </form>
    )
  }
}

class Jokelist extends Component {
  render() {
    return(
      <div>
        {this.props.jokes.map((jokeString, index) =>
          <Joke text={jokeString} key={index} />
        )}
      </div>
    )
  }
}

class Joke extends Component {
  constructor() {
    super();
    this.state = {
      vote: 0
    }
  }

  _upvote() {
    let currentVotes = this.state.vote;
    this.setState({
      vote: currentVotes + 1
    })
  }

  _downvote() {
    let currentVotes = this.state.vote;
    this.setState({
      vote: currentVotes - 1
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.text}</h3>
        <Upvote upvote={ this._upvote.bind(this) } />
        <Downvote downvote={ this._downvote.bind(this) } />
        <p>{this.state.vote}</p>
      </div>

    );
  }
}

class Upvote extends Component {
  _handleClick() {
    this.props.upvote();
  }

  render() {
    return(
      <i onClick={(e) => this._handleClick(e)} className="fa fa-thumbs-o-up" />
    )
  }
}

class Downvote extends Component {
  _handleClick() {
    this.props.downvote();
  }

  render() {
    return(
      <i onClick={(e) => this._handleClick(e)} className="fa fa-thumbs-o-down" />
    )
  }
}

export default JokeContainer
