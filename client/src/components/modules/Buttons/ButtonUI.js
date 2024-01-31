import React, { useState } from "react";
import "./ButtonUI.css";
const ButtonUI = (props) => {
  let noBorder = "No-Border";
  let textClass = "Default-Button-Text";
  let rectangleClass = "Default-Button-Rectangle";
  let containerClass = "Default-Button-Container";
  const clickable = props.clickable;

  const hasBorder = props.hasBorder || false;
  if (hasBorder == true) {
    noBorder = null;
  }

  const ButtonClass = props.ButtonClass || "default";
  if (ButtonClass == "store" && clickable == true) {
    textClass = "Store-Button-Text";
    containerClass = "Store-Button-Container";
    rectangleClass = "Store-Button-Rectangle";
  } else if (ButtonClass == "store" && clickable == false) {
    textClass = "Store-Button-Text";
    containerClass = "Store-Button-Container";
    rectangleClass = "Store-Button-Rectangle-NoHover";
  } else if (ButtonClass == "default" && clickable == false) {
    textClass = "Default-Button-Text";
    rectangleClass = "Default-Button-Rectangle-NoHover";
    containerClass = "Default-Button-Container";
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
          top: props.top + "%",
          textAlign: props.textAlign,
          color: props.textColor,
          position: props.pos,
          background: props.img,
        }}
        className={textClass + " " + rectangleClass + " " + containerClass + " " + noBorder}
      >
        {props.text}
      </button>
    </div>
  );
};

export default ButtonUI;
