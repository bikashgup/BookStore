const express = require("express");
const router = express.Router();

let books = require('../controllers/books');




router.get('/', books.list_all_books);
  
router .get('/book-list', books.list_all_books);
router.post('/book-update', books.update_a_book);

module.exports = router;