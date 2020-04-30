import React, {useState, useEffect, useContext} from "react";
import {UserContext} from '../../contexts/UserContext';
import axios from 'axios';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import User from "../user/User";
import Player from "../user/Player";
import CalendarMap from "../calendar/CalendarMap";
import "./GameView.scss";

const GameView = () => {


  const {
    playerState, setPlayerState,
  } = useContext(UserContext);

  const [player, setPlayer] = useState({});
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState('');

  const changePlayerLocation = () => {
    console.log(playerState);
  };

  useEffect(() => {
      axiosWithAuth()
        .get("https://kono-di-da.herokuapp.com/api/room")
        .then(response => {
          // console.log('room response', response);
          // console.log(response.data);
          setRooms(response.data.sort((a, b) => a.id - b.id))
          // console.log('rooms', rooms)
        })
      // .then((response) => {
      //   if (rooms && rooms.filter((room) => room.item_id !== 0).length === 0) {
      //     axiosWithAuth()
      //       .put('https://kono-di-da.herokuapp.com/api/room/1/',
      //         {...rooms[0], item_id: 11})
      //       .then(response => {
      //         console.log('item assign', response);
      //       })
      //       .catch((err) => {
      //         console.log(err)
      //       })
      //   }
      // });
      axiosWithAuth()
        .get("https://kono-di-da.herokuapp.com/api/players")
        .then(response => {
          // console.log('response 49', response.data[0]);
          setPlayer(response.data[0])
          // setPlayerState({...playerState, locationID: response.data[0].room_id})
          // console.log('player 53', player)
        });
    }, []
  );

  const getCurrentRoom = () => {
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then(res => {
        console.log('res from room call', res.data.right_id)
      })
  };

  const updatePlayerLocation = () => {
    axiosWithAuth()
      .put(`https://kono-di-da.herokuapp.com/api/players/${player.id}/`,
        {...player})
      .then(response => {
        console.log('player updated', response);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const moveUp = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then(res => {
        if (res.data.up_id !== 0) {
          setPlayer({...player, room_id: res.data.up_id});
          updatePlayerLocation()
        }
      });
    console.log('Move up')
  };

  const moveDown = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then(res => {
        if (res.data.down_id !== 0) {
          setPlayer({...player, room_id: res.data.down_id});
          updatePlayerLocation()
        }
      });
    console.log('Move down')
  };

  const moveLeft = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then(res => {
        if (res.data.left_id !== 0) {
          setPlayer({...player, room_id: res.data.left_id});
          updatePlayerLocation()
        }
      });
    console.log('move left')
  };

  const moveRight = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then(res => {
        if (res.data.right_id !== 0) {
          setPlayer({...player, room_id: res.data.right_id});
          updatePlayerLocation()
        }
      });
    console.log('move right')
  };

  const moveOutside = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then(res => {
        if (res.data.outside_id !== 0) {
          setPlayer({...player, room_id: res.data.outside_id});
          updatePlayerLocation()
        }
      });
    // console.log('Move down')
  };

  const moveInside = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then(res => {
        if (res.data.inside_id !== 0) {
          setPlayer({...player, room_id: res.data.inside_id});
          updatePlayerLocation()
        }
      });
    // console.log('Move down')
  };


  const updatePlayerOnServer = () => {
    axiosWithAuth()
      .put(`https://kono-di-da.herokuapp.com/api/players/${player.id}/`,
        {...player})
      .then(response => {
        console.log('player location update', response);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const changeLocation = (e) => {
    e.preventDefault();
    changePlayerLocation();
  };

  let currentLocation = player.room_id;


  return (
    <div className="game-view">
      <h1>Welcome {playerState.name ? playerState.name : 'Weirdo'}</h1>
      <h1>Game View</h1>
      <div className="player-view">
        <div className="current-room">
          <p>{rooms.filter((room) => player.room_id === room.id).map((room) => {
            return <p>{room.name}</p>
          })}</p>
        </div>
        <div className="controls">
          <div className="arrows">
            <div className="up">
              <button onClick={moveUp} value="up">
                &#8593;
              </button>
            </div>
            <div className="left-and-right">
              <button onClick={moveLeft} value="left">
                &#8592;
              </button>
              <button onClick={moveRight} value="right">
                &#8594;
              </button>
            </div>
            <div className="down">
              <button onClick={moveDown} value="down">
                &#8595;
              </button>
            </div>
          </div>
          <div className='inside-outside'>
            <button onClick={moveInside}>Move Inside</button>
            <button onClick={moveOutside}>Move Outside</button>
          </div>
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