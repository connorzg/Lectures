import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  Switch,
  Text
} from 'react-native';
import realm from '../utils/realm';
import {ListView} from 'realm/react-native';

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      newTask: '',
      dataSource: dataSource.cloneWithRows(realm.objects('Todo'))
    }
    this._renderTodo = this._renderTodo.bind(this);
    this._handleTextChange = this._handleTextChange.bind(this);
    this._addTodo = this._addTodo.bind(this);
  }

  _handleTextChange(newTask) {
    console.log(newTask);
    this.setState({newTask})
  }

  _addTodo() {
    //add new task
    let {newTask} = this.state
    realm.write(() => {
      realm.create('Todo', {task: newTask})
    })
    this.setState({
      newTask: '',
      dataSource: this.state.dataSource.cloneWithRows(realm.objects('Todo'))
    })
  }

  _renderTodo(todo) {
    return (
      <View style={[
        styles.row, todo.completed && styles.completed
      ]}>
        <Text style={styles.rowText}>{todo.task}</Text><Switch style={{
        marginRight: 20
      }} onValueChange={(value) => {
        console.log(value);
        realm.write(() => {
          todo.completed = !todo.completed;
        });
        this.setState({
          newTask: '',
          dataSource: this.state.dataSource.cloneWithRows(realm.objects('Todo'))
        })
      }} value={todo.completed}/>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.newTodoForm}>
          <TextInput placeholder={'Create a New Todo'} underlineColorAndroid={'transparent'} value={this.state.newTask} style={styles.input} onChangeText={this._handleTextChange} onSubmitEditing={this._addTodo}/>
          <TouchableHighlight style={styles.addNew} onPress={this._addTodo}>
            <Text style={{
              color: 'white',
              fontSize: 30
            }}>+</Text>
          </TouchableHighlight>
        </View>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderTodo}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'white',
    backgroundColor: 'steelblue'
  },
  row: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    backgroundColor: 'steelblue'
  },
  addNew: {
    padding: 17,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'green',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30
  },
  newTodoForm: {
    flexDirection: 'row',
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  completed: {
    backgroundColor: 'lightgreen'
  }
})
