const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const UserRoutes = require("./routes/UserRoutes");
const TaskRoutes = require("./routes/TaskRoutes");
const FileUploadRoutes = require("./routes/FileUploadRoutes");
const AuthRoutes = require("./routes/AuthenticationRoute");
const SubTaskRoutes = require("./routes/SubTaskRoutes");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 7001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Failed to connect to the database", err);
  });

app.use(cookieParser());
function checkUser(req, res, next) {
  const token = req.cookies.authenticationToken;
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET || "SSClassSecret",
      (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          console.log("JWT verification failed:", err); // Logging error for debugging
          return res.status(401).send("Unauthorized: Invalid token"); // Send unauthorized status
        } else {
          res.locals.user = decodedToken;
          next(); // Proceed only after verification
        }
      }
    );
  } else {
    res.locals.user = null;
    next();
  }
}

app.use(checkUser);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Auth Routes
app.use("/auth", AuthRoutes);

// User Routes
app.use("/users", UserRoutes);

// Task Routes
app.use("/tasks", TaskRoutes);

// SubTask Routes
app.use("/subtasks", SubTaskRoutes);

// File Upload Routes
app.use("/uploads", express.static("uploads"), FileUploadRoutes);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
