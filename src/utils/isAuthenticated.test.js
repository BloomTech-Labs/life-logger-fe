import axios from 'axios';
import { isAuthenticated } from './isAuthenticated';

jest.mock('axios', () => {
  return {
    headers: {
      authorization: 'myToken',
    },
    post: jest.fn(),
  };
});

describe('isAuthenticated util', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns true if the token is valid', async () => {
    const mockResponse = { data: { isAuthenticated: true } };
    axios.post.mockResolvedValueOnce(mockResponse);

    const actual = await isAuthenticated('myToken');

    expect(actual).toEqual(true);
  });

  it('returns false if the token is invalid', async () => {
    const mockResponse = false;
    axios.post.mockResolvedValueOnce(mockResponse);

    const actual = await isAuthenticated('badToken');

    expect(actual).toEqual(mockResponse);
  });

  it('returns false if no token is provided', async () => {
    const mockResponse = false;
    axios.post.mockResolvedValueOnce(mockResponse);

    const actual = await isAuthenticated();

    expect(actual).toEqual(mockResponse);
  });
});
