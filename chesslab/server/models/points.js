const mongoose = require("mongoose");

const PointSchema = new mongoose.schema({
  user: String,
  Points: Number,
});

module.exports = mongoose.model("Points", PointSchema);
