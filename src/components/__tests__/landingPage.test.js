import { renderWithRouter } from '../../../tests/routerTestsUtil';
import Landing from '../LandingPage';

describe('Landing Page Renders', () => {
  describe('Landing Page Renders without crashing', () => {
    it('takes the user to the signup page', () => {
      renderWithRouter(Landing);
    });
  });
});
