/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/* eslint-disable */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './mobile/App';

export default class ToDo extends Component {
  render() {
    return (<App />);
  }
}

AppRegistry.registerComponent('ToDo', () => ToDo);
