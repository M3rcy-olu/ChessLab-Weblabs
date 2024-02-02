import { PieceType } from "./constants";

export function calculateScore(pieces, team, userData) {
  let score = 0;
  for (let item in pieces) {
    const piece = pieces[item];
    if (piece.type === PieceType.pawn && piece.team === team) {
      const value = 1;
      //value = userData.pawnLevel
      score += value; // this is where we would need to get from api the value of a pawn
    } else if (piece.type === PieceType.knight && piece.team === team) {
      const value = 3;
      //value = userData.pawnLevel
      score += value; // this is where we would need to get from api the value of a pawn
    } else if (piece.type === PieceType.bishop && piece.team === team) {
      const value = 3;
      // value = userData.pawnLevel
      score += value;
    } else if (piece.type === PieceType.rook && piece.team === team) {
      const value = 5;
      // value = userData.pawnLevel
      score += value;
    } else if (piece.type === PieceType.queen && piece.team === team) {
      const value = 9;
      // value = userData.pawnLevel
      score += value;
    } else if (piece.type === PieceType.king && piece.team === team) {
      const value = 1;
      // value = userData.pawnLevel
      score += value;
    }
  }
  return score;
}
