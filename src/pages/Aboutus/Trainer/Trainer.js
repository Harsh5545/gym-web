import React, { useState } from "react";
// import MeetOurTeam from "./MeetOurTeam";
import "./Trainer.css";

function Trainer(props) {
  <>
    <div className="cards">
      <div className="card">
        <img src={props.imageUrl} alt="trainer" className="cardimg" />
        <div className="cardinfo">
          <span className="cardname">{props.name}</span>
          <h3 className="cardage">{props.age}</h3>
          <h4>CERTIFIED Trainer</h4>
        </div>
      </div>
    </div>
  </>;
}

export default Trainer;
