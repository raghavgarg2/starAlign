const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  filename: String,
  fileUrl: String,
  uploader: String,
  uploadedAt: { type: Date, default: Date.now },
});

const File = mongoose.model("File", FileSchema);

module.exports = File;
