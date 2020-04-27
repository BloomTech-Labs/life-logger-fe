import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const AppComponent = shallow(<App />);

    expect(AppComponent).toMatchSnapshot();
  });
});

// it('renders without crashing', () => {
//   // eslint-disable-next-line no-unused-expressions
//   // <BrowserRouter>
//   //   const div = document.createElement('div'); ReactDom.render(<App />, div);
//   // </BrowserRouter>;
// });
