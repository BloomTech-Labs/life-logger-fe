import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../store/reducers/index.js';
const createAStore = () => {
  const returnStore = createStore(rootReducer, applyMiddleware(thunk));
  //const returnStore = createStore(rootReducer,['Use Redux']);
  
  return returnStore;
};
export default createAStore;

