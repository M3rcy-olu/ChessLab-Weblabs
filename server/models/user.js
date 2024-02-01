const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  points: Number,
  level: Number,
  plays: Number,
  wins: Number,
  losses: Number,
  draws: Number,
  levelPawn: { type: Number, default: 1 },
  levelQueen: { type: Number, default: 1 },
  levelKing: { type: Number, default: 1 },
  levelKnight: { type: Number, default: 1 },
});

UserSchema.methods.updatePoints = function (points) {
  this.points += points;
  return this.save();
};
module.exports = mongoose.model("user", UserSchema);
