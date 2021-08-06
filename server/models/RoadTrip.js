const { Schema, model } = require("mongoose");

const roadTripSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  waypoints: [
    {
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
    },
  ],
});

const RoadTrip = model("RoadTrip", roadTripSchema);

module.exports = RoadTrip;



