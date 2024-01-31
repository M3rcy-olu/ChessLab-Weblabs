import React, { useRef, useState } from "react";
import "./chessBoard.css";
import Tile from "../Tile/Tile";
import Referee from "../../../referee/Referee";
import {
  verticalAxis,
  horizontalAxis,
  TeamType,
  PieceType,
  initialboardState,
  grid_size,
  grid_center,
  samePosition,
} from "./constants";

//Function handling the generation of the chessboard and placement of pieces
const ChessBoard = () => {
  const [activePiece, setActivePiece] = useState(null);
  const [grabPosition, setGrabPosition] = useState({ x: -1, y: -1 });
  const [pieces, setPieces] = useState(initialboardState);
  const chessboardRef = useRef(null);
  const referee = new Referee();

  //Function for picking chess pieces
  const grabPiece = (e) => {
    const element = e.target;
    const chessboard = chessboardRef.current;

    if (element.classList.contains("chessPiece") && chessboard) {
      //Calculation for which chess tile a piece is hovering over
      setGrabPosition({
        x: Math.round(((e.clientX - chessboard.offsetLeft) * 1.25) / grid_size),
        y: Math.abs(Math.round(((e.clientY - chessboard.offsetTop - 600) * 1.25) / grid_size)),
      });

      const x = e.clientX - grid_center;
      const y = e.clientY - grid_center;
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

  //Function for dropping a piece on a tile
  const dropPiece = (e) => {
    const chessboard = chessboardRef.current;

    if (activePiece && chessboard) {
      const x = Math.round(((e.clientX - chessboard.offsetLeft - 45) * 1.25) / grid_size);
      const y = Math.abs(Math.round(((e.clientY - chessboard.offsetTop - 600) * 1.25) / grid_size));

      const currentPiece = pieces.find((p) => samePosition(p.position, grabPosition));

      if (currentPiece) {
        const validMove = referee.isValidMove(
          grabPosition,
          { x, y },
          currentPiece.type,
          currentPiece.team,
          pieces
        );

        const isEnPessantMove = referee.isEnPassantMove(
          grabPosition,
          { x, y },
          currentPiece.type,
          currentPiece.team,
          pieces
        );

        const pawnDirection = currentPiece.team === TeamType.our ? 1 : -1;
        if (isEnPessantMove) {
          const updatedPieces = pieces.reduce((results, piece) => {
            if (samePosition(piece.position, grabPosition)) {
              piece.enPassant = false;
              piece.position.x = x;
              piece.position.y = y;
              results.push(piece);
            } else if (!samePosition(piece.position, { x: x, y: y - pawnDirection })) {
              if (piece.type === PieceType.pawn) {
                piece.enPassant = false;
              }
              results.push(piece);
            }

            return results;
          }, []);
          setPieces(updatedPieces);
        } else if (validMove) {
          const updatedPieces = pieces.reduce((results, piece) => {
            if (samePosition(piece.position, grabPosition)) {
              piece.enPassant = Math.abs(grabPosition.y - y) === 2 && piece.type === PieceType.pawn;

              piece.position.x = x;
              piece.position.y = y;
              results.push(piece);
            } else if (!samePosition(piece.position, { x: x, y: y })) {
              if (piece.type === PieceType.pawn) {
                piece.enPassant = false;
              }
              results.push(piece);
            }

            return results;
          }, []);
          setPieces(updatedPieces);
        } else {
          activePiece.style.position = "relative";
          activePiece.style.removeProperty("top");
          activePiece.style.removeProperty("left");
        }
      }
      setActivePiece(null);
    }
  };

  let board = [];

  for (let i = verticalAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const number = j + i + 2;
      const piece = pieces.find((p) => p.position.x === j && p.position.y === i);
      let return_img = piece ? require("../../../" + piece.image).default : undefined;

      board.push(<Tile key={`${j}, ${i}`} image={return_img} number={number} />);
    }
  }

  return (
    <div
      onMouseMove={(e) => movePiece(e)}
      onMouseDown={(e) => grabPiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      className="chessboard"
      ref={chessboardRef}
    >
      {board}
    </div>
  );
};

export default ChessBoard;
