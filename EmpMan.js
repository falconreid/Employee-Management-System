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
  employeeQuestions();
  connection.end();
});

// Inquirer Prompts
const employeeQuestions = () => {
  inquirer.prompt({
    message: "Welcome. Please Select An Option",
    type: "list",
    name: "choice",
    choices: [
      "Add Department",
      "Add Role",
      "Add Employee",
      "View Department",
      "View Role",
      "View Employee",
      "Update Employee",
      "I Am Done"
      //   "Delete Department",
      //   "Delete Role",
      //   "Delete Employee"
    ] .then((answers) => {
        switch (answers.choice) {
            case "Add Department":
            addDepartment();  
            break;
            case "Add Role":
            addRole();
            break; 
            case "Add Employee":
            addEmployee();
            break; 
            case "View Department":
            viewDepartment();
            break;
            case "View Role":
            viewRole();
            break;
            case "View Employee":
            viewEmployee();
            break;
            case "Update Employee":
            updateEmployee();
            break;
            case "I Am Done":
                console.log("Transaction Completed!");
                if (err) throw err;
            console.log(err);
            break;
        });
  });
};

const showLogo = () => {
  console.log("╔═╗╔╦╗╔═╗╦  ╔═╗╦ ╦╔═╗╔═╗");
  console.log("║╣ ║║║╠═╝║  ║ ║╚╦╝║╣ ║╣");
  console.log("╚═╝╩ ╩╩  ╩═╝╚═╝ ╩ ╚═╝╚═╝");
  console.log("                        ");
  console.log("╔╦╗╦═╗╔═╗╔═╗╦╔═╔═╗╦═╗");
  console.log(" ║ ╠╦╝╠═╣║  ╠╩╗║╣ ╠╦╝");
  console.log(" ╩ ╩╚═╩ ╩╚═╝╩ ╩╚═╝╩╚═");
};
