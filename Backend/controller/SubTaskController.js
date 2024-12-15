const SubTask = require("../models/SubTaskModel");

// Get all subtasks
const getSubTasks = (req, res) => {
  SubTask.find()
    .then((subtasks) => {
      res.status(200).send(subtasks);
    })
    .catch((err) => {
      console.error("Error fetching subtasks: ", err);
      res.status(500).send("Internal Server Error");
    });
};

// Get a specific subtask by ID
const getSubTaskById = (req, res) => {
  const id = req.params.id;
  SubTask.findById(id)
    .then((subtask) => {
      if (subtask) {
        res.status(200).send(subtask);
      } else {
        res.status(404).send("Subtask not found");
      }
    })
    .catch((err) => {
      console.error("Error fetching subtask: ", err);
      res.status(500).send("Internal Server Error");
    });
};

// Create a new subtask
const createSubTask = (req, res) => {
  const subTask = {
    subTask: req.body.subTask,
    AssignedTo: req.body.AssignedTo,
  };
  SubTask.create(subTask)
    .then((newSubTask) => {
      res.status(201).send(newSubTask);
    })
    .catch((err) => {
      console.error("Error creating subtask: ", err);
      res.status(500).send("Internal Server Error");
    });
};

// Delete a subtask by ID
const deleteSubTaskById = (req, res) => {
  const id = req.params.id;
  SubTask.findByIdAndDelete(id)
    .then((subtask) => {
      if (subtask) {
        res.status(200).send("Subtask deleted");
      } else {
        res.status(404).send("Subtask not found");
      }
    })
    .catch((err) => {
      console.error("Error deleting subtask: ", err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  getSubTasks,
  getSubTaskById,
  createSubTask,
  deleteSubTaskById,
};
