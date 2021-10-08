const express = require("express");
const router = express.Router();

const books = [
  { id: 1, name: "book1" },
  { id: 2, name: "book2" },
  { id: 3, name: "book3" },
];

router.get("/", (req, res) => {
  res.send(books);
});

module.exports = router;