import React, {useState, useEffect, useContext} from "react";
import {UserContext} from "../contexts/UserContext";
import axios from 'axios';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import User from "../user/User";
import Player from "../user/Player";
import CalendarMap from "../calendar/CalendarMap";
import "./GameView.scss";

const GameView = () => {


  const {playerState, setPlayerState} = useContext(UserContext);
  const locations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//  Logic to set the current_location
// const [curr_room, setCurrRoom] = useState

  const [rooms, setRooms] = useState([])


  const [player, setPlayer] = useState({})

  useEffect(() => {
      axiosWithAuth().get("https://kono-di-da.herokuapp.com/api/room")
        .then(response => {
          console.log(response);
          setRooms(response.data)
        });
      axiosWithAuth().get("https://kono-di-da.herokuapp.com/api/player")
        .then(response => {
          console.log(response);
          setPlayer(response.data)
        });
    }, []
  );

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

  let currentLocation = 30


  window.addEventListener("keydown", changeLocationWithArrows);


  return (
    <div className="game-view">
      <h1>Game View</h1>
      {/* <Player/> */}
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
              <button onClick={changeLocation} value="right">
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
          <CalendarMap currentLocation={currentLocation} rooms={rooms} player={player}/>
        </div>
      </div>
    </div>
  );
};

export default GameView;