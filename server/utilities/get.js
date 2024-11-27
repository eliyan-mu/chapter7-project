var mysql = require("mysql");
var express = require("express");
var router = express.Router();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "project7database",
});

const toGet = function (sql) {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  return con.query(sql, function (err, result) {
    if (err) throw err;
    return res.status(200).send(result);
  });
};

module.exports = router;
