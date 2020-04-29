import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Player() {
  

  const {playerState, setPlayerState} = useContext(UserContext)

  return (
    
      <div className="profile">
        <div className="player-stats">
          <div className="player-stats-left">
            <p>{playerState.name}</p>
            <p>Current Location: {playerState.location}</p>
            <p>Location ID: {playerState.locationID}</p>
          </div>
          <div className="player-stats-right">
            <p>Current Inventory:</p>
            {playerState.heldItems.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Player;
