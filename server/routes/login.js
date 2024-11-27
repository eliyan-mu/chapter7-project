var express = require("express");
var router = express.Router();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "project7database",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

router.post(`/`, function (req, res, next) {
  // check if username exist
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).send("username is required");
  }

  var sql = `SELECT id FROM user WHERE username = ?`;
  con.query(sql, [username], function (err, usernameResult) {
    if (err) {
      res.status(500).send({ message: "Internal server error" });
    }
    if (usernameResult.length > 0) {
      var sql = `SELECT password FROM user_password WHERE user_id = ${usernameResult[0].id}`;
      con.query(sql, function (err, passwordResult) {
        if (err) {
          res.status(500).json({ message: "Internal server error" });
        }
        if (passwordResult[0].password === password) {
          console.log("usernameResult[0].id ", usernameResult[0].id);
          return res.status(200).json({ userId: usernameResult[0].id });
        } else {
          return res
            .status(404)
            .json({ message: "Username or password incurrect" });
        }
      });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  });

  // check if password match
});

module.exports = router;
