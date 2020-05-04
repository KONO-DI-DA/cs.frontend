import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import auth from "../../utils/Authentication";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import Player from "../user/Player";
import CalendarMap from "../calendar/CalendarMap";
import "./GameView.scss";

const GameView = () => {
  const { playerState, setPlayerState } = useContext(UserContext);

  const [player, setPlayer] = useState({});
  const [rooms, setRooms] = useState([]);

  //  Logic to set the current_location
  // const [curr_room, setCurrRoom] = useState

  const [items, setItems] = useState([]);

  // SET CURRENT LOCATION TO PLAYER'S ROOM ID
  let currentLocation = player.room_id;

  // GETS ROOMS, SETS ROOMS
  useEffect(() => {
    axiosWithAuth()
      .get("https://kono-di-da.herokuapp.com/api/room")
      .then((response) => {
        console.log(response);
        setRooms(response.data.sort((a, b) => a.id - b.id));
        console.log("rooms", rooms);
      });

    //
    axiosWithAuth()
      .get("https://kono-di-da.herokuapp.com/api/players")
      .then((response) => {
        console.log(response);
        setPlayer(response.data[0]);
        setPlayerState({ ...playerState, location: response.data.room_id });
      });
    axiosWithAuth()
      .get("https://kono-di-da.herokuapp.com/api/items")
      .then((response) => {
        console.log("item res", response);
        setItems(response.data);
      });
  }, []);

  const updatePlayerLocation = () => {
    axiosWithAuth()
      .put(`https://kono-di-da.herokuapp.com/api/players/${player.id}/`, {
        ...player,
      })
      .then((response) => {
        console.log("player updated", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const moveUp = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then((res) => {
        if (res.data.up_id !== 0) {
          setPlayer({ ...player, room_id: res.data.up_id });
          updatePlayerLocation();
        }
      });
    console.log("Move up");
  };

  const moveDown = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then((res) => {
        if (res.data.down_id !== 0) {
          setPlayer({ ...player, room_id: res.data.down_id });
          updatePlayerLocation();
        }
      });
    console.log("Move down");
  };

  const moveLeft = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then((res) => {
        if (res.data.left_id !== 0) {
          setPlayer({ ...player, room_id: res.data.left_id });
          updatePlayerLocation();
        }
      });
    console.log("move left");
  };

  const moveRight = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then((res) => {
        if (res.data.right_id !== 0) {
          setPlayer({ ...player, room_id: res.data.right_id });
          updatePlayerLocation();
        }
      });
    console.log("move right");
  };

  const moveOutside = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then((res) => {
        if (res.data.outside_id !== 0) {
          setPlayer({ ...player, room_id: res.data.outside_id });
          updatePlayerLocation();
        }
      });
    // console.log('Move down')
  };

  const moveInside = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`)
      .then((res) => {
        if (res.data.inside_id !== 0) {
          setPlayer({ ...player, room_id: res.data.inside_id });
          updatePlayerLocation();
        }
      });
    // console.log('Move down')
  };

  function pickUpItem(e) {
    e.preventDefault();
    let currentRoom = rooms.filter((room) => room.id === player.room_id)[0];
    console.log("pickup var", currentRoom);
    const item = currentRoom.item_id;
    let otherRooms = rooms.filter((room) => room.id !== player.room_id);
    setRooms([...otherRooms, { ...currentRoom, item_id: 0 }]);
    setRooms(rooms.sort((a, b) => a.id - b.id));
    axiosWithAuth()
      .put(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`, {
        ...currentRoom,
        item_id: 0,
      })
      .then((response) => {
        console.log("item assign", response);
      })
      .catch((err) => {
        console.log(err);
      });
    setPlayer({ ...player, item_id: item });
    axiosWithAuth()
      .put(`https://kono-di-da.herokuapp.com/api/players/${player.id}/`, {
        ...player,
      })
      .then((response) => {
        console.log("item assign", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function dropItem(e) {
    e.preventDefault();
    let currentRoom = rooms.filter((room) => room.id === player.room_id)[0];
    const item = player.item_id;
    let otherRooms = rooms.filter((room) => room.id !== player.room_id);
    setRooms([...otherRooms, { ...currentRoom, item_id: item }]);
    setRooms(rooms.sort((a, b) => a.id - b.id));
    axiosWithAuth()
      .put(`https://kono-di-da.herokuapp.com/api/room/${player.room_id}/`, {
        ...currentRoom,
        item_id: item,
      })
      .then((response) => {
        console.log("item assign", response);
      })
      .catch((err) => {
        console.log(err);
      });
    setPlayer({ ...player, item_id: 0 });
    axiosWithAuth()
      .put(`https://kono-di-da.herokuapp.com/api/players/${player.id}/`, {
        ...player,
      })
      .then((response) => {
        console.log("item assign", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const updatePlayerOnServer = () => {
    axiosWithAuth()
      .put(`https://kono-di-da.herokuapp.com/api/players/${player.id}/`, {
        ...player,
      })
      .then((response) => {
        console.log("player location update", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeLocation = (e) => {
    e.preventDefault();
  };

  const formatRoom = (room) => {
    if (
      (room.name.includes("Dec") && !room.name.includes("outside")) ||
      (room.name.includes("Feb") && !room.name.includes("outside")) ||
      (room.name.includes("Jan") && !room.name.includes("outside"))
    ) {
      return "current-room-Winter";
    } else if (
      room.name.includes("Dec") ||
      room.name.includes("Feb") ||
      room.name.includes("Jan")
    ) {
      return "current-room-Winter-out";
    } else if (
      (room.name.includes("Mar") && !room.name.includes("outside")) ||
      (room.name.includes("Apr") && !room.name.includes("outside")) ||
      (room.name.includes("May") && !room.name.includes("outside"))
    ) {
      return "current-room-Spring";
    } else if (
      room.name.includes("Mar") ||
      room.name.includes("Apr") ||
      room.name.includes("May")
    ) {
      return "current-room-Spring-out";
    } else if (
      (room.name.includes("Jun") && !room.name.includes("outside")) ||
      (room.name.includes("Jul") && !room.name.includes("outside")) ||
      (room.name.includes("Aug") && !room.name.includes("outside"))
    ) {
      return "current-room-Summer";
    } else if (
      room.name.includes("Jun") ||
      room.name.includes("Jul") ||
      room.name.includes("Aug")
    ) {
      return "current-room-Summer-out";
    } else if (
      (room.name.includes("Sep") && !room.name.includes("outside")) ||
      (room.name.includes("Oct") && !room.name.includes("outside")) ||
      (room.name.includes("Nov") && !room.name.includes("outside"))
    ) {
      return "current-room-Fall";
    } else if (
      room.name.includes("Sep") ||
      room.name.includes("Oct") ||
      room.name.includes("Nov")
    ) {
      return "current-room-Fall-out";
    }
  };

  return (
    // {localStorage.includes(token) ? <div>Please Register and Log In</div> : <div>Oh Hey</div>}
    <div>
      <div className="player-view">
        {rooms
          .filter((room) => player.room_id === room.id)
          .map((room) => {
            return (
              <div className={formatRoom(room)}>
                <div>
                  <div className="player-stats">
                    <Player
                      player={player}
                      rooms={rooms}
                      items={items}
                      className="player-stats"
                    />{" "}
                    <p>{room.name}</p>{" "}
                  </div>
                  <div className="controls">
                    {" "}
                    <div>
                      <button onClick={moveUp} value="up">
                        &#8593;
                      </button>
                    </div>
                    <div>
                      <button onClick={moveInside}>Inside</button>
                      <button onClick={moveLeft} value="left">
                        &#8592;
                      </button>
                      <button onClick={pickUpItem}>pick up item</button>
                      <button onClick={dropItem}>drop item</button>
                      <button onClick={moveRight} value="right">
                        &#8594;
                      </button>
                      <button onClick={moveOutside}>Outside</button>
                    </div>
                    <div className="down">
                      <button onClick={moveDown} value="down">
                        &#8595;
                      </button>
                    </div>
                  </div>
                  <div className="map">
                    <CalendarMap
                      currentLocation={currentLocation}
                      rooms={rooms}
                      player={player}
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GameView;
