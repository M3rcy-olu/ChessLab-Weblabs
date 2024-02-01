import React, { useState } from "react";
import NavBar from "../modules/NavBar";
import StoreButton from "../modules/Buttons/Store-Buttons/StoreButton";
import "./Store.css";
import { post } from "../../utilities";

const Store = () => {
  const [levelpawn, addLevelpawn] = useState(0);
  const [levelqueen, addLevelqueen] = useState(0);
  const [levelking, addLevelking] = useState(0);
  const [levelknight, addlevelknight] = useState(0);

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
