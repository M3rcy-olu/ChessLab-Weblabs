import { TeamType, PieceType, samePosition } from "../components/modules/ChessBoard/constants";
class Referee {
  tileIsOccupied(desiredPosition, boardState) {
    // console.log("checking if tile is occupied");

    const piece = boardState.find((p) => samePosition(p.position, desiredPosition));
    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  tileIsOccupiedByOpp(desiredPosition, boardState, team) {
    const piece = boardState.find(
      (p) => samePosition(p.position, desiredPosition) && p.team !== team
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
          !this.tileIsOccupied(desiredPosition, boardState) &&
          !this.tileIsOccupied(
            { x: desiredPosition.x, y: desiredPosition.y - pawnDirection },
            boardState
          )
        ) {
          return true;
        }
      } else if (
        initialPosition.x === desiredPosition.x &&
        desiredPosition.y - initialPosition.y === pawnDirection
      ) {
        if (!this.tileIsOccupied(desiredPosition, boardState)) {
          return true;
        }
      }
      //Attack logic
      else if (
        desiredPosition.x - initialPosition.x === 1 ||
        (desiredPosition.x - initialPosition.x === -1 &&
          desiredPosition.y - initialPosition.y === pawnDirection)
      ) {
        if (this.tileIsOccupiedByOpp(desiredPosition, boardState, team)) {
          return true;
        }
      }
    } else if (type === PieceType.knight) {
      for (let i = -1; i < 2; i += 2) {
        for (let j = -1; j < 2; j += 2) {
          if (desiredPosition.y - initialPosition.y === 2 * i) {
            if (desiredPosition.x - initialPosition.x === j) {
              if (
                !this.tileIsOccupied(desiredPosition, boardState) ||
                this.tileIsOccupiedByOpp(desiredPosition, boardState, team)
              ) {
                return true;
              }
            }
          }
          if (desiredPosition.x - initialPosition.x === 2 * i) {
            if (desiredPosition.y - initialPosition.y === j) {
            }
            if (
              !this.tileIsOccupied(desiredPosition, boardState) ||
              this.tileIsOccupiedByOpp(desiredPosition, boardState, team)
            ) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}

export default Referee;
