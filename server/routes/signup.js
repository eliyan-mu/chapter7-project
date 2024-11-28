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
  const { username, users_name, email, password } = req.body;

  if (!username || !users_name || !email || !password) {
    return res
      .status(400)
      .send("Some information is missing in the body of your request");
  }

  // Check if username exists
  var sql = `SELECT id FROM user WHERE username = ?`;
  con.query(sql, [username], function (err, usernameResult) {
    if (err) {
      return res.status(500).send({ message: "Internal server error" });
    }

    // If username doesn't exist, create a new user
    if (usernameResult.length === 0) {
      var insertUserSql = `INSERT INTO user (username, users_name, email) VALUES (?, ?, ?)`;
      con.query(
        insertUserSql,
        [username, users_name, email],
        function (err, insertUserResult) {
          if (err) {
            return res
              .status(500)
              .json({ message: "Internal server error in insertUserResult" });
          }

          // Get the new user id after insertion
          const userId = insertUserResult.insertId;

          // Insert user password into user_password table
          var insertPasswordSql = `INSERT INTO user_password (user_id, password) VALUES (?, ?)`;
          con.query(insertPasswordSql, [userId, password], function (err) {
            if (err) {
              return res.status(500).send({
                message: "Internal server error in insertPasswordSql",
              });
            } else {
              let userInfo = {
                userId,
                username,
              };

              return res.status(200).json({
                user: userInfo,
                message: "Signup successful",
              });
            }
          });
        }
      );
    } else {
      // If username already exists
      return res.status(509).json({ message: "Username taken" });
    }
  });
});

module.exports = router;
