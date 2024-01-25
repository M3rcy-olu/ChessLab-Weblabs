import React from "react";
import "./Tile.css";

const Tile = (props) => {
  const number = props.number;
  const image = props.image;
  if (number % 2 === 0) {
    return (
      <div className="square white">
        <img src={image} />
      </div>
    );
  } else {
    return (
      <div className="square black">
        <img src={image} />
      </div>
    );
  }
};

export default Tile;
