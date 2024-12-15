const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    subTask: {
      type: String,
      required: true,
      trim: true,
    },
    AssignedTo: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const SubTask = mongoose.model("SubTask", userSchema);

module.exports = SubTask;
