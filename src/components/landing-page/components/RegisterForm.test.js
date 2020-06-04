import React from 'react';
import { render } from '../../../../tests/reduxProviderTestsUtil.js';
import RegisterForm from './RegisterForm';
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
      user_id: 9000,
    },
  });
});

let store;
const initialState = {
  users: {
    userData: {
      user_id: 9000,
    },
  },
};
beforeEach(() => {
  store = createStore(rootReducer, initialState, applyMiddleware(thunk));
});

test('Register Test', () => {
  render(<RegisterForm />, { initialState, store });
});
