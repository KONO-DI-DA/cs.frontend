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
