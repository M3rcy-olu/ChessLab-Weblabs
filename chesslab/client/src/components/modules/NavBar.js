import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar-Container">
      <div className="NavBar-title">Chess Capital | Chess with Capitalism</div>
      <div className="NavBar-linkContainer">
        <Link to="/" className="NavBar-link-home">
          Home
        </Link>

        <Link to="/Profile" className="NavBar-link">
          Profile
        </Link>

        <Link to="/Battle" className="NavBar-link">
          Battle
        </Link>

        <Link to="/Store" className="NavBar-link">
          Store
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
