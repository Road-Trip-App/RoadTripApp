const { Schema, model } = require("mongoose");

const wayPointsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: false,
  },
  comments: {
    type: String,
    required: false,
  },
});

const WayPoints = model("WayPoints", wayPointsSchema);

module.exports = WayPoints;
