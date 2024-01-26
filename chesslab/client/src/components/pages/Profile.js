import React from "react";
import "./Profile.css";
import NavBar from "../modules/NavBar";

const Profile = () => {
  return (
    <div className="profile-page">
      {/* <NavBar /> */}
      <div className="profile">
        <div className="level">
          <div className="level2">Level:</div>
          <div className="_9000">9000</div>
        </div>
        <div className="rank">
          <div className="rank2">Rank:</div>
          <div className="_1">#1</div>
        </div>
        <div className="info">
          <img className="image-1" src="image-10.png" />
          <div className="goku-trem-com">goku@trem.com</div>
          <div className="email-address">EMAIL ADDRESS:</div>
          <div className="goku">GOKU</div>
        </div>
        <div className="divider"></div>
        <div className="wallet">
          <div className="current-wallet">Current Wallet:</div>
          <div className="_0-00">$0.00</div>
        </div>
        <div className="stats">
          <div className="numbers">
            <div className="plays">
              <div className="plays2">Plays:</div>
              <div className="_0">0</div>
            </div>
            <div className="wins">
              <div className="wins2">Wins:</div>
              <div className="_02">0</div>
            </div>
            <div className="losses">
              <div className="losses2">Losses:</div>
              <div className="_03">0</div>
            </div>
            <div className="draws">
              <div className="draws2">Draws:</div>
              <div className="_04">0</div>
            </div>
          </div>
          <div className="visuals">
            <div className="visual-stats"></div>
            <div className="wins-and-losses">
              <div className="rectangle-12"></div>
              <div className="rectangle-13"></div>
              <div className="rectangle-14"></div>
              <div className="rectangle-15"></div>
              <div className="rectangle-16"></div>
              <div className="rectangle-17"></div>
            </div>
            <svg
              className="axes"
              width="928"
              height="216"
              viewBox="0 0 928 216"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="-1.52061e-07" y1="215" x2="928" y2="215" stroke="white" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>

      <div className="button3">
        <div className="rectangle-8"></div>
        <div className="button4">Logout</div>
      </div>
      <div className="stats-in-last-30-days">Stats in last 30 Days:</div>
    </div>
  );
};

export default Profile;
