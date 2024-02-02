import React, { useState } from "react";
import NavBar from "../modules/NavBar";
import StoreButton from "../modules/Buttons/Store-Buttons/StoreButton";
import "./Store.css";
import { post } from "../../utilities";

const Store = (userId) => {
  const [levelpawn, addLevelpawn] = useState(1);
  const [levelqueen, addLevelqueen] = useState(1);
  const [levelking, addLevelking] = useState(1);
  const [levelknight, addLevelknight] = useState(1);
  const [levelrook, addLevelrook] = useState(1);
  const [levelbishop, addLevelbishop] = useState(1);

  const updatePoints = async (points) => {
    points = Number(points);
    try {
      const data = await post("/api/updatePoints", { points: -points });
      if (data.error) {
        alert("Error updating points: " + data.error);
      } else {
        alert("Points updated!");
      }
    } catch (error) {
      console.error("Error updating points:", error);
    }
    console.log("Points updated!");
    console.log(points);
  };

  const updateLevels = async () => {
    try {
      const data = await post("/api/updateLevels", {
        userId: userId,
        levelPawn: levelpawn,
        levelQueen: levelqueen,
        levelKing: levelking,
        levelKnight: levelknight,
        levelRook: levelrook,
        levelBishop: levelbishop,
      });
      if (data.error) {
        console.error("Error updating levels:", data.error);
      } else {
        console.log("Levels updated!");
      }
    } catch (error) {
      console.error("Error updating levels:", error);
    }
  };

  const hellop = () => {
    addLevelpawn(levelpawn + 1);
    updatePoints(10);
    updateLevels({ levelPawn: levelpawn + 1 });

    alert("Purchased!");
  };
  const helloq = () => {
    addLevelqueen(levelqueen + 1);
    updatePoints(10);
    updateLevels({ levelQueen: levelqueen + 1 });
    alert("Purchased!");
  };

  const hellok = () => {
    addLevelking(levelking + 1);
    updatePoints(100);
    updateLevels({ levelKing: levelking + 1 });
    alert("Purchased!");
  };

  const hellon = () => {
    addLevelknight(levelknight + 1);
    updatePoints(100);
    updateLevels({ levelKnight: levelknight + 1 });

    alert("Purchased!");
  };

  const hellob = () => {
    addLevelbishop(levelbishop + 1);
    updatePoints(100);
    updateLevels({ levelBishop: levelbishop + 1 });
    alert("Purchased!");
  };

  const hellor = () => {
    addLevelrook(levelrook + 1);
    updatePoints(100);
    updateLevels({ levelRook: levelrook + 1 });
    alert("Purchased!");
  };
  return (
    <div className="store">
      <NavBar />

      <StoreButton
        updatePoints={updatePoints}
        image={require("../../public/images/Chess_pdt60.png").default}
        func2={hellop}
        text2={"level " + levelpawn}
      />
      <StoreButton
        updatePoints={updatePoints}
        image={require("../../public/images/Chess_qdt60.png").default}
        func2={helloq}
        text2={"level " + levelqueen}
      />
      <StoreButton
        updatePoints={updatePoints}
        image={require("../../public/images/Chess_bdt60.png").default}
        func2={hellob}
        text2={"level " + levelbishop}
      />

      <StoreButton
        updatePoints={updatePoints}
        image={require("../../public/images/Chess_kdt60.png").default}
        func2={hellok}
        text2={"level " + levelking}
      />
      <StoreButton
        updatePoints={updatePoints}
        image={require("../../public/images/Chess_rdt60.png").default}
        func2={hellor}
        text2={"level " + levelrook}
      />

      <StoreButton
        updatePoints={updatePoints}
        image={require("../../public/images/Chess_ndt60.png").default}
        func2={hellon}
        text2={"level " + levelknight}
      />
    </div>
  );
};

export default Store;
