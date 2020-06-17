import React from 'react';
import { render } from '../../../tests/themeProviderTestsUtil';
import SignupForm from '../SignupForm';

describe('SignupForm component tests', () => {
  it('renders without crashing', () => {
    render(<SignupForm />);
  });
});
