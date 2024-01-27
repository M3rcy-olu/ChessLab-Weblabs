import React from "react";
import NavBar from "../modules/NavBar";
import StoreButtons from "../modules/Buttons/Store-Buttons/StoreButtons";
import "./Store.css";

const Store = () => {
  return (
    <div className="store">
      <NavBar />
      <StoreButtons image={require("../../public/images/Chess_plt60.png").default} />
    </div>
  );
};

export default Store;
