import React from "react";
import "./Profile.css";
import NavBar from "../modules/NavBar";
import ButtonUI from "../modules/Buttons/ButtonUI";
import PlayerStats from "../modules/PlayerStats";

const Profile = (props) => {
  return (
    <div className="profile">
      <NavBar />
      {/* <ButtonUI
        ButtonClass="default"
        text="Hello!"
        pos="relative"
        func={null}
        left={0}
        right={0}
        width={100}
      /> */}
      <div className="profile-info">
        <div className="profile-stats">
          <div className="profile-container">
            <PlayerStats
              playerKey={"Plays:"}
              playerValue={props.plays}
              keyColor="#ffffff"
              valueColor="#ffffff"
            />

            <PlayerStats
              playerKey={"Wins:"}
              playerValue={props.wins}
              keyColor="#ffffff"
              valueColor="#00ff38"
            />

            <PlayerStats
              playerKey={"Losses:"}
              playerValue={props.losses}
              keyColor="#ffffff"
              valueColor="#ff5858"
            />

            <PlayerStats
              playerKey={"Draws:"}
              playerValue={props.draws}
              keyColor="#ffffff"
              valueColor=" #898989"
            />
            <PlayerStats
              playerKey={"Levels:"}
              keyColor="#ffffff"
              valueColor=" #898989"
              statPos="absolute"
              statTop={295}
            />
            <div className="PieceLevels">
              <PlayerStats
                playerKey={"Pawn:"}
                font={15}
                playerValue={props.pawnLevel}
                keyColor="#898989"
                valueColor=" #898989"
              />
              <PlayerStats
                playerKey={"Bishop:"}
                font={15}
                playerValue={props.bishopLevel}
                keyColor="#898989"
                valueColor=" #898989"
              />
              <PlayerStats
                playerKey={"Knight:"}
                font={15}
                playerValue={props.knightLevel}
                keyColor="#898989"
                valueColor=" #898989"
              />
              <PlayerStats
                playerKey={"Rook:"}
                font={15}
                playerValue={props.rookLevel}
                keyColor="#898989"
                valueColor=" #898989"
              />
              <PlayerStats
                playerKey={"Queen:"}
                font={15}
                playerValue={props.queenLevel}
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
              playerValue={props.name}
              keyColor="#ffffff"
              valueColor="#ffffff"
            />

            <PlayerStats
              className="profile-rank"
              playerKey={"Level:"}
              playerValue={props.level}
              keyColor="#ffffff"
              valueColor="#ffffff"
            />
            <PlayerStats
              className="profile-WinLoss"
              playerKey={"W/N Ratio:"}
              playerValue={props.wins / props.losses}
              keyColor="#ffffff"
              valueColor="#ffffff"
            />
          </div>
          <img
            className="profile-image"
            src={
              "https://easydrawingguides.com/wp-content/uploads/2017/04/how-to-draw-goku-featured-image-1200.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
