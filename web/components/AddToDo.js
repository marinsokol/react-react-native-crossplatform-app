import React, { PureComponent, PropTypes } from 'react';

export default class extends PureComponent {
  static displayName = 'AddToDo'

  static propTypes = {
    addTodo: PropTypes.func,
  }

  state = {
    todo: '',
  }

  inputChange = e => this.setState({ todo: e.target.value })

  addNewTodo = () => {
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: '',
    });
  }

  render() {
    const { todo } = this.state;
    return (<div>
      <input
        onChange={this.inputChange}
        value={todo}
      />
      <button
        className="btn"
        onClick={this.addNewTodo}
      >
        Add todo
      </button>
    </div>);
  }
}
