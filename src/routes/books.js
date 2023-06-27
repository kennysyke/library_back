const router = require("express").Router();

const {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

router.get("/books", getAllBooks);
router.get("/books/:book_id", getBook);
router.post("/books", createBook);
router.patch("/books/:book_id", updateBook);
router.delete("/books/:book_id", deleteBook);

module.exports = router;
