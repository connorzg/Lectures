import React, {Component} from 'react';
import axios from 'axios';

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get('https://frozen-gorge-68763.herokuapp.com/todos',{
      headers: {
        'Authorization': `Bearer ${this.props.auth.getToken()}`
      }
      }).then(res => {
        console.log(res);
        this.setState({todos:res.data})
      })
  }

  _handleSubmit(e){
    e.preventDefault();
    let task = this.refs.t.value;
    console.log(task);
    axios.post('https://frozen-gorge-68763.herokuapp.com/todos', {
      task: task,
      completed: false,
    },{
      headers: {
        'Authorization': `Bearer ${this.props.auth.getToken()}`
      }
    }).then(response => {
      console.log(response);
      let todo = response.data;
      let todos = this.state.todos;
      todos.push(todo);
      this.setState({todos:todos});
      this.refs.t.value = '';
    })
  }

  render() {
    return(
      <div>
      <form onSubmit={(e) => this._handleSubmit(e)}>
        <input type="text" placeholder="todo" ref="t"/>
        <input type="submit" />
      </form>
      <ul>
        {this.state.todos.map(todo => <li key={todo[p]._id}>{todo.task}</li>)}
      </ul>
      </div>
    )
  }
}
