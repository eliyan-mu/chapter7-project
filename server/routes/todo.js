var express = require("express");
var router = express.Router();
const mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "project7database",
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Entered todo route");
});

// Function to insert data into a specific table
function addToTable(tableName, columns, values, res) {
  const sql = `INSERT INTO ${tableName} (${columns.join(",")}) VALUES (?)`;
  console.log("SQL: ", sql);

  con.query(sql, [values], function (err, result) {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data into the database.");
      return;
    }
    console.table(result);
    res.status(200).send("Todo added successfully!");
  });
}

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

module.exports = router;
