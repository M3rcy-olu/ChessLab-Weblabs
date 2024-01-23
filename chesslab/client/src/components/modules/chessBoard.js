import React from "react";
import "./ChessBoard.css";

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default function ChessBoard() {
  let board = [];

  for (let i = verticalAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const squareStr = horizontalAxis[j] + verticalAxis[i];
      const whiteSquare = (i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1);
      board.push(
        <div key={squareStr} className={`square ${whiteSquare ? "white" : "black"}`}></div>
      );
    }
  }

  return <div id="chessboard">{board}</div>;
}
