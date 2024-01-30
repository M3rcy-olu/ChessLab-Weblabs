import React, { useState } from "react";
import "./Button.css";

const Button1 = (props) => {
  return (
    <div className={props.containerClass}>
      <div className={props.textClass}>{props.text}</div>
      <button onClick={props.func} className={props.rectangleClass}></button>
    </div>
  );
};
export default Button1;
