import { PieceType } from "./constants";

export function calculateScore(pieces, team, userData) {
  let score = 0;
  for (let piece in pieces) {
    if (piece.type === PieceType.pawn && piece.team === team) {
      value = userData.pawnlevel;
      score += value; // this is where we would need to get from api the value of a pawn
    } else if (piece.type === PieceType.knight && piece.team === team) {
      value = userData.knightlevel;
      score += value; // this is where we would need to get from api the value of a pawn
    } else if (piece.type === PieceType.bishop && piece.team === team) {
      value = userData.bishoplevel;
      score += value;
    } else if (piece.type === PieceType.rook && piece.team === team) {
      value = userData.rooklevel;
      score += value;
    } else if (piece.type === PieceType.queen && piece.team === team) {
      value = userData.queenlevel;
      score += value;
    } else if (piece.type === PieceType.king && piece.team === team) {
      value = userData.kinglevel;
      score += value;
    }
  }
  return score;
}
