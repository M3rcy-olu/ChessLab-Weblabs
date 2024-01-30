import React from "react";
import { Link } from "react-router-dom";
import Store from "../../../pages/Store";
import ButtonUI from "../../Buttons/ButtonUI";
import "./StoreButton.css";

const StoreButton = (props) => {
  return (
    <div className="Store_Buttons-main">
      <div className="Store_Buttons-Placeholder">
        <img src={props.image} className="Store_Button-Image" />
        <ButtonUI
          containerClass="Store-Button-Container"
          textClass="Store-Button-Text"
          rectangleClass="Store-Button-Rectangle"
          func={props.func2}
          text={props.text2}
        />
      </div>
    </div>
  );
};

export default StoreButton;
