import React from "react";
import "./Tile.css";

const Tile = (props) => {
  const tile_type = props.tile_type;
  return (
    <div className={`square ${tile_type}`}>
      <img src="M3rcy-olu-jimixoso-MideCS-tremavetera\chesslab\client\src\public\images\Chess_pdt60.png" />
    </div>
  );
};

export default Tile;
