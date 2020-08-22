var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose.connection);

var schema = new Schema(
  {
    content: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "category" },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

schema.plugin(autoIncrement.plugin, {
  model: "confession",
  startAt: 1,
});

module.exports = mongoose.model("confession", schema);
