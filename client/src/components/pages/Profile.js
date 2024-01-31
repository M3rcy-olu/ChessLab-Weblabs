import React from "react";
import "./Profile.css";
import NavBar from "../modules/NavBar";
import ButtonUI from "../modules/Buttons/ButtonUI";

const Profile = (props) => {
  return (
    <div className="profile">
      <ButtonUI
        ButtonClass="default"
        text="Hello!"
        pos="relative"
        func={null}
        left={0}
        right={0}
        width={100}
      />
    </div>
  );
};

export default Profile;
