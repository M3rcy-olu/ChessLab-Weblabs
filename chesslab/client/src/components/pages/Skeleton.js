import React, {useState} from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "../../utilities.css";
import "./Skeleton.css";
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

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const navigate = useNavigate();

  const onButtonClick = () => {

  }

 

  return <div className={"mainContainer"}>
    <div className={"titleContainer"}>
      <div>Login</div>
    </div>
    <br />
    <div className={"inputContainer"} >
      <input
          value ={email}
          placeholder = "Enter your email here"
          onChange = {ev => setEmail(ev.target.value)}
          className={"inputBox"}/>
      <label className="errorLabel">{emailError}</label>

    </div>
    <br />
    <div className={"inputContainer"}>
      <input
          value={password}
          placeholder="Enter your password here"
          onChange={ev => setPassword(ev.target.value)}
          className={"inputBox"} />
      <label className="errorLabel">{passwordError}</label>
    </div>
    <br />
    <div className={"inputContainer"}>
      <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"} />
    </div>

  </div>
};

// export default Skeleton;
export default Login;
