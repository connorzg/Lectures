import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      body: this.props.body
    }
  }
  handleClick(e){
    this.setState({
      counter: this.state.counter + 1,
      body: prompt()
    })
  }

  render() {
    let comments = this.props.comments.map((comment, index) => (
      <Comment body={comment} key={index}/>
    ))
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h5>The edit count is {this.state.counter}</h5>
        <button onClick={(e) => this.handleClick(e)}>Edit</button>
        <h4>By {this.props.author}</h4>
        <p>{this.state.body}</p>
        <br />
        <h5>Comments:</h5>
        {comments}
      </div>
    )
  }
}

export {Post};
