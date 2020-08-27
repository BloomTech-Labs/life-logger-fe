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
          display: ['inline-block', 'inline-block', 'none'],
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
          display: ['inline-block', 'inline-block', 'none'],
        }}
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'column'],
          width: ['100%', '100%', '20rem'],
          maxWidth: '300px',
          margin: '0 auto',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <p sx={{ display: ['none', 'none', 'flex'], width: '150%' }}>
          Life Logger seeks to help consumers track what is important to them.
          Its main focus is on helping consumers track irregularly recurring
          tasks. For example, oil changes or tire rotations. Air conditioning
          maintenance or exterminator visits. We all have these expenses and
          they never happen at the same time every month or year, which can make
          predicting them, difficult.
        </p>
        <Link
          to="/signup"
          sx={{
            width: '100%',
            height: '48px',
            marginBottom: '10px',
            textDecoration: ['none', 'none', 'underline'],
          }}
        >
          <Button
            sx={{
              width: ['100%', '100%', '80%'],
              height: '48px',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bg: ['primary', 'primary', 'white'],
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
            textDecoration: ['none', 'none', 'underline'],
            marginBottom: '10px',
          }}
        >
          <Button
            sx={{
              width: ['100%', '100%', '80%'],
              height: '48px',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bg: ['primary', 'primary', 'white'],
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
