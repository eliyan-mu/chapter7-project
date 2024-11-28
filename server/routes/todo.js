var express = require("express");
var router = express.Router();
const mysql = require("mysql");
const { deleteFromTable } = require("../utilities/delete.js");
const { addToTable } = require("../utilities/add.js");
const con = require("./../con.js");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "z10mz10m",
//   database: "project7database",
// });

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.send("Entered todo route");
// });

//add
// POST request to add a new todo
router.post("/", function (req, res, next) {
  const newTodo = req.body;

  // Make sure all required fields are present
  if (
    !newTodo.title ||
    !newTodo.user_id ||
    typeof newTodo.completed === "undefined"
  ) {
    return res.status(400).send("Missing required fields.");
  }

  const columns = ["title", "user_id", "completed"];
  const values = [newTodo.title, newTodo.user_id, newTodo.completed];

  addToTable("todo", columns, values, res);
});

//delete

router.delete("/:id", function (req, res, next) {
  const deletedId = req.params.id;

  deleteFromTable("todo", deletedId, function (err) {
    if (err) {
      return res.status(500).send("Error deleting item");
    }
    res.status(200).send("Todo deleted successfully");
  });
});

/* GET ALL TODOS. */
router.get(`/:user_id`, function (req, res, next) {
  var sql = `SELECT * FROM todo WHERE user_id = ${Number(req.params.user_id)}`;
  console.log("sql: ", sql);
  return con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("result: ", result);
    return res.status(200).send(result);
  });
});

module.exports = router;
