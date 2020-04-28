import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import User from "../user/User";
import Player from "../user/Player";
import "./GameView.scss";

const GameView = () => {
<<<<<<< HEAD

  const locations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [playerState, setPlayerState] = useState(
    {
      location: 'January 1-4',
      locationID: locations[1],
      heldItems: ['Party Hat', 'Wrench', 'Very Small Rock'],
      name: 'Jeff',
      id: 12
    });

  const changePlayerLocation = () => {
    console.log(playerState.locationID);
    setPlayerState({...playerState, locationID: locations[5]});
    // const updatedPlayerState = {...playerState, locationID: locations[5]};
    console.log(playerState);
  };
=======
  const playerState = useContext(UserContext);
>>>>>>> af9a6fee14b2eb340b33c23a997e5ad67c39efe6

  const changeLocationWithArrows = (e) => {
    if (e.key === "ArrowUp") {
      console.log("You have moved up");
    } else if (e.key === "ArrowDown") {
      console.log("You have moved down");
    } else if (e.key === "ArrowLeft") {
      console.log("You have moved left");
    } else if (e.key === "ArrowRight") {
      console.log("You have moved right.");
    }
  };
  const changeLocation = (e) => {
    e.preventDefault();
    playerState.changePlayerLocation();
  };
<<<<<<< HEAD

  window.addEventListener('keydown', changeLocationWithArrows);
=======
  window.addEventListener("keydown", changeLocationWithArrows);
>>>>>>> af9a6fee14b2eb340b33c23a997e5ad67c39efe6

  return (
    <div className="game-view">
      <UserContext.Provider value={playerState}>
        <h1>Game View</h1>
        <User />
        <Player />
        <div className="player-view">
          <div className="current-room">
            <p>Current Room</p>
          </div>
          <div className="controls">
            <div className="arrows">
              <div className="up">
                <button onClick={changeLocation} value="up">
                  &#8593;
                </button>
              </div>
              <div className="left-and-right">
                <button onClick={changeLocation} value="left">
                  &#8592;
                </button>
                <button button onClick={changeLocation} value="right">
                  &#8594;
                </button>
              </div>
              <div className="down">
                <button onClick={changeLocation} value="down">
                  &#8595;
                </button>
              </div>
            </div>
            {/*<div className='enter'>*/}
            {/*  <button>Confirm</button>*/}
            {/*</div>*/}
          </div>
          <div className="map">
            <p>Map</p>
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default GameView;
