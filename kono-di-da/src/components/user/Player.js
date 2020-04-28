import React, { useState } from "react";

function Player() {
  const locations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [playerState, setPlayerState] = useState({
    location: "January 1-4",
    locationID: locations[1],
    heldItems: ["Party Hat", "Wrench", "Very Small Rock"],
    name: "Jeff",
    id: 12,
  });

  const changePlayerLocation = () => {
    console.log(playerState.locationID);
    const updatedPlayerState = { ...playerState, locationID: locations[5] };
    console.log(updatedPlayerState);
    setPlayerState(updatedPlayerState);
  };

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
