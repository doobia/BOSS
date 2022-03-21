const mongoose = require("mongoose");

let TaskSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    task_date: {
      type: String,
      required: true,
    },
    task_desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserTask", TaskSchema);