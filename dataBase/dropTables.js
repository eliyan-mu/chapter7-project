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
  con.query("DROP TABLE comment", function (err, result) {
    if (err) throw err;
    console.log("table deleted");
  });

  con.query("DROP TABLE post", function (err, result) {
    if (err) throw err;
    console.log("table deleted");
  });

  con.query("DROP TABLE todo", function (err, result) {
    if (err) throw err;
    console.log("table deleted");
  });

  con.query("DROP TABLE user_password", function (err, result) {
    if (err) throw err;
    console.log("table deleted");
  });

  con.query("DROP TABLE user", function (err, result) {
    if (err) throw err;
    console.log("table deleted");
  });
});
