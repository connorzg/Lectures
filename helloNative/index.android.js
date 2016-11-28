/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import GAR from './Components/GAR'

export default class helloNative extends Component {
  render() {
    return (
      <GAR />
    )
  }
}

AppRegistry.registerComponent('helloNative', () => helloNative);
