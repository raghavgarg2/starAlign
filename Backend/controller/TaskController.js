const Task = require("../models/TaskModel");

const getTasks = (req, res) => {
  Task.find()
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send("Error");
    });
};

const getTaskById = (req, res) => {
  const id = req.params.id;
  Task.findById(id)
    .then((task) => {
      if (task) {
        res.send(task);
      } else {
        res.status(404).send("Task not found");
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send("Error");
    });
};

const createTask = (req, res) => {
  const task = {
    priority: req.body.priority,
    title: req.body.title,
    createdDate: req.body.createdDate,
    comments: req.body.comments,
    description: req.body.description,
    status: req.body.status,
    dueDate: req.body.dueDate,
  };
  Task.create(task)
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send("Error");
    });
};

const deleteTaskById = (req, res) => {
  const id = req.params.id;
  Task.findByIdAndDelete(id)
    .then((task) => {
      if (task) {
        res.send("Task deleted");
      } else {
        res.status(404).send("Task not found");
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send("Error");
    });
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  deleteTaskById,
};
