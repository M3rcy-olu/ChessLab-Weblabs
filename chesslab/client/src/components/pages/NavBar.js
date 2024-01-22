import React from "react";

import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">Catbook</div>
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
          Home
        </Link>
        {props.userId && (
          <Link to={`/profile/${props.userId}`} className="NavBar-link">
            Profile
          </Link>
        )}
        <Link to="/Battle/" className="NavBar-link">
          Battle
        </Link>

        <Link to="/Store/" className="NavBar-link">
          Store
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
