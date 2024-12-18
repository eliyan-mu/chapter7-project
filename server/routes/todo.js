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
router.post("/", async function (req, res, next) {
  const newTodo = req.body;
  console.log("req.body: ", req.body);

  const columns = ["title", "user_id", "completed"];
  const values = [newTodo.title, newTodo.userId, newTodo.completed];

  addToTable("todo", columns, values, res);
});

//delete
router.delete("/:id", function (req, res, next) {
  const deletedId = req.params.id;

  deleteFromTable("todo", deletedId, res);
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

//rename pust
router.put("/:id", function (req, res, next) {
  const { id } = req.params;
  const { title } = req.body;

  const sql = "UPDATE todo SET title = ? WHERE id = ?";
  con.query(sql, [title, id], (err, result) => {
    if (err) {
      console.error("Error updating record:", err);
      res.status(500).send("Error updating the to-do item.");
      return;
    }

    console.log("Updated result:", result);
    res.status(200).send({ id, title });
  });
});

module.exports = router;
