/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button } from '@theme-ui/components';

const LogoutButton = () => {
  const logoutFun = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return <Button onClick={logoutFun}>Logout Here</Button>;
};

export default LogoutButton;
