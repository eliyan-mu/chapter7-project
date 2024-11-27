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

  var sql = `SELECT id FROM user WHERE username = ${req.body.username}`;
  con.query(sql, function (err, result) {
    console.log("result: ", result);
    if (err) throw err;
    return res.status(200).send(`query result is ${result}`);
  });
  // res.json(res);
  res.send("not successfll login");
});

module.exports = router;
