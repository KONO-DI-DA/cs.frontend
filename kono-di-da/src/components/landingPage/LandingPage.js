import React from 'react';
import {Link, Route} from 'react-router-dom'

const LandingPage = () => {
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
      </div>
    </div>
  );
};

export default LandingPage;