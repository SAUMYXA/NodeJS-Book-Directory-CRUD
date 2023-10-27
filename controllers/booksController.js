const asyncHandler = require("express-async-handler");
const Book = require("../models/booksModel");
const { constants } = require("../constants.js");

const getBooks = asyncHandler(async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
});

const getBook = asyncHandler(async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(constants.NOT_FOUND);
      throw new Error("Book not found!");
    }
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
});

const createBook = asyncHandler(async (req, res, next) => {
  try {
    const {
      title,
      author,
      year,
      genre,
      ISBN,
      description,
      language,
      publisher,
      pageCount,
      coverImageURL,
      available,
      reviews,
    } = req.body;

    if (!title || !author || !year) {
      res.status(constants.VALIDATION_FAILED);
      throw new Error("Title, author, and year are required fields.");
    }

    const book = await Book.create({
      title,
      author,
      year,
      genre,
      ISBN,
      description,
      language,
      publisher,
      pageCount,
      coverImageURL,
      available,
      reviews,
    });
    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
});

const updateBook = asyncHandler(async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(constants.NOT_FOUND);
      throw new Error("Book not found!");
    }

    // You can update the book fields based on your requirements
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedBook);
  } catch (err) {
    next(err);
  }
});

const deleteBook = asyncHandler(async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(constants.NOT_FOUND);
      throw new Error("Book not found!");
    }
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: `Book has been deleted for ID ${req.params.id}` });
  } catch (err) {
    next(err);
  }
});

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
