import React from "react";
import "./chessBoard.css";
import Tile from "../Tile/Tile";

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

// function Piece(img_path, x, y) {
//   this.image = img_path;
//   this.x = x;
//   this.y = y;
// }

//Array containing all chess pieces on the board
const pieces = [];

//Initalizes the starting positions of the black pieces x--> horizontal, y --> vertical
for (let i = 0; i < 8; i++) {
  pieces.push({ image: "public/images/Chess_pdt60.png", x: i, y: 6 });
}
//Initalizes the starting positions of the white pieces
for (let i = 0; i < 8; i++) {
  pieces.push({ image: "public/images/Chess_plt60.png", x: i, y: 1 });
}
//Heavy Pieces

for (let i = 0; i < 2; i++) {
  const color = i === 0 ? "l" : "d";
  const y = i === 0 ? 0 : 7;

  pieces.push(
    { image: `public/images/Chess_r${color}t60.png`, x: 0, y: y },
    { image: `public/images/Chess_n${color}t60.png`, x: 1, y: y },
    { image: `public/images/Chess_b${color}t60.png`, x: 2, y: y },
    { image: `public/images/Chess_q${color}t60.png`, x: 3, y: y },
    { image: `public/images/Chess_k${color}t60.png`, x: 4, y: y },
    { image: `public/images/Chess_b${color}t60.png`, x: 5, y: y },
    { image: `public/images/Chess_n${color}t60.png`, x: 6, y: y },
    { image: `public/images/Chess_r${color}t60.png`, x: 7, y: y }
  );
}

let activePiece = null;
//Function for moving chess pieces
const grabPice = (e) => {
  const element = e.target;
  if (element.classList.contains("chessPiece")) {
    console.log(e.target);

    const x = e.clientX - 35;
    const y = e.clientY - 35;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activePiece = element;
  }
};

//Function for moving chess peices
const movePiece = (e) => {
  if (activePiece) {
    const x = e.clientX - 35;
    const y = e.clientY - 35;
    activePiece.style.position = "absolute";
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;
  }
};

const dropPiece = (e) => {
  if (activePiece) {
    activePiece = null;
  }
};
//Function handling the generation of the chessboard and placement of pieces
const ChessBoard = () => {
  let board = [];

  for (let i = verticalAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const number = j + i + 2;
      let return_img = undefined;
      pieces.forEach((p) => {
        if (p.x === j && p.y === i) {
          const image = p.image;
          return_img = require("../../../" + image).default;
        }
      });
      board.push(<Tile key={`${j}, ${i}`} image={return_img} number={number} />);
    }
  }

  return (
    <div
      onMouseMove={(e) => movePiece(e)}
      onMouseDown={(e) => grabPice(e)}
      onMouseUp={(e) => dropPiece(e)}
      className="chessboard"
    >
      {board}
    </div>
  );
};

export default ChessBoard;
