import React from "react";
import "./Tile.css";

const Tile = (props) => {
  const number = props.number;
  const image = props.image;
  if (number % 2 === 0) {
    return (
      <div className="square black">
        {image !== undefined && (
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="chessPiece"
          ></div>
        )}
      </div>
    );
  } else {
    return (
      <div className="square white">
        {image !== undefined && (
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="chessPiece"
          ></div>
        )}
      </div>
    );
  }
};

export default Tile;
