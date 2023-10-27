const express = require('express');
const router = express.Router();
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/booksController');

// Route to retrieve all books
router.get('/getAllBooks', getBooks);

// Route to retrieve a specific book by ID
router.get('/getBook/:id', getBook);

// Route to create a new book
router.post('/createBook', createBook);

// Route to update a specific book by ID
router.put('/updateBook/:id', updateBook);

// Route to delete a specific book by ID
router.delete('/deleteBook/:id', deleteBook);

module.exports = router;
