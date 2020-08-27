import { renderWithRouter } from '../../../../tests/routerTestsUtil';
import AboutUs from '../../../../src/AboutUs';

describe('About Us component tests', () => {
  it('renders without crashing', () => {
    renderWithRouter(AboutUs, { path: '/login', route: '/aboutus' });
  });
});
