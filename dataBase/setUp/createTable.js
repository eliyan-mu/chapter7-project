const fs = require("fs");
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "project7database",
});

const createTables = function () {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  let tablesArr = ["comment", "post", "user", "todo", "user_password"];

  let columns;
  for (let i = 0; i < tablesArr.length; i++) {
    columns = "";
    console.log("tablesArr[i]: ", tablesArr[i]);
    let fileContent = JSON.parse(
      fs.readFileSync(`./entities/${tablesArr[i]}.json`)
    );

    Object.keys(fileContent).forEach(function (key, index) {
      columns += `${key} ${fileContent[key]}, `;
    });
    columns = columns.slice(0, -2);

    var sql = `CREATE TABLE ${tablesArr[i]} (${columns})`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(`Table ${tablesArr[i]} created`);
    });
  }
};

createTables();
