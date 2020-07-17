/** @jsx jsx */
import { jsx } from 'theme-ui';
// import { Link } from 'theme-ui';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div sx={{display: 'flex', flexDirection: 'column', height: '400px',
      justifyContent: 'space-around',
      alignContent: 'center',
      width: '100%', 
      margin: '0 auto', 
      marginTop: '100px',
      }}>
      <h1 
          sx={{
            textAlign: 'center', 
            }}>
            Welcome to
      </h1>
      <img 
        src='OrangeLogo.png' 
        alt='orange squares icon' 
          sx={{
            width: '30em', 
            margin: '0 auto',
            height: 'auto',

            }} />
      <div sx={{display: 'flex', flexDirection: 'column', width: '45%', margin: '0 auto', alignItems: 'center', marginTop: '50px'}}>      
      <Link to='/signup'>
        <button>Sign Up!</button>
      </Link>
      <Link to='/login'>
        <button>Sign In!</button>
      </Link>
      </div>
      </div>
  );
};

export default LandingPage;
