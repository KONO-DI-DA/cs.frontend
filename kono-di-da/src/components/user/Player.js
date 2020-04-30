import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Player(props) {

  console.log("room in player", props.rooms)
  const { playerState, setPlayerState } = useContext(UserContext)

  return (

    <div className="profile">
      <div className="player-stats">
        <div className="player-stats-left">
          <p>Player Name: {props.player.name}</p>
          <p>Current Location: {props.rooms.filter((room) => props.player.room_id === room.id).map((room) => {
            return <p>{room.name}</p>
          })}</p>
          <p>Items Held: {props.items.filter((item) => props.player.item_id === item.id).map((item) => {
            return <p>{item.name}</p>
          })}</p>
          <p>Location ID: </p>
        </div>
        <div className="player-stats-right">
          <p>Current Inventory:</p>

        </div>
      </div>
    </div>
  );
}

export default Player;
