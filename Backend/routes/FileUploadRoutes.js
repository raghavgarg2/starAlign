const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filenames
  },
});

const upload = multer({ storage: storage });

const { uploadFile } = require("../controller/FileUploadController");

// Apply multer middleware to handle file uploads
router.post("/", upload.single("file"), uploadFile);

module.exports = router;
