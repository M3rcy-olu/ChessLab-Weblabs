import React, { useState } from "react";
import "./PlayerStats.css";
const PlayerStats = (props) => {
  return (
    <div className="stats">
      <span style={{ color: props.keyColor, fontSize: props.font || 32 }}>{props.playerKey} </span>
      <span style={{ color: props.valueColor, fontSize: props.font || 32 }}>
        {props.playerValue}
      </span>
    </div>
  );
};

export default PlayerStats;
