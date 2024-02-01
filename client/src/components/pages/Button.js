import React from "react";
import { post } from "../../utilities.js";

function Button() {
  const pointsToChange = 10; // replace with the number of points you want to change

  const handleClick = async () => {
    try {
      const data = await post("/api/updatePoints", { points: pointsToChange });
      if (data.error) {
        alert("Error updating points: " + data.error);
      } else {
        alert("Points updated!");
      }
    } catch (error) {
      console.error("Error updating points:", error);
    }
  };

  return <button onClick={handleClick}>Change Points</button>;
}

export default Button;
