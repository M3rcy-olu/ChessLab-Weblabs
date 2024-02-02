//Chess logic from: https://www.youtube.com/@FrontendCoding
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
  setboard,
} from "./constants";
import { calculateScore } from "./scoreCalculator";
import ButtonUI from "../Buttons/ButtonUI";
import { post } from "../../../utilities";

//Function handling the generation of the chessboard and placement of pieces
const ChessBoard = (props) => {
  const [activePiece, setActivePiece] = useState(null);
  const [promotionPawn, setPromotionPawn] = useState();
  const [grabPosition, setGrabPosition] = useState({ x: -1, y: -1 });
  const [pieces, setPieces] = useState(initialboardState);
  const chessboardRef = useRef(null);
  const modelRef = useRef(null);
  const endRef = useRef(null);
  const referee = new Referee();
  const userData = props.userData;

  //
  //
  // This end game function is run when a win condition is met

  const updatePoints = async (points) => {
    points = Number(points);
    try {
      const data = await post("/api/updatePoints", { points: points });
      if (data.error) {
        alert("Error updating points: " + data.error);
      } else {
        alert("Points updated!");
      }
    } catch (error) {
      console.error("Error updating points:", error);
    }
    console.log("Points updated!");
    console.log(points);
  };

  const endGame = (winner, team) => {
    endRef.current?.classList.remove("hidden");
    const scoregained = calculateScore(pieces, team, userData);
    console.log(scoregained);
    alert(`${winner} has won the game \n ${winner} recieves ${scoregained} amount of points`);
    updatePoints(scoregained);
  };
  //
  //
  //

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
            const otherking = pieces.find(
              (p) => p.type === PieceType.king && p.team !== piece.team
            );
            if (samePosition(piece.position, grabPosition)) {
              piece.enPassant = Math.abs(grabPosition.y - y) === 2 && piece.type === PieceType.pawn;

              piece.position.x = x;
              piece.position.y = y;

              let promotionRow = piece.team === TeamType.our ? 7 : 0;
              if (y === promotionRow && piece.type == PieceType.pawn) {
                modelRef.current?.classList.remove("hidden");
                setPromotionPawn(piece);
              }
              if (samePosition(piece.position, otherking.position)) {
                console.log("attacked other king");
                const winner = piece.team === TeamType.our ? "Player 1" : "Player 2";
                endGame(winner, piece.team);
              }
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

  function promotePawn(pieceType) {
    if (promotionPawn === undefined) {
      return;
    }
    const updatedPieces = pieces.reduce((results, piece) => {
      if (samePosition(piece.position, promotionPawn.position)) {
        piece.type = pieceType;
        const teamType = piece.team === TeamType.our ? "l" : "d";
        let image = "";
        switch (pieceType) {
          case PieceType.rook: {
            image = "r";
            break;
          }
          case PieceType.knight: {
            image = "n";
            break;
          }
          case PieceType.bishop: {
            image = "b";
            break;
          }
          case PieceType.queen: {
            image = "q";
            break;
          }
        }
        piece.image = `public/images/Chess_${image}${teamType}t60.png`;
      }
      results.push(piece);
      return results;
    }, []);

    setPieces(updatedPieces);
    modelRef.current.classList.add("hidden");
  }

  function promotionTeamType() {
    return promotionPawn?.team === TeamType.our ? "l" : "d";
  }

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
    <>
      <div id="game-end-screen" className="hidden" ref={endRef}>
        <ButtonUI
          func={() => {
            setPieces([]);
            setPieces(setboard());
            endRef.current?.classList.add("hidden");
          }}
          pos="absolute"
          left={40}
          top={50}
          text="Play Again"
          height={100}
        />
      </div>
      <div id="pawn-promotion-model" className="hidden" ref={modelRef}>
        <div className="model-body">
          <img
            onClick={() => promotePawn(PieceType.rook)}
            src={require(`../../../public/images/Chess_r${promotionTeamType()}t60.png`).default}
          />
          <img
            onClick={() => promotePawn(PieceType.bishop)}
            src={require(`../../../public/images/Chess_b${promotionTeamType()}t60.png`).default}
          />
          <img
            onClick={() => promotePawn(PieceType.knight)}
            src={require(`../../../public/images/Chess_n${promotionTeamType()}t60.png`).default}
          />
          <img
            onClick={() => promotePawn(PieceType.queen)}
            src={require(`../../../public/images/Chess_q${promotionTeamType()}t60.png`).default}
          />
        </div>
      </div>
      <div
        onMouseMove={(e) => movePiece(e)}
        onMouseDown={(e) => grabPiece(e)}
        onMouseUp={(e) => dropPiece(e)}
        className="chessboard"
        ref={chessboardRef}
      >
        {board}
      </div>
    </>
  );
};

export default ChessBoard;
