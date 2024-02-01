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

  tileEmptyIsOccupiedByOpp(desiredPosition, boardState, team) {
    return (
      !this.tileIsOccupied(desiredPosition, boardState) ||
      this.tileIsOccupiedByOpp(desiredPosition, boardState, team)
    );
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

  pawnMove(initialPosition, desiredPosition, team, boardState) {
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

    return false;
  }

  knightMove(initialPosition, desiredPosition, team, boardState) {
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
    return false;
  }

  bishopMove(initialPosition, desiredPosition, team, boardState) {
    // up/down right movement
    for (let i = 1; i < 8; i++) {
      //up right movement
      if (desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y) {
        let passedPosition = { x: initialPosition.x + i, y: initialPosition.y + i };
        //check if tile is desitnation tile
        if (passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y) {
          if (this.tileEmptyIsOccupiedByOpp(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if (this.tileIsOccupied(passedPosition, boardState)) {
            console.log("illegal move");
            break;
          }
        }
      }

      //bottom right movement
      if (desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y) {
        let passedPosition = { x: initialPosition.x + i, y: initialPosition.y - i };
        if (passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y) {
          if (this.tileEmptyIsOccupiedByOpp(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if (this.tileIsOccupied(passedPosition, boardState)) {
            console.log("illegal move");
            break;
          }
        }
      }

      //up left movement
      if (desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y) {
        let passedPosition = { x: initialPosition.x - i, y: initialPosition.y + i };
        if (passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y) {
          if (this.tileEmptyIsOccupiedByOpp(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if (this.tileIsOccupied(passedPosition, boardState)) {
            console.log("illegal move");
            break;
          }
        }
      }
      //bottom left movement
      if (desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y) {
        let passedPosition = { x: initialPosition.x - i, y: initialPosition.y - i };
        if (passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y) {
          if (this.tileEmptyIsOccupiedByOpp(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if (this.tileIsOccupied(passedPosition, boardState)) {
            console.log("illegal move");
            break;
          }
        }
      }
    }
    return false;
  }

  rookMove(initialPosition, desiredPosition, team, boardState) {
    //moving up and down
    if (initialPosition.x === desiredPosition.x) {
      for (let i = 1; i < 8; i++) {
        let multiplier = desiredPosition.y < initialPosition.y ? -1 : 1;
        let passedPosition = { x: initialPosition.x, y: initialPosition.y + i * multiplier };
        if (passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y) {
          if (this.tileEmptyIsOccupiedByOpp(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if (this.tileIsOccupied(passedPosition, boardState)) {
            break;
          }
        }
      }
    }
    //moving right and left
    if (initialPosition.y === desiredPosition.y) {
      for (let i = 1; i < 8; i++) {
        let multiplier = desiredPosition.x < initialPosition.x ? -1 : 1;
        let passedPosition = { x: initialPosition.x + i * multiplier, y: initialPosition.y };
        if (passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y) {
          if (this.tileEmptyIsOccupiedByOpp(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if (this.tileIsOccupied(passedPosition, boardState)) {
            break;
          }
        }
      }
    }
    return false;
  }

  queenMove(initialPosition, desiredPosition, team, boardState) {
    for (let i = 1; i < 8; i++) {
      //Straight Line & diagonal mmovement
      let multiplierX;
      let multiplierY;
      if (desiredPosition.x < initialPosition.x) {
        multiplierX = -1;
      } else if (desiredPosition.x > initialPosition.x) {
        multiplierX = 1;
      } else {
        multiplierX = 0;
      }

      if (desiredPosition.y < initialPosition.y) {
        multiplierY = -1;
      } else if (desiredPosition.y > initialPosition.y) {
        multiplierY = 1;
      } else {
        multiplierY = 0;
      }

      let passedPosition = {
        x: initialPosition.x + i * multiplierX,
        y: initialPosition.y + i * multiplierY,
      };

      if (samePosition(passedPosition, desiredPosition)) {
        if (this.tileEmptyIsOccupiedByOpp(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if (this.tileIsOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }
  }

  isValidMove(initialPosition, desiredPosition, type, team, boardState) {
    let validMove = false;
    switch (type) {
      case PieceType.pawn:
        validMove = this.pawnMove(initialPosition, desiredPosition, team, boardState);
        break;
      case PieceType.knight:
        validMove = this.knightMove(initialPosition, desiredPosition, team, boardState);
        break;
      case PieceType.bishop:
        validMove = this.bishopMove(initialPosition, desiredPosition, team, boardState);
        break;
      case PieceType.rook:
        validMove = this.rookMove(initialPosition, desiredPosition, team, boardState);
        break;
      case PieceType.queen:
        validMove = this.queenMove(initialPosition, desiredPosition, team, boardState);
        break;
      case PieceType.king:
        validMove = this.knightMove(initialPosition, desiredPosition, team, boardState);
    }
    return validMove;
  }
}

export default Referee;
