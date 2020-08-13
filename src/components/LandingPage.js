/** @jsx jsx */
import { jsx } from 'theme-ui';
// import { Link } from 'theme-ui';
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
          width: '30em',
          margin: '0 auto',
          height: 'auto',
        }}
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '45%',
          margin: '0 auto',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <Link to="/signup">
          <button
            sx={{
              width: '327px',
              height: '48px',
              background: '#82D1FF',
              color: '#002550',
              fontSize: '30px',
              marginBottom: '20px',
            }}
          >
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button
            sx={{
              width: '327px',
              height: '48px',
              background: '#82D1FF',
              color: '#002550',
              fontSize: '30px',
            }}
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
