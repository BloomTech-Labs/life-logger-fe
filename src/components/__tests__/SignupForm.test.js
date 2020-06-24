import React from 'react';
import { render } from '../../../tests/themeProviderTestsUtil';
import taskContext from '../../context/task_context';

import SignupForm from '../SignupForm';

const SignUp = () => {

}

describe('SignupForm component tests', () => {
  it('renders without crashing', () => {
    render(<taskContext.Provider value={{ SignUp }}><SignupForm /></taskContext.Provider>);
  });
});
