var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
});

module.exports = mongoose.model("category", schema);
