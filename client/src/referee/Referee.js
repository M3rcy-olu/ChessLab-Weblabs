import { TeamType, PieceType } from "../components/modules/ChessBoard/constants";
class Referee {
  tileIsOccupied(x, y, boardState) {
    // console.log("checking if tile is occupied");

    const piece = boardState.find((p) => p.position.x === x && p.position.y === y);
    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  tileIsOccupiedByOpp(x, y, boardState, team) {
    const piece = boardState.find(
      (p) => p.position.x === x && p.position.y === y && p.team !== team
    );

    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  isEnPassantMove(initialPosition, desiredPosition, type, team, boardState) {
    const pawnDirection = team === TeamType.our ? 1 : -1;

    //check if attacking piece is a pawn
    if (type === PieceType.pawn) {
      if (
        (desiredPosition.x - initialPosition.x === -1 ||
          desiredPosition.x - initialPosition.x === 1) &&
        desiredPosition.y - initialPosition.y === pawnDirection
      ) {
        const piece = boardState.find(
          (p) =>
            p.position.x === desiredPosition.x &&
            p.position.y === desiredPosition.y - pawnDirection &&
            p.enPassant
        );
        if (piece) {
          return true;
        }
      }
    }
    return false;
  }

  isValidMove(initialPosition, desiredPosition, type, team, boardState) {
    if (type === PieceType.pawn) {
      const specialRow = team === TeamType.our ? 1 : 6;
      const pawnDirection = team === TeamType.our ? 1 : -1;

      //Movement Logic
      if (
        initialPosition.x === desiredPosition.x &&
        initialPosition.y === specialRow &&
        desiredPosition.y - initialPosition.y === 2 * pawnDirection
      ) {
        if (
          !this.tileIsOccupied(desiredPosition.x, desiredPosition.y, boardState) &&
          !this.tileIsOccupied(desiredPosition.x, desiredPosition.y - pawnDirection, boardState)
        ) {
          return true;
        }
      } else if (
        initialPosition.x === desiredPosition.x &&
        desiredPosition.y - initialPosition.y === pawnDirection
      ) {
        if (!this.tileIsOccupied(desiredPosition.x, desiredPosition.y, boardState)) {
          return true;
        }
      }
      //Attack logic
      else if (
        desiredPosition.x - initialPosition.x === 1 ||
        (desiredPosition.x - initialPosition.x === -1 &&
          desiredPosition.y - initialPosition.y === pawnDirection)
      ) {
        if (this.tileIsOccupiedByOpp(desiredPosition.x, desiredPosition.y, boardState, team)) {
          return true;
        }
      }
    } else if (type === PieceType.knight) {
      console.log("knight");
    }
    return false;
  }
}

export default Referee;
