import React from "react";
import { Link } from "react-router-dom";
import Store from "../../../pages/Store";
import Button1 from "../../Buttons/Button";
import level from "../../Buttons/Button";
import "./StoreButtons.css";

const StoreButtons = (props) => {
  return (
    <div className="Store_Buttons-main">
      <div className="Store_Buttons-Placeholder">
        <img src={props.image} className="Store_Button-Image" />
        <Button1
          containerClass="Store-Button-Container"
          textClass="Store-Button-Text"
          rectangleClass="Store-Button-Rectangle"
          text=""
        />
      </div>
    </div>
  );
};

export default StoreButtons;
