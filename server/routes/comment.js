var express = require("express");
var router = express.Router();
const mysql = require("mysql");
const { addToTable, deleteFromTable } = require("../public/utils.js");

router.get("/", function (req, res, next) {
  res.send("entered comment route");
});

/* GET ALL comments. */
router.get(`/:user_id`, function (req, res, next) {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  var sql = `SELECT * FROM comment WHERE user_id = ${Number(
    req.params.user_id
  )}`;
  return con.query(sql, function (err, result) {
    if (err) throw err;

    return res.status(200).send(result);
  });
});

module.exports = router;
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("entered user route");
});

//add comments
// POST request to add a new todo
router.post("/", function (req, res, next) {
  const newComment = req.body;

  // Make sure all required fields are present
  if (!newComment.post_id || !newComment.name || !newComment.body) {
    return res.status(400).send("Missing required fields.");
  }

  const columns = ["post_id", "name", "body"];
  const values = [newComment.post_id, newComment.name, newComment.body];

  addToTable("comment", columns, values, res);
});

//delete
router.delete("/:id", function (req, res, next) {
  const deletedId = req.params.id;

  deleteFromTable("comment", deletedId, function (err) {
    if (err) {
      return res.status(500).send("Error deleting item");
    }
    res.status(200).send("comment deleted successfully");
  });
});
module.exports = router;
