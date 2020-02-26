import { combineReducers } from 'redux';
import RegisterReducer from './RegisterReducer';

 const rootReducer = combineReducers({
  users: RegisterReducer
});

 export default rootReducer;