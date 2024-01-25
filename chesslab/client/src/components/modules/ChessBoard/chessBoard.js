import React from "react";
import "./chessBoard.css";
import Tile from "../Tile/Tile";

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

const Piece = {
  image: "",
  x: 0,
  y: 0,
};

// function Piece(img_path, x, y) {
//   this.image = img_path;
//   this.x = x;
//   this.y = y;
// }

const pieces = [];

const ChessBoard = () => {
  let board = [];

  for (let i = verticalAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const number = j + i + 2;
      let image = "../../../public/images/Chess_bdt60.png";
      pieces.forEach((p) => {});
      board.push(<Tile image={image} number={number} />);
    }
  }

  return <div className="chessboard">{board}</div>;
};

export default ChessBoard;
