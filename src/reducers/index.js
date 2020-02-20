import { combineReducers } from 'redux';
import todosReducer from './todosReducers';

 const rootReducer = combineReducers({
  todos: todosReducer
});

 export default rootReducer;