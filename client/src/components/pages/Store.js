import React, { useState } from "react";
import NavBar from "../modules/NavBar";
import StoreButton from "../modules/Buttons/Store-Buttons/StoreButton";
import "./Store.css";
import { post } from "../../utilities";

const Store = (userId) => {
  const [levelpawn, addLevelpawn] = useState(1);
  const [levelqueen, addLevelqueen] = useState(1);
  const [levelking, addLevelking] = useState(1);
  const [levelknight, addlevelknight] = useState(1);

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

    alert("Purchased!");
  };
  const helloq = () => {
    addLevel(levelqueen + 1);
    updatePoints(100);
    alert("Purchased!");
  };

  const hellok = () => {
    addLevel(levelking + 1);
    updatePoints(100);
    alert("Purchased!");
  };

  const hellon = () => {
    addLevel(levelking + 1);
    updatePoints(100);
    alert("Purchased!");
  };
  return (
    <div className="store">
      <NavBar />
      <StoreButton
        updatePoints={updatePoints}
        image={require("../../public/images/Chess_plt60.png").default}
        func2={hellop}
        text2={"level " + levelpawn}
      />

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
        image={require("../../public/images/Chess_qlt60.png").default}
        func2={helloq}
        text2={"level " + levelqueen}
      />

      <StoreButton
        updatePoints={updatePoints}
        image={require("../../public/images/Chess_kdt60.png").default}
        func2={helloq}
        text2={"level " + levelking}
      />
      <StoreButton
        updatePoints={updatePoints}
        image={require("../../public/images/Chess_klt60.png").default}
        func2={helloq}
        text2={"level " + levelking}
      />

      <StoreButton
        updatePoints={updatePoints}
        image={require("../../public/images/Chess_ndt60.png").default}
        func2={hellon}
        text2={"level " + levelknight}
      />
      <StoreButton
        updatePoints={updatePoints}
        image={require("../../public/images/Chess_nlt60.png").default}
        func2={hellon}
        text2={"level " + levelknight}
      />
    </div>
  );
};

export default Store;
