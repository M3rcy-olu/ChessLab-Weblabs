import React, { useState } from "react";
import "./ButtonUI.css";
const ButtonUI = (props) => {
  let noBorder = "No-Border";
  let textClass = "Default-Button-Text";
  let rectangleClass = "Default-Button-Rectangle";
  let containerClass = "Default-Button-Container";

  const hasBorder = props.hasBorder || false;
  if (hasBorder == true) {
    noBorder = null;
  }

  const ButtonClass = props.ButtonClass || "default";
  if (ButtonClass == "store") {
    textClass = "Store-Button-Text";
    rectangleClass = "Store-Button-Rectangle";
    containerClass = "Store-Button-Container";
  }

  const pos = props.pos || "relative";

  return (
    <div className={props.containerClass}>
      <button
        onClick={props.func}
        style={{
          left: props.left + "%",
          right: props.right + "%",
          width: props.width + "%",
          textAlign: props.textAlign,
          color: props.textColor,
          position: props.pos,
        }}
        className={
          textClass +
          " " +
          rectangleClass +
          " " +
          containerClass +
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
