import React, { useState } from "react";
import "./ButtonUI.css";
const ButtonUI = (props) => {
  const hasBorder = props.hasBorder || false;
  let noBorder = "No-Border";
  if (hasBorder == true) {
    noBorder = null;
  }
  return (
    <div className={props.containerClass}>
      <button
        onClick={props.func}
        className={
          props.textClass +
          " " +
          props.rectangleClass +
          " " +
          props.noBorder +
          " " +
          noBorder +
          " " +
          "Default-Button-Rectangle:hover"
        }
      >
        {props.text}
      </button>
    </div>
  );
};

export default ButtonUI;
