var express = require("express");
var router = express.Router();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "project7database",
});

router.post(`/`, function (req, res, next) {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });

  const { username } = req.body;

  if (!username) {
    return res.status(400).send("username is required");
  }

  var sql = `SELECT id FROM user WHERE username = ?`;
  con.query(sql, [username], function (err, result) {
    console.log("result: ", result);
    if (err) throw err;
    if (result.length > 0) {
      return res.status(200).send(result[0].id);
    } else {
      return res.status(404).send("User not found");
    }
  });
});

module.exports = router;
