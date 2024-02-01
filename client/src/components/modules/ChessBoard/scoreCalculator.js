import { PieceType } from "./constants";

export function calculateScore(pieces) {
  const score = 0;
  for (let piece in pieces) {
    switch (piece.type) {
      case PieceType.pawn:
        value = 
        score; // this is where we would need to get from api the value of a pawn
        break;
      case PieceType.knight:
        score; // this is where we would need to get from api the value of a pawn
        break;
      case PieceType.bishop:
        score; // this is where we would need to get from api the value of a pawn
        break;
      case PieceType.rook:
        score; // this is where we would need to get from api the value of a pawn
        break;
      case PieceType.queen:
        score; // this is where we would need to get from api the value of a pawn
        break;
      case PieceType.king:
        score; // this is where we would need to get from api the value of a pawn
        break;
    }
  }
  return points;
}
