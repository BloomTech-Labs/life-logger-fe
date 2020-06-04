import React from 'react';
import { render } from '../../../../tests/reduxProviderTestsUtil.js';
import LoginForm from './LoginForm';
import '@testing-library/jest-dom/extend-expect';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../store/reducers';
import * as actions from '../../../store/actions/index';

jest.mock('../../../store/actions/index');

actions.fetchUser.mockImplementation(() => (dispatch) => {
  return dispatch({
    type: 'FETCH_USER_SUCCESS',
    payload: {
      token: 'HappyTrees',
      user_id: 9000,
      username: 'RossyBob',
    },
  });
});

let store;
const initialState = {
  users: {
    userData: {
      token: 'HappyTrees',
      user_id: 9000,
      username: 'RossyBob',
    },
  },
};
beforeEach(() => {
  store = createStore(rootReducer, initialState, applyMiddleware(thunk));
});

test('Login Test', () => {
  render(<LoginForm />, { initialState, store });
});
