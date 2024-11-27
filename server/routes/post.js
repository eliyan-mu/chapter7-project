var express = require("express");
var router = express.Router();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "project7database",
});

router.get("/", function (req, res, next) {
  res.send("entered post route");
});

/* GET ALL posts. */
router.get(`/:user_id`, function (req, res, next) {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  var sql = `SELECT * FROM post WHERE user_id = ${Number(req.params.user_id)}`;
  console.log("sql: ", sql);
  return con.query(sql, function (err, result) {
    if (err) throw err;

    return res.status(200).send(result);
  });
});

module.exports = router;
