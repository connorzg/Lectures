import React, { Component } from 'react';
import './App.css';
import firebase from './utils/firebase';
import NewTodo from './NewTodo';
import Todo from './Todo';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: {}
    }
  }

  componentDidMount() {
    firebase.database().ref('/todos').on('value', snapshot => {
      let todos = snapshot.val();
      this.setState({ todos });
    });

  }

  render() {
    _.map(this.state.todos, (todo, id) => {
      console.log('todo', todo);
      console.log('id', id);
    })

    return (
      <div className="App">
        <NewTodo firebase={firebase} />
        <ul>
          {_.map(this.state.todos, (todo, id) => <Growl firebase={firebase} id={id} todo={todo} key={id} />)}
        </ul>
      </div>
    );
  }
}

export default App;
