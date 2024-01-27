class Referee {
  isValideMove(px, py, x, y, type) {
    console.log("Referee is checking for valid move...");
    console.log(`previous location ${px}, ${py}`);
    console.log(`current location: ${x}. ${y}`);
    console.log(type);
    return true;
  }
}

export default Referee;
