import React from 'react';
import { render } from '../../../../tests/contextProviderTestUtil';
import { renderWithRouter } from '../../../../tests/routerTestsUtil';
import DeleteTask from '../DeleteTask';

describe('Delete Task component tests', () => {
  it('renders without crashing', () => {
    renderWithRouter(DeleteTask, { path: '/deleteTask', route: '/deleteTask' });
  });
  it('render all day input Element', () => {
    render(<h1>Are you sure want to delete this task?</h1>);
  });
});
