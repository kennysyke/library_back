const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
  },
  username: {
    type: String,
    required: true,
    minlength: 2,
  },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "books" }],
});

module.exports = mongoose.model("user", userSchema);
