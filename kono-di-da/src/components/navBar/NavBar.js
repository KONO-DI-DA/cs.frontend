import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <p>KONO DI DA</p>
      <Link to='/'>Home</Link>
      <Link to='/play'>Play</Link>
      <Link to='/team'>Team</Link>
    </div>
  );
};

export default NavBar;