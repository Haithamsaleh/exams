const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String },
  isDel: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  timeStamp: { type: Date, default: new Date() },
});


module.exports =  mongoose.model("Todo", todoSchema);

