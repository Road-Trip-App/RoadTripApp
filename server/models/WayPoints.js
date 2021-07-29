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
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
    },
  ],
});

const WayPoints = model("WayPoints", wayPointsSchema);

module.exports = WayPoints;
