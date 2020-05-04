import React from "react";
import "./Team.scss";
import Ethan from "../images/Ethan.jpeg";
import Nicole from "../images/Nicole.jpeg";
import Tony from "../images/Tony.png";
import Priyanka from "../images/Priyanka.png";
import Greg from "../images/Greg.jpeg";
import Jenn from "../images/Jenn.jpeg";

const Team = () => {
  return (
    <>
      <div className="team">
        <h1>KONO DI DA Team</h1>
      </div>
      <div className="team">
        <div className="teamControls">
          <img src={Nicole} alt="Nicole Adams"></img>
          <p>Nicole Adams</p>
          <div>
            <button>&#8593;</button>
          </div>
          <div>
            <button>&#8592;</button>
            <button>GitHub</button>
            <button>LinkedIn</button>
            <button>&#8594;</button>
          </div>
          <div>
            <button>&#8595;</button>
          </div>
        </div>
        <div className="teamControls">
          <div>
            <img src={Tony} alt="Tony Burch"></img>
          </div>
          <p>Tony Burch</p>
          <div>
            <button>&#8593;</button>
          </div>
          <div>
            <button>&#8592;</button>
            <button>GitHub</button>
            <button>LinkedIn</button>
            <button>&#8594;</button>
          </div>
          <div>
            <button>&#8595;</button>
          </div>
        </div>
        <div className="teamControls">
          <img src={Priyanka} alt="Priyanka Dadlani"></img>
          <p>Prianka Dadlani</p>
          <div>
            <button>&#8593;</button>
          </div>
          <div>
            <button>&#8592;</button>
            <button>GitHub</button>
            <button>LinkedIn</button>
            <button>&#8594;</button>
          </div>
          <div>
            <button>&#8595;</button>
          </div>
        </div>
        <div className="teamControls">
          <img src={Ethan} alt="Ethan Hickey"></img>
          <p>Ethan Hickey - Section Lead</p>
          <div>
            <button>&#8593;</button>
          </div>
          <div>
            <button>&#8592;</button>
            <button>GitHub</button>
            <button>LinkedIn</button>
            <button>&#8594;</button>
          </div>
          <div>
            <button>&#8595;</button>
          </div>
        </div>

        <div className="teamControls">
          <img src={Greg} alt="Greg Johnston"></img>
          <p>Greg Johnston</p>
          <div>
            <button>&#8593;</button>
          </div>
          <div>
            <button>&#8592;</button>
            <button>GitHub {"  "}</button>
            <button>LinkedIn</button>
            <button>&#8594;</button>
          </div>
          <div>
            <button>&#8595;</button>
          </div>
        </div>
        <div className="teamControls">
          <img src={Jenn} alt="Jenn Soderborg"></img>
          <p>Jenn Soderborg - Team Lead</p>

          <div>
            <button>&#8593;</button>
          </div>
          <div>
            <button>&#8592;</button>
            <button>GitHub</button>
            <button>LinkedIn</button>
            <button>&#8594;</button>
          </div>
          <div>
            <button>&#8595;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
