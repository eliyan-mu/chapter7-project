var express = require("express");
var router = express.Router();
const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "project7database",
});

/* add school. */
router.post("/", async function (req, res, next) {
  console.log("req: ", req.body.adminId);
  if (await adminPassword(req.body.adminId, req.body.password)) {
    columns = ["name", "school_code"];
    values = [req.body.name, req.body.school_code];

    addToTable("school", columns, values);
    res.send("respond with a resource");
  } else {
    res.send("password incorrect");
  }
});

module.exports = router;
