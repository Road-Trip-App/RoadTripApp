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
      type: Schema.Types.ObjectId,
      ref: "WayPoints",
    },
  ],
});

const RoadTrip = model("RoadTrip", roadTripSchema);

module.exports = RoadTrip;



