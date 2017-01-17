import { ERROR } from '../constants/actionTypes.const';

export default function (state = '', action) {
  switch (action.type) {
    case ERROR.empty:
      return 'Todo task is empty!';
    case ERROR.remove:
      return '';
    default:
      return state;
  }
}
