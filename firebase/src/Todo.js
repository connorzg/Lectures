import React, {Component, PropTypes} from 'react';

export default class Todo extends Component {

  _deleteClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.firebase.database().ref(`/todos/${this.props.id}`).remove();
  }

  _handleCompletedClick(e) {
    e.preventDefault();
    this.props.firebase.database().ref(`/todos/${this.props.id}`).update({
      completed: !this.props.todo.completed
    })

  }

  render() {
    let cssClass = '';
    if (this.props.todo.completed) {
      cssClass += 'completed'
    }
    return(
      <li className={cssClass} onClick={(e) => this._handleCompletedClick(e)}>
      {this.props.todo.task}
      {' '}
      <a onClick={(e) => this._deleteClick(e)} href='#'>Delete</a>
      </li>
    )
  }
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
}
