import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const points = props.points;
  return (
    <nav className="NavBar-Container">
      <div className="NavBar-Title">Chess Capital | Chess with Capitalism</div>

      <div className="NavBar-linkContainer">
        <Link to="/" className="NavBar-Link-Home">
          <div className="Small-Button">Home</div>
          <div className="Small-Rectangle"></div>
        </Link>

        <Link to="/Profile" className="NavBar-Link-Profile">
          <div className="Small-Button">Profile</div>
          <div className="Small-Rectangle"></div>
        </Link>

        <Link to="/Battle" className="NavBar-Link-Battle">
          <div className="Large-Button">Battle</div>
          <div className="Large-Rectangle"></div>
        </Link>

        <Link to="/Store" className="NavBar-Link-Store">
          <div className="Large-Button">Store</div>
          <div className="Large-Rectangle"></div>
        </Link>
        <Link to="/Store" className="NavBar-Link-Money">
          <div className="Large-Button-Money">{points}</div>
          <div className="Large-Rectangle"></div>
        </Link>
      </div>
      <div className="NavBar-Gradient"></div>
    </nav>
  );
};

export default NavBar;
