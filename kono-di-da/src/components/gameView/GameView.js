import React, {useState, useEffect} from 'react';
import './GameView.scss'

const GameView = () => {

  const [playerState, setPlayerState] = useState(
    {
      location: 'January 1-4',
      heldItems: ['Party Hat', 'Wrench', 'Very Small Rock'],
      name: 'Jeff',
      id: 12
    });

  console.log(playerState);

  return (
    <div className='game-view'>
      <h1>Game View</h1>
      <div className='player-stats'>
        <div className='player-stats-left'>
          <p>{playerState.name}</p>
          <p>Current Location: {playerState.location}</p>
        </div>
        <div className='player-stats-right'>
          <p>Current Inventory:</p>
          {playerState.heldItems.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
      <div className='player-view'>
        <div className='current-room'>
          <p>Current Room</p>
        </div>
        <div className='map'>
          <p>Map</p>
        </div>
      </div>
    </div>
  );
};

export default GameView;