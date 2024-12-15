const express = require("express");
const router = express.Router();

const {
  getTasks,
  getTaskById,
  createTask,
  deleteTaskById,
} = require("../controller/TaskController");

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.delete("/:id", deleteTaskById);

module.exports = router;
