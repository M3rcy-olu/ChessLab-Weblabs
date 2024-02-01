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
});

UserSchema.methods.updatePoints = function (points) {
  this.points += points;
  return this.save();
};
module.exports = mongoose.model("user", UserSchema);
