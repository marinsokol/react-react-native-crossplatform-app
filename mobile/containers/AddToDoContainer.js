import { connect } from 'react-redux';
import { addTodo } from '../../app/actions';

import AddToDo from '../components/AddToDo';

const mapStateToProps = '';

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddToDo);
