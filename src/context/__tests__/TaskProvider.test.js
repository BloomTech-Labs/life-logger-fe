import TaskProvider from '../TaskProvider';
import React from 'react';
import { render } from '@testing-library/react';

describe('TaskProvider tests', () => {
  it('renders without crashing', () => {
    // just pass in some dummy content since it wraps around "children"
    render(
      <TaskProvider>
        <div>Hello</div>
      </TaskProvider>
    );
  });
});
