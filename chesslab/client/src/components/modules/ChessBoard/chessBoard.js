import React, { useRef, useState } from "react";
import "./chessBoard.css";
import Tile from "../Tile/Tile";

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

// function Piece(img_path, x, y) {
//   this.image = img_path;
//   this.x = x;
//   this.y = y;
// }

const initialboardState = [];

//Initalizes the starting positions of the black pieces x--> horizontal, y --> vertical
for (let i = 0; i < 8; i++) {
  initialboardState.push({ image: "public/images/Chess_pdt60.png", x: i, y: 6 });
}
//Initalizes the starting positions of the white pieces
for (let i = 0; i < 8; i++) {
  initialboardState.push({ image: "public/images/Chess_plt60.png", x: i, y: 1 });
}
//Heavy Pieces

for (let i = 0; i < 2; i++) {
  const color = i === 0 ? "l" : "d";
  const y = i === 0 ? 0 : 7;

  initialboardState.push(
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

//Function handling the generation of the chessboard and placement of pieces
const ChessBoard = () => {
  const [activePiece, setActivePiece] = useState(null);
  const [gridX, setgridX] = useState(0);
  const [gridY, setgridY] = useState(0);
  const [pieces, setPieces] = useState(initialboardState);
  const chessboardRef = useRef(null);

  //Function for picking chess pieces
  const grabPice = (e) => {
    const element = e.target;
    const chessboard = chessboardRef.current;

    if (element.classList.contains("chessPiece") && chessboard) {
      //Calculation for which chess tile a piece is hovering over
      setgridX(Math.round(((e.clientX - chessboard.offsetLeft - 35) * 1.25) / 100));
      setgridY(Math.abs(Math.round(((e.clientY - chessboard.offsetTop - 600) * 1.25) / 100)));

      const x = e.clientX - 35;
      const y = e.clientY - 35;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      setActivePiece(element);
    }
  };

  //Function for moving chess peices
  const movePiece = (e) => {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const minX = chessboard.offsetLeft - 10;
      const minY = chessboard.offsetTop - 10;
      const maxX = chessboard.offsetLeft + chessboard.clientWidth - 60;
      const maxY = chessboard.offsetTop + chessboard.clientWidth - 60;
      const x = e.clientX - 35;
      const y = e.clientY - 35;
      activePiece.style.position = "absolute";
      // activePiece.style.left = `${x}px`;
      // activePiece.style.top = `${y}px`;

      //if x position of piece is smaller than the left side
      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      }
      //if x position is greater than right side
      else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      }
      //if x positions is within chessboard constraints
      else {
        activePiece.style.left = `${x}px`;
      }

      //Above comments apply for y position
      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      } else {
        activePiece.style.top = `${y}px`;
      }
    }
  };

  const dropPiece = (e) => {
    const chessboard = chessboardRef.current;

    if (activePiece && chessboard) {
      const x = Math.round(((e.clientX - chessboard.offsetLeft - 35) * 1.25) / 100);
      const y = Math.abs(Math.round(((e.clientY - chessboard.offsetTop - 600) * 1.25) / 100));
      console.log(x, y);

      setPieces((value) => {
        const pieces = value.map((p) => {
          if (p.x === gridX && p.y === gridY) {
            p.x = x;
            p.y = y;
          }
          return p;
        });
        return pieces;
      });
      setActivePiece(null);
    }
  };

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
      ref={chessboardRef}
    >
      {board}
    </div>
  );
};

export default ChessBoard;
