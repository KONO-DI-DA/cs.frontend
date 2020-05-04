import React, { useState } from "react";
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import LandingPage from "./components/landingPage/LandingPage";
import { Route } from "react-router-dom";
import GameView from "./components/gameView/GameView";
import Team from "./components/team/Team";
import NavBar from "./components/navBar/NavBar";
import SignIn from "./components/userAuth/SignIn";
import Register from "./components/userAuth/Register";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [playerState, setPlayerState] = useState({
    location: "",
    locationID: "",
    heldItems: "",
    name: "",
    id: "",
  });

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={LandingPage} />
      <UserContext.Provider value={{ playerState, setPlayerState }}>
        <PrivateRoute exact path="/play" component={GameView} />
        {/*<Route exact path='/play' component={GameView}/>*/}
        <Route exact path="/team" component={Team} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/register" component={Register} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
