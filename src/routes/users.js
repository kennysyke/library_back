const router = require("express").Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  borrowBook,
  returnBook,
} = require("../controllers/users");

router.get("/users", getUsers);
router.get("/users/:user_id", getUser);
router.post("/users", createUser);
router.patch("/users/:user_id", updateUser);
router.delete("/users/:user_id", deleteUser);
router.post("/users/:user_id/books/:book_id", borrowBook);
router.delete("/users/:user_id/books/:book_id", returnBook);


module.exports = router;
