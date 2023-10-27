# NodeJS-Book-Directory-CRUD

Welcome to the Book Directory API! This API allows you to manage a collection of books, including retrieval, creation, updating, and deletion of book records.

## Table of Contents

- [Getting Started](#getting-started)
- [Routes](#routes)
- [Error Handling](#error-handling)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Getting Started

To get started with the Book Directory API, follow these steps:

1. Clone the repository to your local machine.

2. Install the required dependencies: npm install

3. Start the server: nodemom index.js

4. The API is now running on `http://localhost:3000`.

## Routes

The API provides the following routes for managing books:

### Get All Books

- Route: `GET /getAllBooks`
- Description: Retrieve all books in the directory.

### Get Book by ID

- Route: `GET /getBook/:id`
- Description: Retrieve a specific book by its ID.

### Create a New Book

- Route: `POST /createBook`
- Description: Create a new book record.

### Update Book by ID

- Route: `PUT /updateBook/:id`
- Description: Update a specific book by its ID.

### Delete Book by ID

- Route: `DELETE /deleteBook/:id`
- Description: Delete a specific book by its ID.

## Error Handling

The API includes error handling for various scenarios, such as validation errors and not found errors. The error messages and status codes are provided to help identify issues during API usage.

## Screenshots


- [Screenshot 1: Create a New Book](#)
- [Screenshot 2: Retrieve All Books](#)
- [Screenshot 3: Update a Book](#)
- [Screenshot 4: Delete a Book](#)


Thank you for using the Book Directory API!
