import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <p>KONO DI DA</p>
      <Link to="/" className="Link">
        Home
      </Link>
      <Link to="/play" className="Link">
        Play
      </Link>
      <Link to="/team" className="Link">
        Team
      </Link>
    </div>
  );
};

export default NavBar;
