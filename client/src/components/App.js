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
      loadLevels();
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    setUserData({});
    post("/api/logout");
  };

  const loadLevels = async () => {
    try {
      const response = await fetch(`/api/user/${userId}`);
      const data = await response.json();
      if (data.error) {
        console.error("Error loading levels:", data.error);
      } else {
        // Assuming you have a function to set each level
        addLevelpawn(data.levelPawn);
        addLevelqueen(data.levelQueen);
        addLevelking(data.levelKing);
        addLevelknight(data.levelKnight);
        addLevelrook(data.levelRook);
        addLevelbishop(data.levelBishop);

        console.log("Levels loaded!");
      }
    } catch (error) {
      console.error("Error loading levels:", error);
    }
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
        <Route path="Battle" element={<Battle userData={userData} />} />
        <Route path="Profile" element={<Profile userData={userData} />} />
        <Route path="Store" element={<Store userId={userId} />} />
      </Routes>
      <NavBar points={(userData && userData.points) || 0} />
    </div>
  );
};

export default App;
