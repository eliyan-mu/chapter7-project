const mysql = require("mysql");
const fs = require("fs");
const con = require("../con");

const path = require("path");

function deleteFromTable(tableName, deletedId, res) {
  console.log("res: ", res);
  const sql = "DELETE FROM ?? WHERE id = ?";
  console.log("SQL: ", sql);

  con.query(sql, [tableName, deletedId], (err, result) => {
    if (err) {
      console.error("Error deleting record:", err);
      res.status(500).send("Error deleting data from the database.");
      return;
    }
    console.log("Deleted result:", result);
    res.status(200).send("Record deleted successfully.");
  });
}

module.exports = {
  deleteFromTable,
};
