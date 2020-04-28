import React, {useState, useEffect} from 'react';

import './GameView.scss'

const GameView = () => {

  const locations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [season, setSeason] = useState('none');
  const changeSeason = (e) => {
    e.preventDefault();
   setSeason(e.target.value);
    console.log()
  };

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

  const changeLocationWithArrows = (e) => {
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
  const changeLocation = (e) => {
    e.preventDefault();
    changePlayerLocation();
  };

  // window.addEventListener('keydown', changeLocationWithArrows);

  return (
    <div className='game-view'>
      <h1>Game View</h1>
      <div className='player-stats'>
        <div className='player-stats-left'>
          <p>{playerState.name}</p>
          <p>Current Location: {playerState.location}</p>
          <p>Location ID: {playerState.locationID}</p>
        </div>
        <div className='player-stats-right'>
          <p>Current Inventory:</p>
          {playerState.heldItems.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
      <div className='player-view'>
        <div className={`current-room-${season}`}>
          <p>Current Room</p>
        </div>
        <div className='controls'>
          <div className='arrows'>
            <div className='up'>
              <button onClick={changeLocation} value='up'>&#8593;</button>
            </div>
            <div className='left-and-right'>
              <button onClick={changeLocation} value='left'>&#8592;</button>
              <button onClick={changeLocation} value='right'>&#8594;</button>
            </div>
            <div className='down'>
              <button onClick={changeLocation} value='down'>&#8595;</button>
            </div>
          </div>
          {/*<div className='enter'>*/}
          {/*  <button>Confirm</button>*/}
          {/*</div>*/}
        </div>
        <div className='map'>
          <p>Map</p>
        </div>
      </div>
      <div>
        <p>Current Season: {season}</p>
        <button value='Winter' onClick={changeSeason}>Winter</button>
        <button value='Spring' onClick={changeSeason}>Spring</button>
        <button value='Summer' onClick={changeSeason}>Summer</button>
        <button value='Fall' onClick={changeSeason}>Fall</button>
      </div>
    </div>
  );
};

export default GameView;