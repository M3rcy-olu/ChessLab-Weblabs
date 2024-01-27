import React, { useState } from "react";
import "./Button.css";

const Button1 = (props) => {
  const [level, addLevel] = useState(0);
  return (
    <div className={props.containerClass}>
      <div className={props.textClass}>Level {level}</div>
      <div className={props.rectangleClass}></div>
    </div>
  );
};
export default Button1;
