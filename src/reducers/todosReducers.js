import {
  NEW_TODO,
  TOGGLE_COMPLETE
 } from '../actions';

export default (todos = [], action) => {
  switch (action.type) {
    case NEW_TODO:
      return todos.concat(action.payload);
    case TOGGLE_COMPLETE:
      todos[action.payload].complete = !todos[action.payload].complete;
      return todos;
    default:
      return todos;
  }
};