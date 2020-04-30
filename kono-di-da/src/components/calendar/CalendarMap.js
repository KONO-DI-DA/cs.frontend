import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {axiosWithAuth} from '../../utils/axiosWithAuth';


const CalendarMap = (props) => {


  return (
    <div className='maprooms'>
      {props.currentLocation < 53 ?
        props.rooms.filter((e) => e.id < 53).map(room => {
          return (<div className={room.id === props.currentLocation ? "mapbox-selected" : "mapbox"}>
            <div>{room.name}</div>
          </div>)
        })
        :
        props.rooms.filter((e) => e.id > 52).map(room => {
          return (<div className={room.id === props.currentLocation ? "mapbox-selected" : "mapbox"}>
            <div>{room.name}</div>
          </div>)
        })
      } </div>)
}

export default CalendarMap



    