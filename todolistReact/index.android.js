/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import TodoList from './components/TodoList';

export default class todolistReact extends Component {
  render() {
    return (
      <TodoList />
    );
  }
}

AppRegistry.registerComponent('todolistReact', () => todolistReact);
