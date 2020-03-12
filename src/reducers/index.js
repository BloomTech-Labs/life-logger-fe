import { combineReducers } from 'redux';
import RegisterReducer from './RegisterReducer';
import EventReducer from './EventReducer';


 const rootReducer = combineReducers({
  users: RegisterReducer,
  events: EventReducer
});

 export default rootReducer;