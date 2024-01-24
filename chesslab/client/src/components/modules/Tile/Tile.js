import React from "react";
import "./Tile.css";
import img from "../../../public/images/Chess_bdt60.png";

const Tile = (props) => {
  const number = props.number;
  if (number % 2 === 0) {
    return (
      <div className="square white">
        <img src={img} />
      </div>
    );
  } else {
    return <div className="square black"></div>;
  }
};

export default Tile;
