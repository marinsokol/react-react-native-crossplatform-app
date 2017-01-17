import { TODO } from '../constants/actionTypes.const';

const toggleTodo = (state, todo) => {
  const newState = [];
  state.forEach((single) => {
    if (single.uid === todo.uid) {
      newState.push({
        ...single,
        completed: !todo.completed,
      });
    } else {
      newState.push({
        ...single,
      });
    }
  });

  return newState;
};

export default function (state = [], action) {
  switch (action.type) {
    case TODO.add:
      return [
        ...state,
        action.payload,
      ];
    case TODO.toggle:
      return toggleTodo(state, action.payload);
    default:
      return state;
  }
}
