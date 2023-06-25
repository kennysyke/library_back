const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  author: {
    type: String,
    required: true,
    minlength: 2,
  },
  publisher: {
    type: String,
    required: true,
    minlength: 2,
  },
});

module.exports = mongoose.model("book", bookSchema);
