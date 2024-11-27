var express = require("express");
var router = express.Router();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "project7database",
});

router.get(`/`, function (req, res, next) {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });

  var sql = `SELECT users_name FROM user WHERE user_id=3`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.status(200).send(`You've successfully deleted the student`);
  });
  res.send("successfll login");
});

module.exports = router;
