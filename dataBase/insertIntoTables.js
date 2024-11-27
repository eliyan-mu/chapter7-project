function addToTable(tableName, columns, values) {
  // con.connect(function (err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  // const columnsStr=""
  // values.forEach()
  const sql = `INSERT INTO ${tableName} (${columns}) VALUES ${values}`;
  console.log("sql: ", sql);

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.table(result);
  });
}
