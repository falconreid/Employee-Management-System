const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  password: "JumbleBum!96",
  user: "root",
  database: "employeeDB",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  showLogo();
  // employeeQuestions();
  connection.end();
});

// Inquirer Prompts
// const employeeQuestions = () => {
//   inquirer.prompt([]);
// };

const showLogo = () => {
  console.log("╔═╗╔╦╗╔═╗╦  ╔═╗╦ ╦╔═╗╔═╗");
  console.log("║╣ ║║║╠═╝║  ║ ║╚╦╝║╣ ║╣");
  console.log("╚═╝╩ ╩╩  ╩═╝╚═╝ ╩ ╚═╝╚═╝");
  console.log("                        ");
  console.log("╔╦╗╦═╗╔═╗╔═╗╦╔═╔═╗╦═╗");
  console.log(" ║ ╠╦╝╠═╣║  ╠╩╗║╣ ╠╦╝");
  console.log(" ╩ ╩╚═╩ ╩╚═╝╩ ╩╚═╝╩╚═");
};
