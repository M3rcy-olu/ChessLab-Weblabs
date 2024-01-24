import React from "react";
import "./chessBoard.css";
import Tile from "../Tile/Tile";

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

const ChessBoard = () => {
  let board = [];

  for (let i = verticalAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const number = j + i;
      board.push(<Tile number={number} />);
    }
  }

  return <div className="chessboard">{board}</div>;
};

export default ChessBoard;
