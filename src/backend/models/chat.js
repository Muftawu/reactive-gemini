const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  query: String,
  response: String,
  date: { type: Date, default: Date.now },
});


module.exports = mongoose.model("Chat", ChatSchema);
