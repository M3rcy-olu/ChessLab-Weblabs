import React from "react";
import ChessBoard from "../modules/ChessBoard/chessBoard";
import "./Battle.css";
import NavBar from "../modules/NavBar";

const Battle = () => {
  return (
    <div className="Battle">
      <div className="navBar">{/* <NavBar /> */}</div>
      <div>
        <ChessBoard />
      </div>
    </div>
  );
};

export default Battle;
