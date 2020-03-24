import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers/index';
const createAStore = () => {
  const returnStore = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  return returnStore;
};
export default createAStore;
