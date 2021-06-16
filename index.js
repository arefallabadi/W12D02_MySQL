const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const db = require('./db');
const book = require('./book');


app.post('/books', book.CreateNewBook);
app.get('/books', book.getAllBook);
app.put('/books:book_id', book.updateBookById);
app.delete('/books:book_id', book.updateBookById);


const PORT = 3000;
app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});


















