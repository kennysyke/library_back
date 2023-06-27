const { response, request } = require("express");
const User = require("../models/user");

const getUsers = (req, res) => {
  User.find({})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
const getUser = (req, res) => {
  const { user_id } = req.params;
  User.findById(user_id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
const createUser = (req, res) => {
  return User.create({ ...req.body })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
const updateUser = (req, res) => {
  const { user_id } = req.params;
  const data = req.body;
  User.findByIdAndUpdate(user_id, data, { new: true, runValidators: true })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
const deleteUser = (req, res) => {
  const { user_id } = req.params;
  User.findByIdAndDelete(user_id)
    .then((user) => {
      res.status(200).send("Done");
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const borrowBook = async (req, res) => {
  const { user_id, book_id } = req.params;
  User.findByIdAndUpdate(
    user_id,
    { $addToSet: { books: book_id } },
    { new: true }
  )
    .then((user) => res.status(200).send(user))
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const returnBook = async (req, res) => {
  const { user_id, book_id } = req.params;
  User.findByIdAndUpdate(user_id, { $pull: { books: book_id } }, { new: true })
    .then((user) => res.status(200).send(user))
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  borrowBook,
  returnBook,
};
