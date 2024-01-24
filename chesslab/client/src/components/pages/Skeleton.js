import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Skeleton.css";
import ChessBoard from "../modules/ChessBoard";
import NavBar from "../modules/NavBar";

const GOOGLE_CLIENT_ID = "354239481317-1dsrl6bn4cc1llfl0npp24k1d0asr9vk.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div
      className="skel"
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
    >
      <NavBar />

      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {userId ? (
          <button
            onClick={() => {
              googleLogout();
              handleLogout();
            }}
          >
            Logout
          </button>
        ) : (
          <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
        )}
      </GoogleOAuthProvider>
    </div>
  );
};

export default Skeleton;
