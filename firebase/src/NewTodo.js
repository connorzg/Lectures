import React, {Component} from 'react';

export default class NewTodo extends Component {

  _handleSubmit(e) {
    e.preventDefault();
    let task = this.refs.t.value;
    this.props.firebase.database().ref('/todos').push({
      task,
      completed: false
    }).then(() => {
      this.refs.t.value = '';
    })
    console.log(task);

  }

  render() {
    return(
      <form onSubmit={ (e) => this._handleSubmit(e) }>
        <input type="text" ref="t" />
        <input type='submit' value="Create Todo" />
      </form>
    )
  }
}
