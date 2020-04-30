import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function User(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  return (
    <div className="profile">
     
    </div>
  );
}

export default User;

