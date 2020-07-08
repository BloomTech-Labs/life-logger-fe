/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to</h1>
      <img src="OrangeLogo.png" alt="orange squares icon" />

      <Link to="/SignUp">
        <button>Sign Up!</button>
      </Link>
      <Link to="/Login">
        <button>Sign In!</button>
      </Link>
    </div>
  );
};

export default LandingPage;
