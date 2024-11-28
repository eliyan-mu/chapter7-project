const mysql = require("mysql");
const fs = require("fs");
const con = require("../con");

const path = require("path");

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
  deleteFromTable,
};
