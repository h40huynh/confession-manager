const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/confession", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", function () {
  console.log("connection fail");
});
mongoose.connection.once("open", function () {
  console.log("Connect to mongdb successfully");
});
