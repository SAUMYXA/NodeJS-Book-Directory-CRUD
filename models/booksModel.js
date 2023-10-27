const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: String,
  ISBN: String,
  description: String,
  language: String,
  publisher: String,
  pageCount: Number,
  coverImageURL: String,
  available: Boolean,
  reviews: [
    {
      rating: Number,
      comment: String,
      reviewer: String,
    },
  ],
  // You can add more fields as needed.
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
