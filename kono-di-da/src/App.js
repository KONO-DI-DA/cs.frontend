import React, {useState, useEffect} from 'react';
import './App.css';
import {UserContext} from './contexts/UserContext';
import LandingPage from "./components/landingPage/LandingPage";
import {Link, Route} from 'react-router-dom'
import GameView from "./components/gameView/GameView";
import Team from "./components/team/Team";
import NavBar from "./components/navBar/NavBar";
import SignIn from "./components/userAuth/SignIn";
import Register from "./components/userAuth/Register";
import PrivateRoute from "./utils/PrivateRoute";
import { axiosWithAuth } from './utils/axiosWithAuth';



function App() {
  const locations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [playerState, setPlayerState] = useState({
    location: '',
    locationID: 6,
    heldItems: 0,
    name: 'Unknown',
    id: 0
  })

  useEffect(() => {
    axiosWithAuth().get("https://kono-di-da.herokuapp.com/api/players")
      .then(res => {
        console.log('res in app js', res);
      })
      .catch(err => console.log(err))
  }, [])

  // const [playerState, setPlayerState] = useState({
  //   location: "January 1-4",
  //   locationID: locations[1],
  //   heldItems: ["Party Hat", "Wrench", "Very Small Rock"],
  //   name: "Jeff",
  //   id: 12,
  // });


  return (

    <div className="App">
      <NavBar/>
      <Route exact path='/' component={LandingPage}/>
      <UserContext.Provider value={{playerState, setPlayerState}}>
        <PrivateRoute exact path='/play' component={GameView}/>
        {/*<Route exact path='/play' component={GameView}/>*/}
        <Route exact path='/team' component={Team}/>
        <Route exact path='/sign-in' component={SignIn}/>
        <Route exact path='/register' component={Register}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;