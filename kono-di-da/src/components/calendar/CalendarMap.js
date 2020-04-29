import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {axiosWithAuth} from '../../utils/axiosWithAuth';



const CalendarMap = () => {

const [rooms, setRooms] = useState([]) 

useEffect(()=>{
        axiosWithAuth().get("https://kono-di-da.herokuapp.com/api/room")
          .then(response => {
            console.log(response);
            setRooms(response.data)
          });
},[]
)



   return <div>{rooms.map(room => <div>{room.name}</div>)}</div>

}

export default CalendarMap



    