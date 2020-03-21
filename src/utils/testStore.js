import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../store/index';
const createAStore = () => {
  const returnStore = createStore(rootReducer, applyMiddleware(thunk));
  return returnStore;
};
export default createAStore;

