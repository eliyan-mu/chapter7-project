var express = require("express");
var router = express.Router();
const mysql = require("mysql");
const { addToTable, deleteFromTable } = require("../public/utils.js");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "z10mz10m",
//   database: "project7database",
// });

router.get("/", function (req, res, next) {
  res.send("entered post route");
});

//add post
// POST request to add a new todo
router.post("/", function (req, res, next) {
  const newPost = req.body;

  // Make sure all required fields are present
  if (!newPost.title || !newPost.user_id || !newPost.body) {
    return res.status(400).send("Missing required fields.");
  }

  const columns = ["title", "user_id", "body"];
  const values = [newPost.title, newPost.user_id, newPost.body];

  addToTable("post", columns, values, res);
});

//delete
router.delete("/:id", function (req, res, next) {
  const deletedId = req.params.id;

  deleteFromTable("post", deletedId, function (err) {
    if (err) {
      return res.status(500).send("Error deleting item");
    }
    res.status(200).send("post deleted successfully");
  });
});
module.exports = router;
