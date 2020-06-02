import { renderWithRouter } from '../../../../../tests/routerTestsUtil';
import configureStore from 'redux-mock-store';

import Task from '../Task';

const mockStore = configureStore([]);

describe('Task component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
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
      },
    });
  });

  it('renders without crashing', () => {
    renderWithRouter(
      Task,
      { store },
      {
        path: '/task/180',
        route: '/task/:id',
      }
    );
  });
});
