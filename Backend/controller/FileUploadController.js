const File = require("../models/FileUploadModel");

const uploadFile = async (req, res) => {
  // Check if the file was uploaded
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Construct the URL to access the uploaded file
  const fileUrl = `/uploads/${req.file.filename}`;
  const newFile = new File({
    filename: req.file.originalname,
    fileUrl,
    uploader: req.body.uploader || "Anonymous", // Default uploader name if not provided
  });

  try {
    // Save the file information in the database
    await newFile.save();
    res.status(200).json({ message: "File uploaded successfully", fileUrl });
  } catch (error) {
    // Handle any errors that occur during the save operation
    res.status(500).json({ message: "Error saving file to database", error });
  }
};

module.exports = { uploadFile };
