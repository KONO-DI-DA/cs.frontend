import React from 'react';
import {Link, Route, useHistory} from 'react-router-dom'
import auth from '../../utils/Authentication'

const LandingPage = () => {
  const history = useHistory();

  const logOut = (e) => {
    e.preventDefault();
    auth.logOut();
    localStorage.removeItem('token');
    console.log('Logged out')
    history.push('/sign-in')
  };

  return (
    <div className='landing-page'>
      <div className='main-content'>
        <h1>KONO DI DA</h1>
        <p>Words about the game</p>
        <p>More words about game</p>
        <p>Get started</p>
        <Link to='sign-in'>
          <button>Sign In</button>
        </Link>
        <Link to='register'>
          <button>Register</button>
        </Link>
        <button onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
};

export default LandingPage;