const fs = require("fs");
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "project7database",
});

function addToTable(tableName, columns, values) {
  const sql = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;
  console.log("sql: ", sql);

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.table(result);
  });
}

// users
// addToTable(
//   "user",
//   "username, users_name, email",
//   '"user1", "Eliyan", "eliyan@gmail.com"'
// );
// addToTable(
//   "user",
//   "username, users_name, email",
//   '"user2", "Talia", "talia@example.com"'
// );
// addToTable(
//   "user",
//   "username, users_name, email",
//   '"user3", "Lucas", "lucas@example.com"'
// );

// passwords
// addToTable("user_password", "user_id, password", '"3", "123456"');
// addToTable("user_password", "user_id, password", '"4", "234567"');
// addToTable("user_password", "user_id, password", '"5", "345678"');

// // todos
// const tasks3 = [
//   "Take out the trash",
//   "Buy groceries",
//   "Clean the house",
//   "Walk the dog",
//   "Do laundry",
//   "Read a book",
//   "Write an email",
//   "Pay bills",
//   "Call mom",
//   "Organize the garage",
// ];

// const getRandomBoolean = () => Math.random() > 0.5;

// for (let i = 0; i < tasks3.length; i++) {
//   const task = tasks3[i];
//   const completed = getRandomBoolean();

//   const values = `"3", "${task}", ${completed}`;
//   const columns = "user_id, title, completed";
//   addToTable("todo", columns, values);
// }

// const tasks4 = [
//   "Finish homework",
//   "Schedule dentist appointment",
//   "Buy birthday gift",
//   "Clean out email inbox",
//   "Organize workspace",
//   "Prepare for meeting",
//   "Fix broken shelf",
//   "Water the plants",
//   "Grocery shopping",
//   "Write blog post",
// ];

// for (let i = 0; i < tasks4.length; i++) {
//   const task = tasks4[i];
//   const completed = getRandomBoolean();

//   const values = `"4", "${task}", ${completed}`;
//   const columns = "user_id, title, completed";
//   addToTable("todo", columns, values);
// }

// const tasks5 = [
//   "Wash the car",
//   "Make doctor's appointment",
//   "Update resume",
//   "Buy new shoes",
//   "Clean the bathroom",
//   "Set up budget",
//   "Order lunch",
//   "Check emails",
//   "Buy concert tickets",
//   "Take a walk in the park",
// ];

// for (let i = 0; i < tasks5.length; i++) {
//   const task = tasks5[i];
//   const completed = getRandomBoolean();

//   const values = `"5", "${task}", ${completed}`;
//   const columns = "user_id, title, completed";
//   addToTable("todo", columns, values);
// }
