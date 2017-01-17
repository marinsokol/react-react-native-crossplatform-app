import React, { PureComponent } from 'react';
import { View } from 'react-native';
import AddToDoContainer from '../containers/AddToDoContainer';
import ToDoListContainer from '../containers/ToDoListContainer';
import FooterContainer from '../containers/FooterContainer';
import NavBar from './NavBar';
import { styles } from '../styles/main';

export default class extends PureComponent {
  static displayName = 'Root'

  state = {
    filter: 'all',
  }

  changeVisible = filter => this.setState({ filter })

  render() {
    const { filter } = this.state;

    return (<View style={styles.container}>
      <AddToDoContainer />
      <NavBar changeVisible={this.changeVisible} filter={filter} />
      <ToDoListContainer filter={filter} />
      <FooterContainer />
    </View>);
  }
}
