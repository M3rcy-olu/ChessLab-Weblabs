import React from "react";
import "./Tile.css";

const Tile = (props) => {
  const number = props.number;
  if (number % 2 === 0) {
    return (
      <div className="square white">
        <img src="../../../public/images/Chess_bdt60.png" />
      </div>
    );
  } else {
    return <div className="square black"></div>;
  }
};

export default Tile;
