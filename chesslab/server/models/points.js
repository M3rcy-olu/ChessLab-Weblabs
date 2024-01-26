const mongoose = require("mongoose");

const PointSchema = new mongoose.schema({
  google_id: String,
  Points: Number,
});

module.exports = mongoose.model("Points", PointSchema);
