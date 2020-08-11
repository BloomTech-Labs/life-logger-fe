import React from 'react';
import { render } from '../../../tests/contextProviderTestUtil';
import LogoutButton from '../LogoutButton';
import { Button } from '@theme-ui/components';

describe('LogoutButton Task component tests', () => {
  it('render Button Element', () => {
    render(<Button>Logout Here</Button>);
  });
});
