import React, { PureComponent, PropTypes } from 'react';

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
    toggleTodo: PropTypes.func,
  }

  state = {}

  toggleTodo = data => this.props.toggleTodo(data);

  render() {
    const todosList = this.props.todos.map((single, index) => {
      let cssClass = '';
      if (single.completed) cssClass = 'completed';

      return (<li
        className={`collection-item ${cssClass}`}
        key={index}
        onClick={() => this.toggleTodo(single)}
      >
        {single.name}
      </li>);
    });

    return (<div>
      <h4> Todos: </h4>
      <ul className="collection">
        {todosList}
      </ul>
    </div>);
  }
}
