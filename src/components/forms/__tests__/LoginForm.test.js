import { renderWithRouter } from '../../../../tests/routerTestsUtil';
import LoginForm from '../LoginForm';

describe('LoginForm component tests', () => {
  it('renders without crashing', () => {
    renderWithRouter(LoginForm, { path: '/login', route: '/login' });
  });
});
