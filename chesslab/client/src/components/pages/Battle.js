import React from "react";
import ChessBoard from "../modules/ChessBoard";
import "./Battle.css";
import NavBar from "../modules/NavBar";

const Battle = () => {
  return (
    <div className="Battle">
      <ChessBoard />
      <NavBar />
    </div>
  );
};

export default Battle;
