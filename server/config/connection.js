const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/road-trip", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

module.exports = mongoose.connection;
