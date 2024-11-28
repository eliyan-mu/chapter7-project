var express = require("express");
var router = express.Router();
const mysql = require("mysql");
const { addToTable, deleteFromTable } = require("../public/utils.js");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "project7database",
});

// GET all posts for a specific user
router.get("/:user_id", function (req, res, next) {
  const userId = req.params.user_id;
  var sql = `SELECT * FROM post WHERE user_id = ${mysql.escape(userId)}`;
  con.query(sql, function (err, result) {
    if (err) {
      return res.status(500).send("Error fetching posts");
    }
    res.status(200).send(result);
  });
});

// POST request to add a new post
router.post("/", function (req, res, next) {
  const newPost = req.body;

  if (!newPost.title || !newPost.user_id || !newPost.body) {
    return res.status(400).send("Missing required fields.");
  }

  const columns = ["title", "user_id", "body"];
  const values = [newPost.title, newPost.user_id, newPost.body];

  addToTable("post", columns, values, res);
});

// DELETE a post by ID
router.delete("/:id", function (req, res, next) {
  const postId = req.params.id;

  deleteFromTable("post", postId, function (err) {
    if (err) {
      return res.status(500).send("Error deleting post");
    }
    res.status(200).send("Post deleted successfully");
  });
});

module.exports = router;
