const inquirer = require("inquirer");
const mysql = require("mysql2");
// const { type } = require("os");

const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "drowssap",
    database: "company_directory",
  },
  console.log(`Connected to the company database.`)
);

const mainDirectory = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message:
          "Welcome to the company database! What data would you like to see?",
        name: "initialChoice",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "update an employee role",
        ],
      },
    ])
    .then((answer) => {
      console.log(answer.initialChoice);
      choiceRouter(answer);
    });
};

function choiceRouter(answer) {
  console.log(answer);

  if (answer.initialChoice == "view all departments") {
    console.log("show department table");

    db.query("SELECT * FROM departments", function (err, results) {
      console.table(results);
    });
  } else if (answer.initialChoice == "view all roles") {
    console.log("show roles table");

    // db.query("SELECT * FROM roles", function (err, results) {
    //   console.table(results);
    // });
    db.query(
      "SELECT roles.title, departments.name, roles.salary FROM roles INNER JOIN departments ON roles.department_id=departments.id",
      function (err, results) {
        console.table(results);
      }
    );
  } else if (answer.initialChoice == "view all employees") {
    console.log("show employee table");

    db.query("SELECT * FROM employee", function (err, results) {
      console.table(results);
    });
    db.query(
      "SELECT e.id, e.first_name, e.last_name, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e LEFT JOIN employee m ON m.id = e.manager_id",
      //   "SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary FROM employee INNER JOIN roles ON employee.roles_id=roles.id INNER JOIN departments.name ON roles.department_id=departments.id",
      function (err, results) {
        console.table(results);
      }
    );
  } else if (answer.initialChoice == "add a department") {
    console.log("add department");
    addDepartment();
  } else if (answer.initialChoice == "add a role") {
    console.log("add role");
    addRole();
  } else if (answer.initialChoice == "update an employee role") {
    console.log("update employee role");
    addEmployee();
  }
}

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the new department?",
        name: "newDepartment",
      },
    ])
    .then((answer) => {
      console.log(answer.newDepartment);
      departmentName = answer.newDepartment;
      db.query("INSERT INTO departments SET name =?", [departmentName]);
    });
};
const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the new role?",
        name: "newRole",
      },
    ])
    .then((answer) => {
      console.log(answer.newRole);
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the new employee?",
        name: "newEmployee",
      },
    ])
    .then((answer) => {
      console.log(answer.newEmployee);
    });
};
mainDirectory();
