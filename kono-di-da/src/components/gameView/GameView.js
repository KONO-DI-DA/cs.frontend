import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import User from "../user/User";
import Player from "../user/Player";
import CalendarMap from "../calendar/CalendarMap";
import "./GameView.scss";

const GameView = () => {


  const { playerState, setPlayerState } = useContext(UserContext);
  const locations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  //  Logic to set the current_location
  // const [curr_room, setCurrRoom] = useState

  const [rooms, setRooms] = useState([])
  const [items, setItems] = useState([])

  const [player, setPlayer] = useState({})
  let currentLocation = player.room_id
  useEffect(() => {
    axiosWithAuth().get("https://kono-di-da.herokuapp.com/api/room")
      .then(response => {
        console.log(response);
        setRooms(response.data.sort((a, b) => a.id - b.id))
        console.log("rooms", rooms)
      })

    axiosWithAuth().get("https://kono-di-da.herokuapp.com/api/players")
      .then(response => {
        console.log(response);
        setPlayer(response.data[0])
        setPlayerState({ ...playerState, location: response.data.room_id })
      });
    axiosWithAuth().get("https://kono-di-da.herokuapp.com/api/items")
      .then(response => {
        console.log('item res', response);
        setItems(response.data)

      })
  }, []
  );

  const changeLocationWithArrows = (e) => {
    if (e.key === "ArrowUp") {
      console.log("You have moved up");
      changePlayerLocation(2)
    } else if (e.key === "ArrowDown") {
      console.log("You have moved down");
      changePlayerLocation(10)
    } else if (e.key === "ArrowLeft") {
      console.log("You have moved left");
      changePlayerLocation(5)
    } else if (e.key === "ArrowRight") {
      console.log("You have moved right.");
      changePlayerLocation(7)
    }
  };

  const changePlayerLocation = (newLocation) => {
    console.log('player location id', playerState.locationID);
    const updatedPlayerState = { ...playerState, locationID: newLocation };
    console.log('updated player state', updatedPlayerState);
    setPlayerState(updatedPlayerState);
    console.log('userContext', UserContext)
  };

  const changeLocation = (e) => {
    e.preventDefault();
    changePlayerLocation();
  };


  function pickUpItem(e) {
    e.preventDefault()
    let currentRoom = rooms.filter((room) => room.id === player.room_id)[0]
    console.log('pickup var', currentRoom)
    const item = currentRoom.item_id
    let otherRooms = rooms.filter((room) => room.id !== player.room_id)
    setRooms([...otherRooms, { ...currentRoom, item_id: 0 }])
    setRooms(rooms.sort((a, b) => a.id - b.id))
    axiosWithAuth().put(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`, { ...currentRoom, item_id: 0 })
      .then(response => {
        console.log('item assign', response);

      })
      .catch((err) => { console.log(err) })
    setPlayer({ ...player, item_id: item })
    axiosWithAuth().put(`https://kono-di-da.herokuapp.com/api/players/${player.id}/`, { ...player })
      .then(response => {
        console.log('item assign', response);

      })
      .catch((err) => { console.log(err) })

  }

  function dropItem(e) {
    e.preventDefault()
    let currentRoom = rooms.filter((room) => room.id === player.room_id)[0]
    const item = player.item_id
    let otherRooms = rooms.filter((room) => room.id !== player.room_id)
    setRooms([...otherRooms, { ...currentRoom, item_id: item }])
    setRooms(rooms.sort((a, b) => a.id - b.id))
    axiosWithAuth().put(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`, { ...currentRoom, item_id: item })
      .then(response => {
        console.log('item assign', response);

      })
      .catch((err) => { console.log(err) })
    setPlayer({ ...player, item_id: 0 })
    axiosWithAuth().put(`https://kono-di-da.herokuapp.com/api/players/${player.id}/`, { ...player })
      .then(response => {
        console.log('item assign', response);

      })
      .catch((err) => { console.log(err) })

  }

  window.addEventListener("keydown", changeLocationWithArrows);


  return (
    <div className="game-view">
      <h1>Welcome {playerState.name ? playerState.name : 'Weirdo'}</h1>
      <h1>Game View</h1>
      <Player player={player} rooms={rooms} items={items} />
      <div className="player-view">

        <div className="current-room">
          <p>Current Room</p>
        </div>
        <div className="controls">
          <div >
            <button onClick={pickUpItem} >
              pick up item
              </button>
            <button onClick={dropItem} >
              drop item
              </button>
          </div>
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
          <CalendarMap currentLocation={currentLocation} rooms={rooms} player={player} />
        </div>
      </div>
    </div>
  );
};

export default GameView;