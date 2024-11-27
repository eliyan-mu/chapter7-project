const mysql = require("mysql");
const fs = require("fs");
const con = require("./../con");

const path = require("path");

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
    res.status(200).send(" added successfully!");
  });
}

//delete
function deleteFromTable(tableName, deletedId, callback) {
  const sql = "DELETE FROM ?? WHERE id = ?";
  con.query(sql, [tableName, deletedId], (err, result) => {
    if (err) {
      console.error("Error deleting record:", err);
      return callback(err);
    }
    console.log("Deleted result:", result);
    callback(null);
  });
}
module.exports = {
  addToTable,
  deleteFromTable,
};
