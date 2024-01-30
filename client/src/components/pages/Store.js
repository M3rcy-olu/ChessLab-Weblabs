import React, { useState } from "react";
import NavBar from "../modules/NavBar";
import StoreButtons from "../modules/Buttons/Store-Buttons/StoreButtons";
import "./Store.css";

const Store = () => {
  const [level, addLevel] = useState(0);
  const hello = () => {
    addLevel(level + 1);
    alert("Purchased!");
  };
  return (
    <div className="store">
      <NavBar />
      <StoreButtons
        image={require("../../public/images/Chess_plt60.png").default}
        func2={hello}
        text2={"level " + level}
      />
    </div>
  );
};

export default Store;
