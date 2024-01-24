import React from "react";
import NavBar from "../modules/NavBar";
import "./Store.css";

const Store = () => {
  return (
    <div className="store">
      <NavBar />
      <div className="pawn-purchase">
        <div className="pawn-level">
          <div className="rectangle-8"></div>
          <div className="button3">Level 1</div>
        </div>
        <div className="pawn">
          <div className="button4">
            <div className="rectangle-8"></div>
          </div>
          <img className="pawn2" src="pawn1.png" />
          <div className="upgrade">Upgrade</div>
        </div>
      </div>
      <div className="bishop-purchase">
        <div className="bishop-level">
          <div className="rectangle-8"></div>
          <div className="button3">Level 1</div>
        </div>
        <div className="bishop">
          <div className="button5">
            <div className="rectangle-8"></div>
          </div>
          <img className="bishop2" src="bishop1.png" />
          <div className="upgrade2">Upgrade</div>
        </div>
      </div>
      <div className="knight-pruchase">
        <div className="knight-level">
          <div className="rectangle-8"></div>
          <div className="button3">Level 1</div>
        </div>
        <div className="knight">
          <div className="button6">
            <div className="rectangle-8"></div>
          </div>
          <img className="knight2" src="knight1.png" />
          <div className="upgrade3">Upgrade</div>
        </div>
      </div>
      <div className="rook-purchase">
        <div className="rook-level">
          <div className="rectangle-8"></div>
          <div className="button3">Level 1</div>
        </div>
        <div className="rook">
          <div className="button7">
            <div className="rectangle-8"></div>
          </div>
          <img className="rook2" src="rook1.png" />
          <div className="upgrade4">Upgrade</div>
        </div>
      </div>
      <div className="queen-purchase">
        <div className="queen-level">
          <div className="rectangle-8"></div>
          <div className="button3">Level 1</div>
        </div>
        <div className="queen">
          <div className="button8">
            <div className="rectangle-8"></div>
          </div>
          <img className="queen2" src="queen1.png" />
          <div className="upgrade5">Upgrade</div>
        </div>
      </div>
      <div className="king-purchase">
        <div className="king-level">
          <div className="rectangle-8"></div>
          <div className="button3">Level 1</div>
        </div>
        <div className="king">
          <div className="button9">
            <div className="rectangle-8"></div>
          </div>
          <img className="king2" src="king1.png" />
          <div className="upgrade6">Upgrade</div>
        </div>
      </div>
      <div className="wallet">
        <div className="current-wallet">Current Wallet:</div>
        <div className="_0-00">$0.00</div>
      </div>
    </div>
  );
};

export default Store;
