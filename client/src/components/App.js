import React, { useState, useEffect } from "react";
import { Routes, Route, Router } from "react-router-dom";
import NavBar from "./modules/NavBar.js";
import Battle from "./pages/Battle.js";
import "./App.css";
import Store from "./pages/Store.js";
import Profile from "./pages/Profile.js";
import Home from "./pages/Home.js";

import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
        setUserData(user);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      setUserData(user);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    setUserData({});
    post("/api/logout");
  };

  const [winsCount, setWinsCount] = useState(winsCount);
  const addWin = (currentCount) => {
    setWinsCount(currentCount + 1);
  };

  const [lossesCount, setLossesCount] = useState(lossesCount);
  const addLoss = () => {
    setLossesCount(lossesCount + 1);
    alert("It worked!");
  };

  const [playsCount, setplaysCount] = useState(0);
  const addPlay = () => {
    setplaysCount(playsCount + 1);
    alert("It worked!");
    // We need to post this and get the value of the one on the Database
  };

  return (
    <div id="app">
      <Routes>
        <Route
          path="/"
          element={
            <Skeleton
              path="/"
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              userId={userId}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="Battle" element={<Battle />} />
        <Route
          path="Profile"
          element={
            <Profile
              plays={(userData && userData.plays) || 0}
              wins={(userData && userData.wins) || 0}
              losses={(userData && userData.losses) || 0}
              draws={(userData && userData.draws) || 0}
              level={(userData && userData.draws) || 0}
              name={(userData && userData.name) || "Player"}
              pawnLevel={(userData && userData.pawnLevel) || 0}
              bishopLevel={(userData && userData.bishopLevel) || 0}
              knightLevel={(userData && userData.knightLevel) || 0}
              rookLevel={(userData && userData.rookLevel) || 0}
              queenLevel={(userData && userData.queenLevel) || 0}
              profileImage={
                (userData && userData.profileImage) ||
                "https://easydrawingguides.com/wp-content/uploads/2017/04/how-to-draw-goku-featured-image-1200.png"
              }
              func3={addLoss}
            />
          }
        />
        <Route path="Store" element={<Store userId={userId} />} />
      </Routes>
      <NavBar points={(userData && userData.points) || 0} />
    </div>
  );
};

export default App;
