import { renderWithRouter } from '../../../tests/routerTestsUtil';
import SignupForm from '../SignupForm';

describe('SignupForm component tests', () => {
  it('renders without crashing', () => {
    renderWithRouter(SignupForm, { path: '/signup', route: '/signup' });
  });
});
