import { PieceType, TeamType } from "../components/modules/ChessBoard/chessBoard";
class Referee {
  tileIsOccupied(x, y, boardState) {
    // console.log("checking if tile is occupied");

    const piece = boardState.find((p) => p.x === x && p.y === y);
    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  tileIsOccupiedByOpp(x, y, boardState, team) {
    const piece = boardState.find((p) => p.x === x && p.y === y && p.team !== team);

    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  isEnPassantMove(px, py, x, y, type, team, boardState) {
    const pawnDirection = team === TeamType.our ? 1 : -1;

    //check if attacking piece is a pawn
    if (type === PieceType.pawn) {
      if (x - px === 1 || (x - px === -1 && y - py === pawnDirection)) {
        const piece = boardState.find((p) => p.x === x && p.y === y - pawnDirection);
        console.log(piece);
      }
    }

    //check that the en passant move is in the diagonal direction of the attacking peice

    //check if en passant move would happen above or below the attacking piece

    //chech if the attacked piece has made an en passant move in the previous turn

    return false;
  }

  isValidMove(px, py, x, y, type, team, boardState) {
    // console.log("Referee is checking for valid move...");
    // console.log(`previous location ${px}, ${py}`);
    // console.log(`current location: ${x}, ${y}`);
    // console.log(type);
    // console.log(team);

    if (type === PieceType.pawn) {
      const specialRow = team === TeamType.our ? 1 : 6;
      const pawnDirection = team === TeamType.our ? 1 : -1;

      //Movement Logic
      if (px === x && py === specialRow && y - py === 2 * pawnDirection) {
        if (
          !this.tileIsOccupied(x, y, boardState) &&
          !this.tileIsOccupied(x, y - pawnDirection, boardState)
        ) {
          return true;
        }
      } else if (px === x && y - py === pawnDirection) {
        if (!this.tileIsOccupied(x, y, boardState)) {
          return true;
        }
      }
      //Attack logic
      else if (x - px === 1 || (x - px === -1 && y - py === pawnDirection)) {
        if (this.tileIsOccupiedByOpp(x, y, boardState, team)) {
          console.log("can strike the enemy");
          return true;
        }
      }
    }
    return false;
  }
}

export default Referee;
