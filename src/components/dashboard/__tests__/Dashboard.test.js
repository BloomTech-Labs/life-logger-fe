import { renderWithRouter } from '../../../../tests/routerTestsUtil';

import Dashboard from '../Dashboard';

describe('Dashboard tests', () => {
  it('renders without crashing', () => {
    renderWithRouter(Dashboard, {
      route: '/dashboard',
      path: '/dashboard',
    });
  });
});
