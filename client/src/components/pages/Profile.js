import React from "react";
import "./Profile.css";
import NavBar from "../modules/NavBar";
import ButtonUI from "../modules/Buttons/ButtonUI";

const Profile = (props) => {
  return (
    <div className="profile">
      <ButtonUI
        containerClass="Default-Button-Container"
        textClass="Default-Button-Text"
        rectangleClass="Default-Button-Rectangle"
        text="Hello!"
      />
    </div>
  );
};

export default Profile;
