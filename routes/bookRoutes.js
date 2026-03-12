const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

// Add book
router.post("/", bookController.addBook);

// Get all books
router.get("/", bookController.getBooks);

// Search books by title
router.get("/search", bookController.searchBooks);

// Get book by ID
router.get("/:id", bookController.getBookById);

// Update book
router.put("/:id", bookController.updateBook);

// Delete book
router.delete("/:id", bookController.deleteBook);

module.exports = router;