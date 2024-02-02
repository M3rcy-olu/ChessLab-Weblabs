import React, { useState, useEffect } from "react";
import "./Profile.css";
import NavBar from "../modules/NavBar";
import ButtonUI from "../modules/Buttons/ButtonUI";
import PlayerStats from "../modules/PlayerStats";
import { post, get } from "../../utilities";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    get("/api/user")
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <NavBar />
      {/* <ButtonUI
        ButtonClass="default"
        text="Hello!"
        pos="absolute"
        func={props.func3}
        left={0}
        right={0}
        width={100}
        clickable={true}
      /> */}
      <div className="profile-info">
        <div className="profile-stats">
          <div className="profile-container">
            <PlayerStats
              playerKey={"Plays:"}
              playerValue={userData.plays}
              keyColor="#ffffff"
              valueColor="#ffffff"
            />

            <PlayerStats
              playerKey={"Wins:"}
              playerValue={userData.wins}
              keyColor="#ffffff"
              valueColor="#00ff38"
            />

            <PlayerStats
              playerKey={"Losses:"}
              playerValue={userData.losses}
              keyColor="#ffffff"
              valueColor="#ff5858"
            />

            <PlayerStats
              playerKey={"Draws:"}
              playerValue={userData.draws}
              keyColor="#ffffff"
              valueColor=" #898989"
            />
            <PlayerStats
              playerKey={"Levels:"}
              keyColor="#ffffff"
              valueColor=" #898989"
              statPos="absolute"
              statTop={375}
            />
            <div className="PieceLevels">
              <PlayerStats
                playerKey={"Pawn:"}
                font={15}
                playerValue={userData.levelPawn}
                keyColor="#898989"
                valueColor=" #898989"
              />
              <PlayerStats
                playerKey={"Bishop:"}
                font={15}
                playerValue={userData.levelBishop}
                keyColor="#898989"
                valueColor=" #898989"
              />
              <PlayerStats
                playerKey={"Knight:"}
                font={15}
                playerValue={userData.levelKnight}
                keyColor="#898989"
                valueColor=" #898989"
              />
              <PlayerStats
                playerKey={"Rook:"}
                font={15}
                playerValue={userData.levelRook}
                keyColor="#898989"
                valueColor=" #898989"
              />
              <PlayerStats
                playerKey={"Queen:"}
                font={15}
                playerValue={userData.levelQueen}
                keyColor="#898989"
                valueColor=" #898989"
              />
            </div>
          </div>
        </div>
        <div className="profile-userinfo">
          <div className="profile-userinfo-text">
            <PlayerStats
              font={100}
              playerValue={userData.name}
              keyColor="#ffffff"
              valueColor="#ffffff"
            />

            <PlayerStats
              className="profile-rank"
              playerKey={"Level:"}
              playerValue={userData.level}
              keyColor="#ffffff"
              valueColor="#ffffff"
            />
            <PlayerStats
              className="profile-WinLoss"
              playerKey={"W/N Ratio:"}
              playerValue={userData.wins / userData.losses}
              keyColor="#ffffff"
              valueColor="#ffffff"
            />
          </div>
          <img className="profile-image" src={userData.profileImage} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
