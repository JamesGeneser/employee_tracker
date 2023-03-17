const inquirer = require("inquirer");
const mysql = require("mysql2");
const { last } = require("rxjs");
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
    db.query(
      "SELECT roles.title, departments.name, roles.salary FROM roles INNER JOIN departments ON roles.department_id=departments.id",
      function (err, results) {
        console.table(results);
      }
    );
  } else if (answer.initialChoice == "view all employees") {
    console.log("show employee table");
    db.query(
      "SELECT e.id, e.first_name, e.last_name, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e LEFT JOIN employee m ON m.id = e.manager_id",

      function (err, results) {
        console.table(results);
      }
    );
    db.query(
      "SELECT employee.id, employee.first_name, employee.last_name, departments.name, roles.title, roles.salary FROM employee INNER JOIN roles ON employee.role_id=roles.id INNER JOIN departments ON roles.department_id=departments.id",
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

//INNER JOIN departments ON roles.department_id=departments.id

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
      db.query("SELECT * FROM departments", function (err, results) {
        console.table(results);
      });
    });
};
const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the new role?",
        name: "role",
      },
      {
        type: "input",
        message: "What is the salary?",
        name: "salary",
      },
      {
        type: "list",
        message: "What department does the new role belong to?",
        name: "department",
        choices: [
          "finance",
          "marketing",
          "human resources",
          "operations management",
        ],
      },
    ])
    .then((answer) => {
      console.log(answer.role);
      roleTitle = answer.role;
      roleSalary = answer.salary;
      console.log(answer.salary);
      let sql = "INSERT INTO roles(title, salary) VALUES (?,?)";
      let values = [roleTitle, roleSalary];

      db.query(sql, values, (err, result) => {
        if (err) throw err;
        console.log("role added");
      });

      db.query("SELECT * FROM roles", function (err, results) {
        console.table(results);
      });
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of the new employee?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is their last name?",
        name: "last_name",
      },
      {
        type: "input",
        message: "What is their role?",
        name: "title",
      },
      {
        type: "list",
        message: "Who is their manager?",
        name: "manager",
        choices: ["Bax Nosburr", "Callie Mockentail", "Krom Drosbin"],
      },
    ])
    .then((answer) => {
      console.log(answer.first_name);
      first_name = answer.first_name;
      last_name = answer.last_name;
      title = answer.title;
      manager = answer.manager;

      let sql = "INSERT INTO employee(first_name, last_name) VALUES (?,?)";
      let values = [first_name, last_name];

      db.query(sql, values, (err, result) => {
        if (err) throw err;
        console.log("employee added");
      });

      db.query("SELECT * FROM employee", function (err, results) {
        console.table(results);
      });
    });
};
mainDirectory();

const showDepartments = () => {
  db.query("SELECT * FROM departments", function (err, results) {});
};
