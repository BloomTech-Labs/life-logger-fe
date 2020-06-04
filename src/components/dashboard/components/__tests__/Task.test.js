import { renderWithRouter } from '../../../../../tests/routerTestsUtil';
import { within } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as actions from '../../../../store/actions/index';
import rootReducer from '../../../../store/reducers';

import Task from '../Task';

jest.mock('../../../../store/actions/index');

// mock the fetchEvent action creator -- we don't need to test it here since there are already unit tests written for the Actions file
actions.fetchEvent.mockImplementation(() => (dispatch) => {
  return dispatch({
    type: 'FETCH_EVENT_SUCCESS',
    payload: {
      id: 180,
      title: 'My task',
    },
  });
});

describe('Task component', () => {
  let store;
  const initialState = {
    events: {
      eventData: [
        {
          id: 180,
          title: 'My task',
        },
        {
          id: 181,
          title: 'My second task',
        },
      ],
      currentEvent: null,
    },
  };

  beforeEach(() => {
    store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  });

  it('renders without crashing', () => {
    renderWithRouter(
      Task,
      {
        initialState,
        store,
      },
      {
        route: '/task/180',
        path: '/task/:id',
      }
    );
  });

  it('displays the correct task title', async () => {
    // mock fetchEvent, hard code the payload as the event we want to set as the `currentEvent`
    actions.fetchEvent.mockImplementation(() => (dispatch) => {
      return dispatch({
        type: 'FETCH_EVENT_SUCCESS',
        payload: {
          id: 180,
          title: 'My task',
        },
      });
    });

    const { findByTestId } = renderWithRouter(
      Task,
      {
        initialState,
        store,
      },
      {
        route: '/task/180',
        path: '/task/:id',
      }
    );

    const actual = await findByTestId('taskTitle');

    within(actual).getByText('My task');
  });
});
