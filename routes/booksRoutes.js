const express = require('express');
const router = express.Router();
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/booksController');
// const { validateToken } = require('../middleware/validateTokenHandler');

// router.use(validateToken);

router
  .route('/')
  .get(getBooks)
  .post(createBook);

router
  .route('/:id')
  .get(getBook)
  .put(updateBook)
  .delete(deleteBook);

module.exports = router;
