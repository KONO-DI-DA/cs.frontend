import React from "react";

function Player(props) {
  return (
    <div className="map">
      <p>Missing Items:</p>
      {props.items.map((item) => {
        console.log(item);
        return (
          <>
            <div className="map">
              <p> {item.name} </p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Player;
