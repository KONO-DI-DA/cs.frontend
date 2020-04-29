import React, {useState, useEffect, useContext} from "react";
import {UserContext} from '../contexts/UserContext'
import User from "../user/User";
import Player from "../user/Player";
import "./GameView.scss";

const GameView = () => {


const {playerState, setPlayerState} = useContext(UserContext);
const locations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


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

  const changePlayerLocation = () => {
    console.log(playerState.locationID);
    const updatedPlayerState = {...playerState, locationID: locations[8]};
    console.log(updatedPlayerState);
    setPlayerState(updatedPlayerState);
  };

  const changeLocation = (e) => {
    e.preventDefault();
    changePlayerLocation();
  };

  window.addEventListener("keydown", changeLocationWithArrows);

  return (
    <div className="game-view">
      <h1>Game View</h1>
      <User/>
      <Player/>
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
    </div>
  );
};

export default GameView;