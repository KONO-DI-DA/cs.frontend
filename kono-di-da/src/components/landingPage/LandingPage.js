import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../navBar/NavBar.scss";
import auth from "../../utils/Authentication";

const LandingPage = () => {
  const history = useHistory();

  const logOut = (e) => {
    e.preventDefault();
    auth.logOut();
    localStorage.removeItem("token");
    console.log("Logged out");
    history.push("/sign-in");
  };

  return (
    <div className="landing-page">
      <div className="play">
        <h1>KONO DI DA</h1>
        <p>You thought 2020 sucked all by itself... but...</p>
        <p>KONO DIO DAAAAAAAAAA!!!!!</p>
        <h5 className="play">
          Play the game to put 2020 back in the right order.
          <p></p>
        </h5>
        <Link to="sign-in">
          <button>Sign In</button>
        </Link>
        <Link to="register">
          <button>Register</button>
        </Link>
        <button onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
};

export default LandingPage;
