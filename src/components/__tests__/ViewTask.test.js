import { renderWithRouter } from '../../../tests/routerTestsUtil';
import ViewTask from '../ViewTask';

describe('View Task component tests', () => {
  it('renders without crashing', () => {
    renderWithRouter(ViewTask, { path: '/login', route: '/viewtask' });
  });
});
