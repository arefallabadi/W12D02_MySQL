const db = require("./db");

const CreateNewBook = (req, res) => {
  const query = `INSERT INTO books SET ?`;
  let title,
    author,
    published_ar,
    price = req.body;
  db.query(query, { title, author, published_ar, price }, (err, res) => {
    if (err) throw err;
    console.log("success");
    console.log(res);
  });
};

const getAllBook = () => {
  const query = `SELECT * FROM books`;
  db.query(query, (err, res) => {
    if (err) throw err;
    console.log("success");
    console.log(res);
  });
};


const updateBookById = (req, res) => {
  const query = `UPDATE books set ? where title=${title}`;
  let { title, author, published_ar, price } = req.body;
  db.query(query, { title, author, published_ar, price }, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};

const deleteBookById = (req, res) => {
  const query = `DELETE from books where title=${title}`;
  db.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};

const orderBook = () => {
  const query = `select * form books ORDER BY title DESC`;
  db.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};

const nullPrice = () => {
  const query = `SELECT * FROM books WHERE price IS NULL `;
  db.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};

const havePrice = () => {
  const query = `SELECT * FROM books WHERE price IS NOT NULL `;
  db.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};

module.exports = {
    CreateNewBook,
  getAllBook,
  deleteBookById,
  updateBookById,
  orderBook,
  nullPrice,
  havePrice
};
