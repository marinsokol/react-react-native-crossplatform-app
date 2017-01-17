import React, { PureComponent, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { styles } from '../styles/main';

export default class extends PureComponent {
  static displayName = 'ToDoList'

  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string, // eslint-disable-line
        completed: PropTypes.bool, // eslint-disable-line
        uid: PropTypes.string, // eslint-disable-line
      })
    ),
    toggleTodo: PropTypes.func, // eslint-disable-line
  }

  state = {}

  pressTodo = data => this.props.toggleTodo(data)

  render() {
    const { todos } = this.props;
    const todosList = todos.map((single, index) => (
      <TouchableHighlight
        onPress={() => this.pressTodo(single)}
        style={styles.listItem}
        key={index}
      >
        <Text> {single.name} - {(single.completed) ? 'completed' : 'active'} </Text>
      </TouchableHighlight>));
    return (<View>
      {todosList}
    </View>);
  }
}
