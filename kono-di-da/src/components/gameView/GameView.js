import React, {useState, useEffect} from 'react';

import './GameView.scss'

const GameView = () => {

  const locations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [playerState, setPlayerState] = useState(
    {
      location: 'January 1-4',
      locationID: locations[1],
      heldItems: ['Party Hat', 'Wrench', 'Very Small Rock'],
      name: 'Jeff',
      id: 12
    });

  const changeLocation = (e) => {
    if (e.key === 'ArrowUp') {
      console.log('You have moved up')
    } else if (e.key === 'ArrowDown') {
      console.log('You have moved down')
    } else if (e.key === 'ArrowLeft') {
      console.log('You have moved left')
    } else if (e.key === 'ArrowRight') {
      console.log('You have moved right.')
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', changeLocation)
  }, [playerState]);

  return (
    <div className='game-view'>
      <h1>Game View</h1>
      <div className='player-stats'>
        <div className='player-stats-left'>
          <p>{playerState.name}</p>
          <p>Current Location: {playerState.location}</p>
          <p>{playerState.locationID}</p>
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
        <div className='controls'>
          <div className='arrows'>
            <div className='up'>
              <p>&#8593;</p>
            </div>
            <div className='left-and-right'>
              <p>&#8592;</p>
              <p>&#8594;</p>
            </div>
            <div className='down'>
              <p>&#8595;</p>
            </div>
          </div>
          <div className='enter'>
            <p>Confirm</p>
          </div>
        </div>
        <div className='map'>
          <p>Map</p>
        </div>
      </div>
    </div>
  );
};

export default GameView;