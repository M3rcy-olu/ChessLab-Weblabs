import React from "react";
import "./chessBoard.css";
import Tile from "../Tile/Tile";

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default function ChessBoard() {
  let board = [];

  for (let i = verticalAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const number = j + i + 2;
      if (number % 2 === 0) {
        board.push(<Tile tile_type="black" />);
      } else {
        board.push(<Tile tile_type="white" />);
      }
    }
  }

  return <div className="chessboard">{board}</div>;
}
