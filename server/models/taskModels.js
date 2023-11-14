let mongoose = require("mongoose");
let taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a Task"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Task = mongoose.model("task", taskSchema);
