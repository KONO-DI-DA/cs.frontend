import React from 'react';
import './App.css';
import LandingPage from "./components/landingPage/LandingPage";
import {Link, Route} from 'react-router-dom'
import GameView from "./components/gameView/GameView";
import Team from "./components/team/Team";
import NavBar from "./components/navBar/NavBar";
import SignIn from "./components/userAuth/SignIn";
import Register from "./components/userAuth/Register";
import PrivateRoute from "./utils/PrivateRoute";

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Route exact path='/'>
        <LandingPage/>
      </Route>
      <Route exact path='/play'>
        <GameView/>
      </Route>
      <Route exact path='/team'>
        <Team/>
      </Route>
      <Route exact path='/sign-in'>
        <SignIn/>
      </Route>
      <Route exact path='/register'>
        <Register/>
      </Route>
    </div>
  );
}

export default App;
