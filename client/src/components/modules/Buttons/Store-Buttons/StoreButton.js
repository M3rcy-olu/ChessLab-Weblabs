import React from "react";
import { Link } from "react-router-dom";
import Store from "../../../pages/Store";
import ButtonUI from "../../Buttons/ButtonUI";
import "./StoreButton.css";

const StoreButton = (props) => {
  return (
    <div className="Store_Buttons-Placeholder">
      <img src={props.image} className="Store_Button-Image" />
      <ButtonUI ButtonClass="store" clickable={false} hasBorder={true}></ButtonUI>
      <ButtonUI func={props.func2} text={props.text2} left={19} right={19} hasBorder={true} />
    </div>
  );
};

export default StoreButton;
