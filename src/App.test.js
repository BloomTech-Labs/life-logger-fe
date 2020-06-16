import { renderWithRouter } from '../tests/routerTestsUtil';
import App from './App';

describe('App component tests', () => {
  it('renders without crashing', () => {
    renderWithRouter(App, {
      route: '/',
      path: '/',
    });
  });
});
