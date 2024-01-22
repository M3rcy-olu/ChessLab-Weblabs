import React from "react";
import "./chessBoard.css";
// Define the size of the chessboard

const size = 8;

// Create an empty chessboard array
const chessboard = [];

// Loop through rows
for (let row = 0; row < size; row++) {
  // Create an empty row array
  const rowArray = [];

  // Loop through columns
  for (let col = 0; col < size; col++) {
    // Determine the color of the square
    const color = (row + col) % 2 === 0 ? "white" : "black";

    // Add the square to the row array
    rowArray.push(color);
  }

  // Add the row to the chessboard array
  chessboard.push(rowArray);
}

// Print the chessboard
export default chessboard;
