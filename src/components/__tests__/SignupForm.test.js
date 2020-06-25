import { renderWithRouter } from '../../../tests/routerTestsUtil';
import SignupForm from '../SignupForm';
import axios from 'axios';
import { fireEvent, wait } from '@testing-library/react';

import { createMemoryHistory } from 'history';

jest.mock('axios');

describe('SignupForm component tests', () => {
  it('renders without crashing', () => {
    renderWithRouter(SignupForm, { path: '/signup', route: '/signup' });
  });

  it('filling in and submitting form successfully calls localStorage.setItem', async () => {
    const { container } = renderWithRouter(SignupForm, {
      path: '/signup',
      route: '/signup',
    });

    const mockResponse = {
      token: 'fakeToken',
      userId: 1,
    };

    axios.post.mockResolvedValue(mockResponse);

    // mock localStorage
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.__proto__.setItem = jest.fn();

    const username = container.querySelector('input[name="username"]');
    const email = container.querySelector('input[name="email"]');
    const password = container.querySelector('input[name="password"]');
    const signup = container.querySelector('button[type="submit"]');

    // fill in the form, otherwise handleSubmit will never be called
    await wait(() => {
      fireEvent.change(username, {
        target: {
          value: 'mockname',
        },
      });
    });

    await wait(() => {
      fireEvent.change(email, {
        target: {
          value: 'mockemail@mock.com',
        },
      });
    });

    await wait(() => {
      fireEvent.change(password, {
        target: {
          value: 'mockPassword123!',
        },
      });
    });

    await wait(() => {
      fireEvent.click(signup);
    });

    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('handleSubmit calls history.push when axios call throws an error', async () => {
    const history = createMemoryHistory();
    history.push('/signup');

    const historySpy = jest.spyOn(history, 'push');

    const { container } = renderWithRouter(SignupForm, {
      path: '/signup',
      route: '/signup',
      history,
    });

    // mock an error response for the axios call
    const mockResponse = new Error('Error signing up');

    axios.post.mockResolvedValue(mockResponse);

    const username = container.querySelector('input[name="username"]');
    const email = container.querySelector('input[name="email"]');
    const password = container.querySelector('input[name="password"]');
    const signup = container.querySelector('button[type="submit"]');

    // fill in the form, otherwise handleSubmit will never be called
    await wait(() => {
      fireEvent.change(username, {
        target: {
          value: 'mockname',
        },
      });
    });

    await wait(() => {
      fireEvent.change(email, {
        target: {
          value: 'mockemail@mock.com',
        },
      });
    });

    await wait(() => {
      fireEvent.change(password, {
        target: {
          value: 'mockPassword123!',
        },
      });
    });

    await wait(() => {
      fireEvent.click(signup);
    });

    expect(historySpy).toHaveBeenCalled();

    historySpy.mockRestore();
  });
});
