import { TODO, ERROR } from '../constants/actionTypes.const';

const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

const guid = () => `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;

export const addTodo = (todo) => {
  if (todo === '') {
    return {
      type: ERROR.empty,
    };
  }

  return {
    type: TODO.add,
    payload: {
      name: todo,
      completed: false,
      uid: guid(),
    },
  };
};

export const toggleTodo = todo => ({
  type: TODO.toggle,
  payload: todo,
});

export const removeError = () => ({
  type: ERROR.remove,
});
