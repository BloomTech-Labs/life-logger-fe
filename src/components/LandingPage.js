/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button } from '@theme-ui/components';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
        justifyContent: 'space-around',
        alignContent: 'center',
        width: '100%',
        margin: '0 auto',
        marginTop: '100px',
      }}
    >
      <h1
        sx={{
          textAlign: 'center',
        }}
      >
        Welcome to
      </h1>
      <img
        src="/LifeLoggerBlueWords.png"
        alt="orange squares icon"
        sx={{
          width: '80%',
          maxWidth: '560px',
          margin: '0 auto',
          height: 'auto',
        }}
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          maxWidth: '200px',
          margin: '0 auto',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <Link
          to="/signup"
          sx={{
            width: '100%',
            height: '48px',
            marginBottom: '20px',
            textDecoration: 'none',
          }}
        >
          <Button
            sx={{
              width: '100%',
              height: '48px',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Sign Up
          </Button>
        </Link>
        <Link
          to="/login"
          sx={{
            width: '100%',
            height: '48px',
            textDecoration: 'none',
          }}
        >
          <Button
            sx={{
              width: '100%',
              height: '48px',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
