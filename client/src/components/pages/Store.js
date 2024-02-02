import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar";
import StoreButton from "../modules/Buttons/Store-Buttons/StoreButton";
import "./Store.css";
import { post } from "../../utilities";

const Store = (props) => {
  const { userId, loadLevels } = props;
  const [levelpawn, addLevelpawn] = useState(1);
  const [levelqueen, addLevelqueen] = useState(1);
  const [levelking, addLevelking] = useState(1);
  const [levelknight, addLevelknight] = useState(1);
  const [levelrook, addLevelrook] = useState(1);
  const [levelbishop, addLevelbishop] = useState(1);

  useEffect(() => {
    loadLevels();
  }, []);

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

  const hellop = async () => {
    const newLevel = levelpawn + 1;
    addLevelpawn(newLevel);
    updatePoints(10);
    updateLevels();

    alert("Purchased!");
  };
  const helloq = async () => {
    const newLevel = levelqueen + 1;
    addLevelqueen(newLevel);
    updatePoints(10);
    updateLevels({ levelQueen: newLevel });
    alert("Purchased!");
  };

  const hellok = async () => {
    const newLevel = levelking + 1;
    addLevelking(newLevel);
    updatePoints(100);
    updateLevels({ levelKing: newLevel });
    alert("Purchased!");
  };

  const hellon = async () => {
    const newLevel = levelknight + 1;
    addLevelknight(newLevel);
    updatePoints(100);
    updateLevels({ levelKnight: newLevel });

    alert("Purchased!");
  };

  const hellob = async () => {
    const newLevel = levelbishop + 1;
    addLevelbishop(newLevel);
    updatePoints(100);
    updateLevels({ levelBishop: newLevel });
    alert("Purchased!");
  };

  const hellor = async () => {
    const newLevel = levelrook + 1;
    addLevelrook(newLevel);
    updatePoints(100);
    updateLevels({ levelRook: newLevel });
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
