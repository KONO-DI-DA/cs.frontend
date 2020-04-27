import React from 'react';
import './App.css';
import LandingPage from "./components/landingPage/LandingPage";
import {Link, Route} from 'react-router-dom'
import GameView from "./components/gameView/GameView";
import Team from "./components/team/Team";
import NavBar from "./components/navBar/NavBar";

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
    </div>
  );
}

export default App;
