const Book = require("../models/Book");


// Add Book
const addBook = async (req, res) => {
  try {

    const book = new Book(req.body);
    const savedBook = await book.save();

    res.status(201).json(savedBook);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};



// Get All Books
const getBooks = async (req, res) => {
  try {

    const books = await Book.find();

    res.status(200).json(books);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};



// Get Book by ID
const getBookById = async (req, res) => {
  try {

    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};



// Update Book
const updateBook = async (req, res) => {
  try {

    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};



// Delete Book
const deleteBook = async (req, res) => {
  try {

    await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Book deleted" });

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};



// Search Book
const searchBooks = async (req, res) => {
  try {

    const title = req.query.title;

    const books = await Book.find({
      title: { $regex: title, $options: "i" }
    });

    res.status(200).json(books);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};



module.exports = {
  addBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  searchBooks
};