const express = require("express");
const router = express.Router();

// Import controller functions
const {
  getSubTasks,
  getSubTaskById,
  createSubTask,
  deleteSubTaskById,
} = require("../controller/SubTaskController");

// Define routes
// GET /subtasks - Get all subtasks
router.get("/", getSubTasks);

// GET /subtasks/:id - Get a specific subtask by ID
router.get("/:id", getSubTaskById);

// POST /subtasks - Create a new subtask
router.post("/", createSubTask);

// DELETE /subtasks/:id - Delete a subtask by ID
router.delete("/:id", deleteSubTaskById);

module.exports = router;
