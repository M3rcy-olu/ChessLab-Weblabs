export const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
export const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

export const grid_size = 100;
export const grid_center = 37.5;

export function samePosition(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}

export const TeamType = {
  opponent: "OPPONENT",
  our: "OUR",
};

export const PieceType = {
  pawn: "PAWN",
  knight: "KNIGHT",
  bishop: "BISHOP",
  rook: "ROOK",
  queen: "QUEEN",
  king: "KING",
};

export const initialboardState = [];

for (let i = 0; i < 2; i++) {
  const teamType = i === 0 ? TeamType.our : TeamType.opponent;
  const color = teamType === TeamType.our ? "l" : "d";
  const y = teamType === TeamType.our ? 0 : 7;
  const p_y = teamType === TeamType.our ? 1 : 6;

  initialboardState.push(
    {
      image: `public/images/Chess_r${color}t60.png`,
      position: { x: 0, y: y },
      type: PieceType.rook,
      team: teamType,
    },
    {
      image: `public/images/Chess_n${color}t60.png`,
      position: { x: 1, y: y },
      type: PieceType.knight,
      team: teamType,
    },
    {
      image: `public/images/Chess_b${color}t60.png`,
      position: { x: 2, y: y },
      type: PieceType.bishop,
      team: teamType,
    },
    {
      image: `public/images/Chess_q${color}t60.png`,
      position: { x: 3, y: y },
      type: PieceType.queen,
      team: teamType,
    },
    {
      image: `public/images/Chess_k${color}t60.png`,
      position: { x: 4, y: 3 },
      type: PieceType.king,
      team: teamType,
    },
    {
      image: `public/images/Chess_b${color}t60.png`,
      position: { x: 5, y: y },
      type: PieceType.bishop,
      team: teamType,
    },
    {
      image: `public/images/Chess_n${color}t60.png`,
      position: { x: 6, y: y },
      type: PieceType.knight,
      team: teamType,
    },
    {
      image: `public/images/Chess_r${color}t60.png`,
      position: { x: 7, y: y },
      type: PieceType.rook,
      team: teamType,
    }
  );

  //Initalizes the starting positions of the black pieces x--> horizontal, y --> vertical
  for (let i = 0; i < 8; i++) {
    initialboardState.push({
      image: `public/images/Chess_p${color}t60.png`,
      position: { x: i, y: p_y },
      type: PieceType.pawn,
      team: teamType,
      enPassant: false,
    });
  }
}
