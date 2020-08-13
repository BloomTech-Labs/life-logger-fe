import React from 'react';
import { render } from '../../../../tests/contextProviderTestUtil';
import { renderWithRouter } from '../../../../tests/routerTestsUtil';
import CreateTask from '../CreateTask';

describe('Create Task component tests', () => {
  it('renders without crashing', () => {
    renderWithRouter(CreateTask, { path: '/insertTask', route: '/insertTask' });
  });
  it('render all day input Element', () => {
    render(<input />);
  });
});
