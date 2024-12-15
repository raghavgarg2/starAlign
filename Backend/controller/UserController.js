const User = require("../models/UserModel");

const deleteUserById = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((user) => {
      if (user) {
        res.send("User deleted");
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send("Error");
    });
};

const createUser = (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  User.create(user)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send("Error");
    });
};

const getUserById = (req, res) => {
  const id = req.params.id.toString();
  console.log(id);
  User.findById(id)
    .then((user) => {
      if (user) {
        res.send(user);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send("Error");
    });
};

const getUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).send("Error");
    });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
};
