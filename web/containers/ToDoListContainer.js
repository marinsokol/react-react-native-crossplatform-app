import { connect } from 'react-redux';
import { toggleTodo } from '../../app/actions';

import ToDoList from '../components/ToDoList';

const getVisibleTodos = (todos, filter) => {
  if (filter === undefined || filter === 'all') return todos;

  const visibleTodos = [];
  todos.forEach((single) => {
    if (filter === 'completed' && single.completed) visibleTodos.push(single);
    if (filter === 'active' && !single.completed) visibleTodos.push(single);
  });

  return visibleTodos;
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, ownProps.filter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: (todo) => {
    dispatch(toggleTodo(todo));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
