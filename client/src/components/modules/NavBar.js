import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "./Buttons/ButtonUI";
import ButtonUI from "./Buttons/ButtonUI";

const NavBar = (props) => {
  const points = props.points;
  return (
    <nav className="NavBar-Container">
      <div className="NavBar-Title">Chess Capital | Chess with Capitalism</div>

      <div className="NavBar-linkContainer">
        <Link to="/" className="NavBar-Link-Home">
          <ButtonUI text="Home" width={80} />
        </Link>

        <Link to="/Profile" className="NavBar-Link-Profile">
          <ButtonUI text="Profile" width={65} />
        </Link>

        <Link to="/Battle" className="NavBar-Link-Battle">
          <ButtonUI text="Battle" width={50} />
        </Link>

        <Link to="/Store" className="NavBar-Link-Store">
          <ButtonUI text="Store" width={40} />
        </Link>
        <Link to="/Store" className="NavBar-Link-Money">
          <ButtonUI text={"$" + points} width={70} textAlign="right" textColor="#00ff38" />
        </Link>
      </div>
      <div className="NavBar-Gradient"></div>
    </nav>
  );
};

export default NavBar;
