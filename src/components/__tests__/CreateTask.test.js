import { renderWithRouter } from '../../../tests/routerTestsUtil';
import CreateTask from '../CreateTask';

describe('Create Task component tests', () => {
  it('renders without crashing', () => {
    renderWithRouter(CreateTask, { path: '/insertTask', route: '/insertTask' });
  });
});
