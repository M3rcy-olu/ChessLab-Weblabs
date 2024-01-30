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

// compile model from schema
module.exports = mongoose.model("user", UserSchema);

UserSchema.methods.updatePoints = function (points) {
  this.points += points;
  return this.save();
};
