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
});

// Inquirer Prompts
function employeeQuestions() {
  inquirer
    .prompt({
      message: "Welcome. Please Select An Option",
      type: "list",
      name: "choice",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update Employee",
      ],
    })
    .then((answers) => {
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
        case "View Departments":
          viewDepartment();
          break;
        case "View Roles":
          viewRole();
          break;
        case "View Employees":
          viewEmployee();
          break;
        case "Update Employee":
          updateEmployee();
          break;
        case "Exit":
          console.log("Transaction Completed! Exiting Employee Tracker");
          if (err) throw err;
          console.log(err);
          break;
          connection.end();
      }
    });
}

// add department function
function addDepartment() {
  inquirer
    .prompt([
      {
        message: "What is the Department Name?",
        type: "input",
        name: "dept_name",
      },
    ])
    .then(function (res) {
      connection.query(
        "INSERT INTO  department(dept_name) VALUES(?)",
        [res.dept_name],
        function (err) {
          if (err) throw err;
          console.log(`The Department ${res.dept_name} has been created.`);
          employeeQuestions();
        }
      );
    });
}

// add role function using inquirer
function addRole() {
  inquirer
    .prompt([
      {
        message: "What is the Organizational Title?",
        type: "input",
        name: "title",
      },
      {
        message: "What is the Salary for this Title?",
        type: "input",
        name: "salary",
      },
      {
        message: "What is the Department ID for this Title?",
        type: "input",
        name: "department_id",
      },
    ])
    .then(function (res) {
      connection.query(
        "INSERT INTO roles(id, title, salary, department_id ) VALUES(?,?,?,?)",
        [res.id, res.title, res.salary, res.department_id],
        function (err) {
          if (err) throw err;
          console.log(
            `The Organizational Role of ${res.title} has been created.`
          );
          employeeQuestions();
        }
      );
    });
}

// add employees
function addEmployee() {
  inquirer
    .prompt([
      {
        message: "What is the Employee's First Name?",
        type: "input",
        name: "first_name",
      },
      {
        message: "What is the Employee's Last Name?",
        type: "input",
        name: "last_name",
      },
      {
        message: "What is the Employee's Role ID?",
        type: "input",
        name: "role_id",
      },
      {
        message: "What is the Employee's Manager ID?",
        type: "input",
        name: "manager_id",
      },
    ])
    .then(function (res) {
      connection.query(
        "INSERT INTO employee(first_name, last_name, manager_id, role_id ) VALUES(?,?,?,?)",
        [res.first_name, res.last_name, res.role_id, res.manager_id],
        function (err) {
          if (err) throw err;
          console.log(
            `The employee ${res.first_name} ${res.last_name} has been added.`
          );
          employeeQuestions();
        }
      );
    });
}

// view departments
function viewDepartment() {
  let query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    employeeQuestions();
  });
}

// view roles
function viewRole() {
  let query = "SELECT * FROM roles";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log(err);
    console.table(res);
    employeeQuestions();
  });
}

// view employees
function viewEmployee() {
  let query = "SELECT * FROM employee";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    employeeQuestions();
  });
}

function updateEmployee() {
  let query = "SELECT * FROM employee";

  const employee = connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });

  // inquirer
  // .prompt({
  //   message: "Please Choose an Employee to Update",
  //   type: "list",
  //   name: "choice",
  //   choices: [

  //   ]
}

// fancy intro logo (for ascii)
const showLogo = () => {
  console.log("╔═╗╔╦╗╔═╗╦  ╔═╗╦ ╦╔═╗╔═╗");
  console.log("║╣ ║║║╠═╝║  ║ ║╚╦╝║╣ ║╣");
  console.log("╚═╝╩ ╩╩  ╩═╝╚═╝ ╩ ╚═╝╚═╝");
  console.log("                        ");
  console.log("╔╦╗╦═╗╔═╗╔═╗╦╔═╔═╗╦═╗");
  console.log(" ║ ╠╦╝╠═╣║  ╠╩╗║╣ ╠╦╝");
  console.log(" ╩ ╩╚═╩ ╩╚═╝╩ ╩╚═╝╩╚═");
};
